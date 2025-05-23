import { ref } from "vue";
import type { AeroportType } from "~/components/Common/AirportSelectPopUp/type";

type PopupResolver = (result: AeroportType | null) => void;

const popupResolver = ref<null | PopupResolver>(null);
const isOpen = ref(false);

export const useAirportSelectPopUp = () => {
	const openPopup = () => {
		isOpen.value = true;
		return new Promise((resolve) => {
			popupResolver.value = resolve;
		});
	};

	const closePopup = (result: AeroportType | null) => {
		if (result) {
			popupResolver.value?.(result);
			popupResolver.value = null;
		}
		isOpen.value = false;
	};

	return {
		openPopup,
		closePopup,
		isOpen,
	};
};
