<script setup lang="ts">
import ArrowIcon from "~/assets/svg/arrow.svg";
import ValidateIcon from "~/assets/svg/validate.svg";
import SimpleArrowIcon from "~/assets/svg/simple-arrow.svg";

import { StatusList } from "../type";

const emit = defineEmits(["update-status"]);
</script>

<template>
	<div class="container flex py-3 justify-between">
		<div class="flex gap-5 w-2/12 items-center">
			<button
				aria-label="Return"
				@click="emit('update-status', StatusList.DEFAULT)"
			>
				<ArrowIcon />
			</button>

			<ValidateIcon />

			<p>Check-in</p>
		</div>

		<div class="flex w-9/12 items-center space-x-6">
			<div class="w-1/3 h-full">
				<UiTextInput
					:mandatory="true"
					label="Booking reference/E-ticket number"
				/>
			</div>

			<div class="w-1/3 h-full">
				<UiTextInput :mandatory="true" label="Last name/Surname" />
			</div>

			<div class="w-1/3 h-full">
				<UiTextInput :mandatory="true" label="First name/Given name" />
			</div>
		</div>

		<div
			class="flex items-center rounded-full bg-gradient-to-t from-5 to-6 text-white hover:text-blue justify-center w-[40px] h-[40px]"
		>
			<SimpleArrowIcon />
		</div>
	</div>
</template>
