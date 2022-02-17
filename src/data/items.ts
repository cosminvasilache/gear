import { Tag } from './tags';
import { Category } from './categories';

export type Item = {
	name: string;
	tags: Set<Tag>;
	exclusionTags?: Set<Tag>;
	category: Category;
	comments?: String[];
	important?: boolean;
	// ammount: number;
	// unitOfMeasurement: string;
	// gramsPerUnitOfMeasurement: number;
}

export const items: Item[] = [
	// #region ID-PAPERWORK
	{
		name: 'id',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'drivers licence',
		tags: new Set<Tag>(([
			'all',
			'driving',
		])),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'passport',
		tags: new Set<Tag>([
			'abroad',
		]),
		exclusionTags: new Set<Tag>([
			'domestic',
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'visa',
		tags: new Set<Tag>([
			'abroad',
		]),
		exclusionTags: new Set<Tag>([
			'domestic',
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'travel insurance',
		tags: new Set<Tag>([
			'abroad',
		]),
		exclusionTags: new Set<Tag>([
			'domestic',
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'car paperwork',
		tags: new Set<Tag>([
			'driving',
		]),
		category: 'id-paperwork',
		comments: [
			'Periodic Technical Inspection',
			'Road tax',
			// correct tyres
			// chains
			// working lights
		],
	},
	// #endregion
	// #region TECH 
	{
		name: 'phone',
		tags: new Set<Tag>([
			'all'
		]),
		category: 'tech',
	},
	{
		name: 'phone charger + cable',
		tags: new Set<Tag>([
			'all',
		]),
		exclusionTags: new Set<Tag>([
			'one-day'
		]),
		category: 'tech',
	},
	{
		name: 'power bank + cable',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'tech',
	},
	{
		name: 'wireless earbuds',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'tech',
	},
	{
		name: 'wireless noisecanceling headset',
		tags: new Set<Tag>([
			'plane',
			'work',
			'leisure',
			'long-stay',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'tech',
	},
	{
		name: 'laptop',
		tags: new Set<Tag>([
			'work',
			'sightseeing',
			'long-stay',
		]),
		category: 'tech',
	},
	{
		name: 'laptop charger',
		tags: new Set<Tag>([
			'work',
			'sightseeing',
			'long-stay',
		]),
		category: 'tech',
	},
	{
		name: 'wired earbuds',
		tags: new Set<Tag>([
			'work',
		]),
		category: 'tech',
		comments: ['For redundancy.'],
	},
	{
		name: '3.5mm jack to USB-C adapter',
		tags: new Set<Tag>([
			'work',
		]),
		category: 'tech',
	},
	{
		name: 'watch',
		tags: new Set<Tag>([
			'all'
		]),
		category: 'tech',
	},
	{
		name: 'camera',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'tech',
	},
	{
		name: 'monitor',
		tags: new Set<Tag>([
			'work',
		]),
		category: 'tech',
	},
	// #endregion
	// #region DATA-INFORMATION
	{
		name: 'download maps',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'data-information',
	},
	{
		name: 'download music',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'data-information',
	},
	{
		name: 'download books',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'data-information',
		comments: ['You might want to read instead of listen. You might not have headphones. It might be loud.'],
	},
	{
		name: 'download audiobooks',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'data-information',
	},
	{
		name: 'download movies',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'data-information',
	},
	// #endregion
	// #region GEAR
	{
		name: 'backpack',
		tags: new Set<Tag>([
			'all',
			'snowboarding',
		]),
		category: 'gear',
		comments: ['Pick the right type and size for the ocasion.', 'Bring multiple if you are doing more than one activity.'],
	},
	{
		name: 'backpack raincover',
		tags: new Set<Tag>([
			'rain',
		]),
		category: 'gear',
	},
	{
		name: 'water resistant jacket',
		tags: new Set<Tag>([
			'rain',
			'hiking',
			'climbing',
			'camping',
		]),
		category: 'gear',
	},
	{
		name: 'water resistant overpants',
		tags: new Set<Tag>([
			'rain',
			'hiking',
		]),
		category: 'gear',
	},
	{
		name: 'dry bag',
		tags: new Set<Tag>([
			'rain',
			'snow',
			'plane',
		]),
		category: 'gear',
	},
	{
		name: 'multitool',
		tags: new Set<Tag>([
			'all',
			'camping',
			'hiking',
			'climbing',
			'snowboarding',
		]),
		exclusionTags: new Set<Tag>([
			'plane',
		]),
		category: 'gear',
	},
	{
		name: 'first-aid kit',
		tags: new Set<Tag>([
			'active-sport',
			'snowboarding',
			'climbing',
			'hiking',
		]),
		category: 'gear',
		comments: ['at least adhesive plaster'],
	},
	{
		name: 'buff / loop',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'carabiner',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'paracord',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'ligher',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'hidration system',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'headlamp',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'trekking poles',
		tags: new Set<Tag>([
			'hiking',
		]),
		category: 'gear',
	},
	{
		name: 'trekking shoes',
		tags: new Set<Tag>([
			'hiking',
			'climbing',
			'camping',
		]),
		category: 'gear',
	},
	{
		name: 'hammock',
		tags: new Set<Tag>([
			'camping',
		]),
		category: 'gear',
	},
	{
		name: 'tent',
		tags: new Set<Tag>([
			'camping',
		]),
		category: 'gear',
	},
	{
		name: 'inflating mattress',
		tags: new Set<Tag>([
			'camping',
		]),
		category: 'gear',
	},
	{
		name: 'sleeping bag',
		tags: new Set<Tag>([
			'camping',
		]),
		category: 'gear',
		comments: ['Thickness according to temperature.']
	},
	{
		name: 'sleeping bag liner',
		tags: new Set<Tag>([
			'camping',
		]),
		category: 'gear',
	},
	{
		name: 'gas stove / primus',
		tags: new Set<Tag>([
			'camping',
		]),
		category: 'gear',
	},
	{
		name: 'spork',
		tags: new Set<Tag>([
			'camping',
		]),
		category: 'gear',
	},
	{
		name: 'mosquito spray',
		tags: new Set<Tag>([
			'camping',
			'water',
		]),
		exclusionTags: new Set<Tag>([
			'winter',
		]),
		category: 'gear',
	},
	{
		name: 'pen + paper',
		tags: new Set<Tag>([
			'camping',
			'leisure',
			'plane',
			'abroad',
			'work',
		]),
		category: 'gear',
	},
	{
		name: 'ice axe',
		tags: new Set<Tag>([
			'winter',
			'glacier-travel',
		]),
		category: 'gear',
	},
	{
		name: 'ice cleats',
		tags: new Set<Tag>([
			'winter',
			'glacier-travel',
		]),
		category: 'gear',
	},
	{
		name: 'ice screws',
		tags: new Set<Tag>([
			'glacier-travel',
		]),
		category: 'gear',
	},
	{
		name: 'hiking boots',
		tags: new Set<Tag>([
			'hiking',
			'via-ferrata',
		]),
		category: 'gear',
	},
	{
		name: 'gaiter',
		tags: new Set<Tag>([
			'winter',
			'snow',
			'hiking',
		]),
		category: 'gear',
	},
	{
		name: 'climbing shoes',
		tags: new Set<Tag>([
			'climbing',
			'via-ferrata',
		]),
		category: 'gear',
	},
	{
		name: 'harness',
		tags: new Set<Tag>([
			'climbing',
			'via-ferrata',
			'glacier-travel',
		]),
		category: 'gear',
	},
	{
		name: 'climbing rope',
		tags: new Set<Tag>([
			'climbing',
			'glacier-travel',
			'via-ferrata',
		]),
		category: 'gear',
		comments: ['Appropriate diameter, stretch, etc...'],
	},
	{
		name: 'belaying device',
		tags: new Set<Tag>([
			'climbing',
		]),
		category: 'gear',
		comments: ['grigri', 'reverso'],
	},
	{
		name: 'rappel/abseil device',
		tags: new Set<Tag>([
			'climbing',
		]),
		category: 'gear',
	},
	{
		name: 'helmet',
		tags: new Set<Tag>([
			'climbing',
			'via-ferrata',
			'glacier-travel',
			'snowboarding',
			'mountain-biking',
		]),
		category: 'gear',
	},
	{
		name: 'via-ferrata kit',
		tags: new Set<Tag>([
			'via-ferrata',
		]),
		category: 'gear',
	},
	{
		name: 'via-ferrata gloves',
		tags: new Set<Tag>([
			'via-ferrata',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard + bindings',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard boots',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard helmet',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard goggles',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard goggle lenses',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard mask',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
		comments: ['Magnetic goggle mask.'],
	},
	{
		name: 'balaclava',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard jacket',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard gloves',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'crash pants',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'knee protection pads',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard pants',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	{
		name: 'snowboard travel bag',
		tags: new Set<Tag>([
			'snowboarding',
		]),
		category: 'gear',
	},
	// #endregion
	// #region TOILETRIES
	{
		name: 'toothbrush',
		tags: new Set<Tag>([
			'all',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'toothpaste',
		tags: new Set<Tag>([
			'all',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'dental floss',
		tags: new Set<Tag>([
			'all',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'shower gel',
		tags: new Set<Tag>([
			'all',
			'camping',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'nail clippers',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'toiletries',
	},
	{
		name: 'towel',
		tags: new Set<Tag>([
			'all',
			'water',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'bath slippers',
		tags: new Set<Tag>([
			'all',
			'camping',
			'abroad',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'toilet paper',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'toiletries',
	},
	// #endregion
	// #region PERSONAL
	{
		name: 'underwear',
		tags: new Set<Tag>([
			'all',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'personal',
	},
	{
		name: 'socks',
		tags: new Set<Tag>([
			'all'
		]),
		category: 'personal',
	},
	// #endregion
	// #region PERSONAL-CARE
	{
		name: 'sunscreen',
		tags: new Set<Tag>([
			'summer',
			'winter',
			'glacier-travel',
			'climbing',
			'snowboarding',
		]),
		category: 'personal-care',
	},
	{
		name: 'after sun / hydrating lotion',
		tags: new Set<Tag>([
			'sun',
			'summer',
			'winter',
			'snowboarding',
			'climbing',
			'glacier-travel',
			'via-ferrata',
		]),
		exclusionTags: new Set<Tag>([
			'one-day'
		]),
		category: 'personal-care',
	},
	{
		name: 'lip balm',
		tags: new Set<Tag>([
			'all',
			'sun',
			'winter',
		]),
		category: 'personal-care',
	},
	{
		name: 'medicine',
		tags: new Set<Tag>([
			'all',
			'abroad',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'personal-care',
	},
	// #endregion
	// #region CLOTHES
	{
		name: 'gloves',
		tags: new Set<Tag>([
			'autumn',
			'winter',
			'snowboarding',
			'hiking',
		]),
		category: 'clothes',
	},
	{
		name: 'sun cap',
		tags: new Set<Tag>([
			'summer',
		]),
		category: 'clothes',
	},
	{
		name: 'warm hat',
		tags: new Set<Tag>([
			'autumn',
			'winter',
		]),
		category: 'clothes',
	},
	{
		name: 'sandals',
		tags: new Set<Tag>([
			'camping',
			'hiking',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'clothes',
	},
	{
		name: 'water resistant shoes',
		tags: new Set<Tag>([
			'sightseeing',
		]),
		category: 'clothes',
	},
	// #endregion
	// #region ACCESSORIES
	{
		name: 'sunglasses',
		tags: new Set<Tag>([
			'driving',
			'sun',
		]),
		category: 'accessories',
	},
	// #endregion
	// #region ENTERTAINMENT
	{
		name: 'playing cards',
		tags: new Set<Tag>([
			'leisure',
		]),
		category: 'entertainment',
	},
	{
		name: 'board games',
		tags: new Set<Tag>([
			'leisure',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'entertainment',
	},
	// #endregion
	// #region FITNESS
	{
		name: 'hand grippers',
		tags: new Set<Tag>([
			'all',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'fitness',
	},
	{
		name: 'hand egg',
		tags: new Set<Tag>([
			'all',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'fitness',
	},
	{
		name: 'elastic bands',
		tags: new Set<Tag>([
			'all',
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'fitness',
		comments: ['for legs, shoulders'],
	},
	// #endregion
	// #region FOOD
	{
		name: 'protein bar',
		tags: new Set<Tag>([
			'all',
			'camping',
			'climbing',
			'snowboarding',
		]),
		category: 'food',
	},
	// #endregion
];
