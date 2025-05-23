<script setup lang="ts">
import WarningIcon from "~/assets/svg/warning.svg";
import CloseIcon from "~/assets/svg/close.svg";
import SimpleArrowIcon from "~/assets/svg/simple-arrow.svg";
import CalendarIcon from "~/assets/svg/calendar.svg";

import ChildrenWarningPopUp from "./ChildrenWarningPopUp/ChildrenWarningPopUp.vue";

import type { PassengerListType } from "./PassengerSelectPopUp/type";
import { TextInputStyleType } from "~/components/ui/TextInput/type";
import { DropDownInputStyleType } from "~/components/ui/DropDown/type";
import { CalendarType } from "./DateSelectPopUp/type";

const isChildrenPopUpOpen = ref(false);
const isPassengerSelectPopUpOpen = ref(false);
const isDateSelectPopUpOpen = ref(false);
const passengerList = ref<null | PassengerListType>(null);
const isOpen = ref(false);
const trip = ref("oneway");
const dateTicket = ref(<null | string>null);

const openChildrenPopUp = () => {
	isChildrenPopUpOpen.value = true;
};

const closeChildrenPopUp = () => {
	isChildrenPopUpOpen.value = false;
};

const openPassengerPopUp = () => {
	isPassengerSelectPopUpOpen.value = true;
};

const closePassengerPopUp = () => {
	isPassengerSelectPopUpOpen.value = false;
};

const openDateSelectPopUp = () => {
	isDateSelectPopUpOpen.value = true;
};

const closeDateSelectPopUp = () => {
	isDateSelectPopUpOpen.value = false;
};

const setPassengerList = (val: PassengerListType) => {
	passengerList.value = val;
};

const getPassengerNumber = () => {
	if (passengerList.value) {
		return (
			passengerList.value.adult +
			passengerList.value.children +
			passengerList.value.infant
		);
	}
};

const open = () => {
	if (!isOpen.value) {
		isOpen.value = true;
	}
};

const close = () => {
	isOpen.value = false;
};

const onTripChange = (val: string) => {
	trip.value = val;
};

const getCalendarType = () => {
	if (trip.value === "roundtrip") {
		return CalendarType.range;
	} else {
		return CalendarType.simple;
	}
};

const setDate = (val: any) => {
	dateTicket.value = val;
};
</script>

<template>
	<div
		:class="[
			'z-10  bg-opacity-var relative',
			{
				'bg-2': isOpen,
			},
			{
				'bg-2/80': !isOpen,
			},
		]"
	>
		<div class="container py-5 relative">
			<div class="flex gap-10 w-9/10" @click="open">
				<div class="basis-[calc(50%-1.25rem)]">
					<CommonFromTo />
				</div>

				<div class="basis-[calc(50%-1.25rem)]">
					<div class="w-1/2">
						<UiDropDown
							:values="[
								{ value: 'oneway', label: 'One way' },
								{ value: 'roundtrip', label: 'Round Trip' },
								{ value: 'multicity', label: 'Multi city' },
							]"
							label="Please Select"
							:style="DropDownInputStyleType.secondary"
							@on-change="onTripChange"
						/>
					</div>
				</div>
			</div>

			<div class="pt-5" v-if="isOpen">
				<button
					class="absolute top-5 right-5"
					@click="close"
					aria-label="close"
				>
					<CloseIcon class="text-8" />
				</button>

				<div class="flex" v-if="isOpen">
					<div class="flex flex-wrap gap-10 w-9/10">
						<div
							class="basis-[calc(50%-1.25rem)]"
							@click="openDateSelectPopUp"
						>
							<UiTextInput
								label="Departure Date"
								:style="TextInputStyleType.secondary"
								:value="dateTicket"
								:icon="CalendarIcon"
							/>
						</div>

						<div
							class="basis-[calc(50%-1.25rem)]"
							@click="openPassengerPopUp"
						>
							<UiTextInput
								label="Passengers/class"
								:style="TextInputStyleType.secondary"
								:value="
									passengerList
										? getPassengerNumber() +
										  ' Passengers, ' +
										  passengerList.type
										: 'Please Select'
								"
								:icon="SimpleArrowIcon"
							/>
						</div>

						<div class="basis-[calc(50%-1.25rem)]">
							<UiTextInput
								label="Promo code"
								:style="TextInputStyleType.secondary"
							/>
						</div>

						<div
							class="basis-[calc(50%-1.25rem)]"
							@click="openChildrenPopUp"
						>
							<button
								class="flex items-center w-full text-8 hover:underline justify-start space-x-1 text-sm"
								aria-label="öpen warning traveling with children"
							>
								<WarningIcon />
								<p>Notes on infants and children</p>
							</button>
						</div>
					</div>

					<div class="w-1/10">
						<div
							class="flex ml-auto items-center rounded-full bg-gradient-to-t from-5 to-6 text-white hover:text-blue justify-center w-[40px] h-[40px]"
						>
							<SimpleArrowIcon />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<ChildrenWarningPopUp
		v-if="isChildrenPopUpOpen"
		@close="closeChildrenPopUp"
	/>

	<SpecificFlightSelectPassengerSelectPopUp
		v-if="isPassengerSelectPopUpOpen"
		@close="closePassengerPopUp"
		@on-accept="setPassengerList"
	/>

	<SpecificFlightSelectDateSelectPopUp
		v-if="isDateSelectPopUpOpen"
		@close="closeDateSelectPopUp"
		:type="getCalendarType()"
		@sendData="setDate"
	/>
</template>
