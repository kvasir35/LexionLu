<script setup lang="ts">
import ExchangeArrowIcon from "~/assets/svg/exchange-arrow.svg";
import type { AeroportType } from "~/components/Common/AirportSelectPopUp/type";

const { openPopup } = useAirportSelectPopUp();

const departure = ref<null | AeroportType>(null);
const destination = ref<null | AeroportType>(null);

const onDepartureSelect = async () => {
	const result = await openPopup();
	departure.value = result as AeroportType;
};

const onDestinationSelect = async () => {
	const result = await openPopup();
	destination.value = result as AeroportType;
};

const exchange = () => {
	const tmp = departure.value;
	departure.value = destination.value;
	destination.value = tmp;
};
</script>

<template>
	<div class="flex justify-between space-x-15 w-full items-stretch">
		<button
			@click="onDepartureSelect"
			class="group flex items-center w-5/12"
			aria-label="departure place"
		>
			<span class="text-4xl flex-shrink-0 font-thin lg:mr-3">
				{{ departure ? departure.abbreviation : "From" }}
			</span>

			<span class="text-xs w-full group-hover:underline text-left">
				{{
					departure
						? departure.city + ", " + departure.country
						: "Please select"
				}}
			</span>
		</button>

		<button
			class="w-2/12 relative"
			@click="exchange"
			aria-label="exchange departure and arrival"
		>
			<ExchangeArrowIcon
				class="text-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			/>
		</button>

		<button
			@click="onDestinationSelect"
			class="group flex items-center w-5/12"
			aria-label="arrival place"
		>
			<span class="text-4xl flex-shrink-0 font-thin lg:mr-3">
				{{ destination ? destination.abbreviation : "To" }}
			</span>

			<span class="text-xs w-full group-hover:underline text-left">
				{{
					destination
						? destination.city + ", " + destination.country
						: "Please select"
				}}
			</span>
		</button>
	</div>
</template>
