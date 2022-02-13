export type Tag = typeof tags[number];

export const tags = [
	'all',
	'one-day',
	'spring',
	'summer',
	'autumn',
	'winter',
	'sunny',
	'rainy',
	'short-stay',
	'long-stay',
	'work',
	'sport',
	'hiking',
	'climbing',
	'via-ferrata',
	'glacier-travel',
	'snowboarding',
	'water',
] as const;
