<script setup lang="ts">
import airportData from "./AirportList.json";

const categories = airportData;
const selectedCategory = ref(<string | null>"Taiwan");

const { closePopup } = useAirportSelectPopUp();
</script>

<template>
	<LayoutPopUp @close="closePopup(null)">
		<div class="px-8 pt-10 pb-5">
			<h2 class="text-2xl mb-4">Please select</h2>

			<div>
				<UiTextInput label="Select airport" />
			</div>
		</div>

		<div class="flex border-t border-11 flex-1 min-h-0">
			<div class="max-h-full w-2/9 min-w-[150px]">
				<div class="p-8 flex flex-col gap-8 bg-10">
					<button
						:aria-label="group.category + 'airport'"
						v-for="group in categories"
						:key="group.category"
						@click="selectedCategory = group.category"
						:class="[
							'text-base text-left',
							{
								'font-bold':
									selectedCategory === group.category,
							},
						]"
					>
						{{ group.category }}
					</button>
				</div>
			</div>

			<div class="w-7/9 max-h-full min-w-[500px]">
				<h3 class="mx-8 my-2.5 lg:mt-4 lg:mb-2 text-xs">
					Operated by STARLUX Airlines
				</h3>

				<div v-for="group in categories" :key="group.category">
					<div
						v-if="selectedCategory === group.category"
						v-for="info in group.info"
						:key="info.abbreviation"
						@click="closePopup(info)"
						class="flex justify-between items-start py-4 px-8 cursor-pointer hover:underline text-4"
					>
						<div>
							<div class="font-bold">
								{{ info.city }}, {{ info.country }}
							</div>
							<p class="text-xs">{{ info.airport }}</p>
						</div>
						<div class="text-base uppercase font-semibold">
							{{ info.abbreviation }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</LayoutPopUp>
</template>
