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
	// ID-PAPERWORK ===================================================
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
			'all',
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
			'all',
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
	// TECH ===========================================================
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
	// DATA ===========================================================
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
	// GEAR ===========================================================
	{
		name: 'backpack',
		tags: new Set<Tag>([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'backpack raincover',
		tags: new Set<Tag>([
			'rain',
		]),
		category: 'gear',
	},
	{
		name: 'multitool',
		tags: new Set<Tag>([
			'all',
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
		name: 'ice axe',
		tags: new Set<Tag>([
			'winter',
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
	// TOILETRIES =====================================================
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
			'all'
		]),
		category: 'toiletries',
	},
	{
		name: 'bath slippers',
		tags: new Set<Tag>([
			'all'
		]),
		exclusionTags: new Set<Tag>([
			'one-day',
		]),
		category: 'toiletries',
	},
	// PERSONAL =======================================================
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
	// PERSONAL-CARE ==================================================
	{
		name: 'sunscreen',
		tags: new Set<Tag>([
			'summer',
			'winter',
			'glacier-travel',
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
	// CLOTHES ========================================================
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
	// ACCESSORIES ====================================================
	{
		name: 'sunglasses',
		tags: new Set<Tag>([
			'driving',
			'sun',
		]),
		category: 'accessories',
	},
];
