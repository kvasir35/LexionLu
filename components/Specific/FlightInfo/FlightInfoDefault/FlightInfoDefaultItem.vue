<script setup lang="ts">
const props = defineProps<{
	icon: String;
	isLast?: Boolean;
}>();

const emit = defineEmits<{
	handleClick: [];
}>();

const handleClick = () => {
	emit("handleClick");
};
</script>

<template>
	<button
		class="w-full group relative text-center block lg:flex items-center lg:justify-center lg:text-white px-3 py-4 lg:py-0 lg:h-16 text-left lg:text-center focus:text-brown-darker lg:focus:text-yellow text-xl lg:text-base font-light"
		@click="handleClick()"
		aria-label="next"
	>
		<component :is="icon" class="w-4 h-4 mr-[10px]" />
		<slot />

		<span
			v-if="!props.isLast"
			class="h-1/2 border-r border-12 absolute right-0"
			>{{ props.isLast }}</span
		>
	</button>
</template>
