<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg";
import CompanyName from "~/assets/svg/company-name.svg";
import MenuItem from "./MenuItem.vue";
</script>

<template>
	<div class="bg-1/80 z-10 relative">
		<div class="container">
			<div class="py-3">
				<div class="flex items-end">
					<Logo />
					<CompanyName />
				</div>

				<div
					class="flex justify-between items-center h-full w-6 absolute right-0 top-0 bottom-0 border-2 border-transparent border-dotted focus:border-white z-30"
				>
					<span
						class="flex items-center w-full hover:underline justify-center space-x-1 text-base pointer-events-none"
					>
						<span class="sr-only">
							<span data-i18n-text="CW_index07">Search</span>
						</span>
					</span>
				</div>
			</div>

			<nav class="lg:flex justify-between">
				<MenuItem> Plan a trip </MenuItem>
				<MenuItem> Timetable </MenuItem>
				<MenuItem> Flight status </MenuItem>
				<MenuItem> Check in & flight </MenuItem>
				<MenuItem> COSMILE </MenuItem>
				<MenuItem> Support </MenuItem>
			</nav>
		</div>
	</div>
</template>
