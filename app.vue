<script setup lang="ts">
const { isOpen } = useAirportSelectPopUp();
useHead({
	title: "Homepage",
	meta: [
		{
			name: "My super homepage",
			content: "Details about my homepage",
		},
	],
	htmlAttrs: {
		lang: "en",
	},
});
</script>

<template>
	<UApp>
		<div>
			<LayoutMenu />
			<SpecificFlightSelect />
			<div class="h-screen w-screen absolute top-0 left-0">
				<CommonCarousel />
				<SpecificFlightInfo />
			</div>

			<CommonAirportSelectPopUp v-if="isOpen" />
		</div>
	</UApp>
</template>
