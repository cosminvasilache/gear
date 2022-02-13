export type Category = typeof categories[number];

export const categories = [
	'id-paperwork',
	'tech',
	'data-information', // learning, music, reading, etc...
	'gear',
	'toiletries',
	'personal',
	'personal-care',
	'clothes',
	'accessories',
] as const;
