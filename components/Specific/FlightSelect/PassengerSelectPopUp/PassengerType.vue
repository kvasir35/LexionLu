<script setup lang="ts">
import AddIcon from "~/assets/svg/add.svg";
import LessIcon from "~/assets/svg/less.svg";

const props = defineProps<{
	icon: Object;
	label: String;
	quantity: Number;
	min: Number;
	warning?: String;
}>();

const emit = defineEmits(["reduce", "add"]);
</script>

<template>
	<div class="flex items-center mb-3">
		<div class="">
			<component :is="icon" class="text-12" />
		</div>

		<div class="w-full">
			<div>{{ label }}</div>
			<div class="text-4 text-xs" v-if="warning">{{ warning }}</div>
		</div>

		<div class="flex gap-5">
			<button @click="quantity > min && emit('reduce')" aria-label="less">
				<LessIcon
					:class="[
						{
							'text-12': quantity <= min,
						},
					]"
				/>
			</button>

			<div class="text-4">{{ quantity }}</div>

			<button @click="emit('add')" aria-label="more">
				<AddIcon />
			</button>
		</div>
	</div>
</template>
