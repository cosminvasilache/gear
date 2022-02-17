export type Tag = typeof tags[number];

const purposeOfVisitTags = [
	'work',
	'leisure',
] as const;

const durationTags = [
	'one-day',
	'short-stay',
	'long-stay',
] as const;

const seasonTags = [
	'spring',
	'summer',
	'autumn',
	'winter',
] as const;

const weatherTags = [
	'sun',
	'rain',
	'water',
	'snow',
] as const;

const destinationTags = [
	'domestic',
	'abroad',
] as const;

const meansOfTransportationTags = [
	'driving',
	'plane',
] as const;

const activityTags = [
	'sightseeing',
	'active-sport',
	'camping',
	'hiking',
	'climbing',
	'via-ferrata',
	'glacier-travel',
	'snowboarding',
	'mountain-biking',
] as const;

export const tags = [
	'all',
	...purposeOfVisitTags,
	...seasonTags,
	...weatherTags,
	...durationTags,
	...activityTags,
	...destinationTags,
	...meansOfTransportationTags,
] as const;
