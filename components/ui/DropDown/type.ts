export const DropDownInputStyleType = {
	primary: "primary",
	secondary: "secondary",
};

export type DropDownInputStyleType =
	(typeof DropDownInputStyleType)[keyof typeof DropDownInputStyleType];
