<script setup lang="ts">
import { TextInputStyleType } from "./type";

const props = withDefaults(
	defineProps<{
		label: string;
		mandatory?: boolean;
		style?: TextInputStyleType;
		value?: string | null;
		icon?: Object;
	}>(),
	{
		label: "",
		mandatory: false,
		style: TextInputStyleType.primary,
	}
);
</script>

<template>
	<div class="w-full h-full relative">
		<input
			placeholder=""
			:value="value && value"
			:class="[
				'w-full h-full rounded peer px-2 py-1 pt-5 focus:outline-none focus:ring-0 focus:border-transparent',
				{
					'bg-white border-4 text-4':
						style === TextInputStyleType.primary,
				},
				{
					'bg-14': style === TextInputStyleType.secondary,
				},
			]"
			:id="label"
		/>

		<component
			:is="icon"
			v-if="icon"
			:class="[
				'absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
				{
					'text-black': style === TextInputStyleType.primary,
				},
				{
					'text-8': style === TextInputStyleType.secondary,
				},
			]"
		/>

		<label
			:class="[
				'pointer-events-none absolute left-0 top-0 ml-2 mt-0 text-xs transition-all peer-placeholder-shown:mt-2 peer-placeholder-shown:text-base peer-focus:mt-0 peer-focus:text-xs',
				{
					'text-black': style === TextInputStyleType.primary,
				},
				{
					'text-8': style === TextInputStyleType.secondary,
				},
			]"
			:for="label"
		>
			<div class="inline-flex px-1">
				<span class="text-red-700 pr-1" v-if="props.mandatory">*</span
				>{{ props.label }}
			</div>
		</label>
	</div>
</template>
