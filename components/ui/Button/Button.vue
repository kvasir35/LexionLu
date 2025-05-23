<script setup lang="ts">
const emit = defineEmits<{
	handleClick: [];
}>();
</script>

<template>
	<button
		@click="emit('handleClick')"
		class="px-15 py-2 bg-13 rounded text-white"
		aria-label="validate"
	>
		<slot />
	</button>
</template>
