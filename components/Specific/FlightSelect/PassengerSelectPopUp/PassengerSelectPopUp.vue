<script setup lang="ts">
import AdultIcon from "~/assets/svg/adult.svg";
import ChildIcon from "~/assets/svg/child.svg";
import InfantIcon from "~/assets/svg/infant.svg";
import PassengerType from "./PassengerType.vue";
import type { PassengerListType } from "./type";

const adultNb = ref(1);
const childNb = ref(0);
const infantNb = ref(0);
const type = ref(<string | null>null);

const emit = defineEmits<{
	close: [];
	"on-accept": [PassengerListType];
}>();

const onTypeChange = (newVal: string) => {
	type.value = newVal;
};

const validate = () => {
	if (type.value) {
		emit("on-accept", {
			adult: adultNb.value,
			children: childNb.value,
			infant: infantNb.value,
			type: type.value,
		});

		emit("close");
	}
};
</script>

<template>
	<LayoutPopUp @close="emit('close')">
		<div class="p-8">
			<h2 class="text-2xl border-b border-11 pb-6">
				Passengers and Class
			</h2>

			<div class="flex mb-6 pt-6">
				<div class="w-1/2 border-r border-11">
					<h3 class="text-xl">Passengers</h3>

					<div class="mt-5 mr-8">
						<PassengerType
							label="Adult (12+)"
							:icon="AdultIcon"
							:quantity="adultNb"
							:min="1"
							@reduce="adultNb--"
							@add="adultNb++"
						/>

						<PassengerType
							label="Child (2 to 11)"
							:icon="ChildIcon"
							:quantity="childNb"
							:min="0"
							@reduce="childNb--"
							@add="childNb++"
						/>

						<PassengerType
							label="Infant (0 to 1)"
							:icon="InfantIcon"
							:quantity="infantNb"
							:min="0"
							warning="Not occupying a seat"
							@reduce="infantNb--"
							@add="infantNb++"
						/>
					</div>
				</div>

				<div class="w-1/2 px-8">
					<h3 class="text-xl mb-4">Class</h3>

					<div>
						<UiDropDown
							label="Type"
							defaultValue="Please Select"
							:values="[
								{ label: 'Economy', value: 'Economy' },
								{
									label: 'Prenium Economy',
									value: 'Prenium Economy',
								},
								{ label: 'Business', value: 'Business' },
								{ label: 'First', value: 'First' },
							]"
							@on-change="onTypeChange"
						/>
					</div>
				</div>
			</div>

			<div class="w-full text-center">
				<UiButton @handleClick="validate"> Confirm </UiButton>
			</div>
		</div>
	</LayoutPopUp>
</template>
