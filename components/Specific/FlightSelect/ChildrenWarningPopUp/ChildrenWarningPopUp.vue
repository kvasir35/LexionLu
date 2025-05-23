<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<template>
	<LayoutPopUp @close="emit('close')">
		<div class="p-8">
			<h2 class="text-2xl pb-6">Notes on infants and children</h2>

			<div>
				<h3 class="text-lg">Infants</h3>
				<p>
					A parent, legal guardian or adult over 18 years old can
					travel with 1 infant (under 2 years old and not occupying a
					seat). To book another infant occupying a seat, please
					contact STARLUX Customer Service Center.
				</p>
			</div>

			<div class="mt-5">
				<h3 class="text-lg">Children</h3>
				<p>
					A parent, legal guardian or adult over 18 years old can
					travel with a maximum of 8 children, with the number of
					children aged 2-4 limited to 3.
				</p>
			</div>

			<div class="mt-5">
				<h3 class="text-lg">Infants and Children</h3>

				<p>
					A parent, legal guardian or adult over 18 years old can
					travel with 1 infant (including infant occupying a seat) and
					2 children at most. To purchase a child or infant ticket
					only, please contact STARLUX Customer Service Center.
				</p>
			</div>
		</div>
	</LayoutPopUp>
</template>
