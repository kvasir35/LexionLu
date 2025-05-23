<script setup lang="ts">
import PlaneIcon from "~/assets/svg/plane.svg";
import ValidateIcon from "~/assets/svg/validate.svg";
import ClockIcon from "~/assets/svg/clock.svg";

import { StatusList } from "../type";

const emit = defineEmits<{
	updateStatus: [number];
}>();
</script>

<template>
	<div class="container lg:flex justify-between">
		<SpecificFlightInfoFlightInfoDefaultItem
			:icon="PlaneIcon"
			@handleClick="emit('updateStatus', StatusList.MY_TRIP)"
		>
			My trip
		</SpecificFlightInfoFlightInfoDefaultItem>

		<SpecificFlightInfoFlightInfoDefaultItem
			:icon="ValidateIcon"
			@handleClick="emit('updateStatus', StatusList.CHECK_IN)"
		>
			Check in
		</SpecificFlightInfoFlightInfoDefaultItem>

		<SpecificFlightInfoFlightInfoDefaultItem
			:icon="ClockIcon"
			@handleClick="emit('updateStatus', StatusList.FLIGHT_STATUS)"
			:isLast="true"
		>
			Flight status
		</SpecificFlightInfoFlightInfoDefaultItem>
	</div>
</template>
