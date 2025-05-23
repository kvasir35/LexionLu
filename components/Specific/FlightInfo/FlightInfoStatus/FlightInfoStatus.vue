<script setup lang="ts">
import ArrowIcon from "~/assets/svg/arrow.svg";
import ClockIcon from "~/assets/svg/clock.svg";
import SimpleArrowIcon from "~/assets/svg/simple-arrow.svg";

import { StatusList } from "../type";

const emit = defineEmits<{
	updateStatus: [number];
}>();

const flightStatusList = [
	{
		value: "route",
		label: "Route",
	},
	{
		value: "flight",
		label: "Flight",
	},
];

const status = ref(flightStatusList[0].value);

const UpdateStatus = (val: string) => {
	status.value = val;
};
</script>

<template>
	<div class="container flex py-3 justify-between">
		<div class="flex gap-5 w-2/12 items-center">
			<button
				aria-label="return"
				@click="emit('updateStatus', StatusList.DEFAULT)"
			>
				<ArrowIcon />
			</button>

			<ClockIcon />

			<p>Flight Status</p>
		</div>

		<div class="w-2/12">
			<UiDropDown
				@on-change="UpdateStatus"
				label="SearchBy"
				:values="flightStatusList"
			/>
		</div>

		<template v-if="status === 'route'">
			<div class="w-5/12 items-center">
				<div class="w-2/3 h-full">
					<UiTextInput label="Flight number" />
				</div>
			</div>
		</template>

		<template v-if="status === 'flight'">
			<div class="flex w-5/12 items-center">
				<CommonFromTo />
			</div>
		</template>

		<div
			class="flex items-center rounded-full bg-gradient-to-t from-5 to-6 text-white hover:text-blue justify-center w-[40px] h-[40px]"
		>
			<SimpleArrowIcon />
		</div>

		<div class="w-1/12"></div>
	</div>
</template>
