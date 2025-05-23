export const TextInputStyleType = {
	primary: "primary",
	secondary: "secondary",
};

export type TextInputStyleType =
	(typeof TextInputStyleType)[keyof typeof TextInputStyleType];
