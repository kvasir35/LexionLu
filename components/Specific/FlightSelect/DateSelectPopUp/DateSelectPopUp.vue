<script setup lang="ts">
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import { CalendarType } from "./type";

const props = defineProps<{
	type: CalendarType;
}>();

const emit = defineEmits<{
	close: [];
	sendData: [string];
}>();

const date = ref<Date>(new Date());

const dateRange = ref<{
	start: Date;
	end: Date;
}>({
	start: new Date(),
	end: new Date(),
});

const sendData = () => {
	if (props.type === CalendarType.simple) {
		emit("sendData", formatDate(date.value));
	} else if (props.type === CalendarType.range) {
		emit(
			"sendData",
			formatDate(dateRange.value.start) +
				" - " +
				formatDate(dateRange.value.end)
		);
	}

	emit("close");
};

const formatDate = (date?: Date): string => {
	if (!date) return "";
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}/${month}/${day}`;
};
</script>

<template>
	<LayoutPopUp @close="emit('close')">
		<div class="p-8">
			<h2 class="text-2xl mb-6">Please select travel dates</h2>

			<p class="mb-4">
				<template v-if="type === CalendarType.range">
					Departure date
					<span class="text-semibold text-brown-darker text-4">
						{{ formatDate(dateRange.start) }}
					</span>
					- Return date
					<span class="text-semibold text-brown-darker text-4">
						{{ formatDate(dateRange.end) }}
					</span>
				</template>

				<template v-if="type === CalendarType.simple">
					<span class="text-semibold text-brown-darker text-4">
						{{ formatDate(date) }}
					</span>
				</template>
			</p>

			<div class="w-full">
				<DatePicker
					v-model="dateRange"
					is-range
					:columns="2"
					:min-date="new Date()"
					:popover="false"
					color="gray"
					expanded
					v-if="type === CalendarType.range"
				/>

				<DatePicker
					v-model="date"
					:columns="2"
					:min-date="new Date()"
					:popover="false"
					color="gray"
					expanded
					v-if="type === CalendarType.simple"
				/>
			</div>

			<div class="text-center w-full mt-4">
				<UiButton @click="sendData">Apply</UiButton>
			</div>
		</div>
	</LayoutPopUp>
</template>
