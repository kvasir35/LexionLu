<script setup lang="ts">
import CloseIcon from "~/assets/svg/close.svg";

const emit = defineEmits(["close"]);
</script>

<template>
	<div class="fixed top-0 left-0 h-full w-full bg-9/90 z-100"></div>

	<div
		class="fixed bg-7 text-1 top-1/2 left-1/2 z-101 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] w-[800px] overflow-y-auto flex flex-col"
	>
		<button
			aria-label="close"
			class="absolute top-5 right-5"
			@click="emit('close')"
		>
			<CloseIcon />
		</button>
		<slot />
	</div>
</template>
