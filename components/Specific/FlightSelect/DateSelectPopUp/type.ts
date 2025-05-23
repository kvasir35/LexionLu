export const CalendarType = {
	simple: "simple",
	range: "range",
};

export type CalendarType = (typeof CalendarType)[keyof typeof CalendarType];
