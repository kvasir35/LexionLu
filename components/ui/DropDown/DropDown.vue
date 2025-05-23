<script setup lang="ts">
import SimpleArrowIcon from "~/assets/svg/simple-arrow.svg";
import { DropDownInputStyleType } from "./type";

interface DropDownItem {
	value: String;
	label: String;
}

const props = withDefaults(
	defineProps<{
		label: string;
		values: DropDownItem[];
		style?: DropDownInputStyleType;
		defaultValue?: String;
	}>(),
	{
		label: "",
		style: DropDownInputStyleType.primary,
	}
);

const emit = defineEmits<{
	"on-change": [string];
}>();

function handleChange(event: any) {
	const select = event.currentTarget as HTMLSelectElement;
	emit("on-change", select.value);
}
</script>

<template>
	<div class="flex flex-col space-y-2 w-full h-full">
		<div class="flex relative rounded bg-7 h-full">
			<div
				:class="[
					'relative block w-full border-4 rounded',
					{
						'border-4': style === DropDownInputStyleType.primary,
					},
					{
						'border-14': style === DropDownInputStyleType.secondary,
					},
				]"
			>
				<label
					:class="[
						'z-5 pointer-events-none absolute left-0 top-0 ml-2 mt-0 text-xs transition-all',
						{
							'text-black':
								style === DropDownInputStyleType.primary,
						},
						{
							'text-8':
								style === DropDownInputStyleType.secondary,
						},
					]"
					:for="label"
				>
					<div class="inline-flex px-1">
						{{ props.label }}
					</div>
				</label>

				<div class="relative h-full">
					<select
						:id="label"
						:class="[
							'appearance-none block w-full px-2 py-1 pt-4 text-4 h-full w-full  focus:ring-0 focus:outline-none',
							{
								'border-1 border rounded':
									style === DropDownInputStyleType.primary,
							},
							{
								'bg-14 text-white border-none':
									style === DropDownInputStyleType.secondary,
							},
						]"
						@change="handleChange"
					>
						<option
							v-if="defaultValue"
							value=""
							selected
							disabled
							hidden
						>
							{{ defaultValue }}
						</option>

						<option
							v-for="(item, index) in props.values"
							:key="index"
							class="bg-blue text-white"
							:value="item.value"
						>
							{{ item.label }}
						</option>
					</select>

					<span
						class="absolute inset-y-0 right-0 flex items-center justify-center p-2 pointer-events-none"
					>
						<SimpleArrowIcon
							class=""
							:class="[
								'rotate-90 w-[16px] z-5',
								{
									'text-black':
										style ===
										DropDownInputStyleType.primary,
								},
								{
									'text-8':
										style ===
										DropDownInputStyleType.secondary,
								},
							]"
						/>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
