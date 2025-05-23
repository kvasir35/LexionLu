<script setup lang="ts">
import {
	SpecificFlightInfoFlightInfoCheckIn,
	SpecificFlightInfoFlightInfoMyTrip,
	SpecificFlightInfoFlightInfoStatus,
} from "#components";

import { StatusList } from "./type";

const status = ref(StatusList.DEFAULT);

const updateStatus = (newStatus: number) => {
	status.value = newStatus;
};
</script>

<template>
	<div
		class="bg-3 w-100 flex h-[70px] absolute bottom-0 w-screen z-10 border-t border-b border-12"
	>
		<SpecificFlightInfoFlightInfoDefault
			@updateStatus="updateStatus"
			v-if="status === StatusList.DEFAULT"
		/>

		<SpecificFlightInfoFlightInfoMyTrip
			@updateStatus="updateStatus"
			v-if="status === StatusList.MY_TRIP"
		/>

		<SpecificFlightInfoFlightInfoCheckIn
			@updateStatus="updateStatus"
			v-if="status === StatusList.CHECK_IN"
		/>

		<SpecificFlightInfoFlightInfoStatus
			@updateStatus="updateStatus"
			v-if="status === StatusList.FLIGHT_STATUS"
		/>
	</div>
</template>
