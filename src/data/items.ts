import { Tag } from './tags';
import { Category } from './categories';

export type Item = {
	name: string,
	tags: Set<Tag>,
	exclusionTags?: Set<Tag>,
	category: Category,
	comments?: String[],
	important?: boolean,
	// ammount: number,
	// unitOfMeasurement: string,
	// gramsPerUnitOfMeasurement: number
};

export const items: Item[] = [
	// ID-PAPERWORK ===================================================
	{
		name: 'id',
		tags: new Set([
			'all'
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'drivers licence',
		tags: new Set([
			'all'
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'passport',
		tags: new Set([
			'all',
			'abroad',
		]),
		exclusionTags: new Set([
			'domestic',
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'visa',
		tags: new Set([
			'all',
			'abroad',
		]),
		exclusionTags: new Set([
			'domestic',
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'travel insurance',
		tags: new Set([
			'abroad',
		]),
		exclusionTags: new Set([
			'domestic',
		]),
		category: 'id-paperwork',
		important: true,
	},
	{
		name: 'car paperwork',
		tags: new Set([
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
		tags: new Set([
			'all'
		]),
		category: 'tech',
	},
	{
		name: 'phone charger + cable',
		tags: new Set([
			'all',
		]),
		exclusionTags: new Set([
			'one-day'
		]),
		category: 'tech',
	},
	{
		name: 'power bank + cable',
		tags: new Set([
			'all',
		]),
		category: 'tech',
	},
	{
		name: 'wireless earbuds',
		tags: new Set([
			'all'
		]),
		category: 'tech',
	},
	{
		name: 'watch',
		tags: new Set([
			'all'
		]),
		category: 'tech',
	},
	{
		name: 'camera',
		tags: new Set([
			'all',
		]),
		category: 'tech',
	},
	{
		name: 'monitor',
		tags: new Set([
			'work',
		]),
		category: 'tech',
	},
	// DATA ===========================================================
	{
		name: 'download music',
		tags: new Set([
			'all',
		]),
		category: 'data-information',
	},
	{
		name: 'download audiobooks',
		tags: new Set([
			'all',
		]),
		category: 'data-information',
	},
	// GEAR ===========================================================
	{
		name: 'backpack',
		tags: new Set([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'backpack raincover',
		tags: new Set([
			'rainy',
		]),
		category: 'gear',
	},
	{
		name: 'multitool',
		tags: new Set([
			'all',
		]),
		exclusionTags: new Set([
			'plane',
		]),
		category: 'gear',
	},
	{
		name: 'first-aid kit',
		tags: new Set([
			'sport',
			'snowboarding',
			'climbing',
			'hiking',
		]),
		category: 'gear',
		comments: ['at least adhesive plaster'],
	},
	{
		name: 'buff / loop',
		tags: new Set([
			'all',
		]),
		category: 'gear',
	},
	{

		name: 'carabiner',
		tags: new Set([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'paracord',
		tags: new Set([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'ligher',
		tags: new Set([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'hidration system',
		tags: new Set([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'headlamp',
		tags: new Set([
			'all',
		]),
		category: 'gear',
	},
	{
		name: 'trekking poles',
		tags: new Set([
			'hiking',
		]),
		category: 'gear',
	},
	{
		name: 'ice axe',
		tags: new Set([
			'winter',
			'glacier-travel',
		]),
		category: 'gear',
	},
	{
		name: 'hiking boots',
		tags: new Set([
			'hiking',
			'via-ferrata',
		]),
		category: 'gear',
	},
	{
		name: 'climbing shoes',
		tags: new Set([
			'climbing',
			'via-ferrata',
		]),
		category: 'gear',
	},
	{
		name: 'harness',
		tags: new Set([
			'climbing',
			'via-ferrata',
			'glacier-travel',
		]),
		category: 'gear',
	},
	{
		name: 'climbing rope',
		tags: new Set([
			'climbing',
			'glacier-travel',
			'via-ferrata',
		]),
		category: 'gear',
		comments: ['Appropriate diameter, stretch, etc...'],
	},
	{
		name: 'belaying device',
		tags: new Set([]),
		category: 'gear',
		comments: ['grigri', 'reverso'],
	},
	// TOILETRIES =====================================================
	{
		name: 'toothbrush',
		tags: new Set([
			'all',
		]),
		exclusionTags: new Set([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'toothpaste',
		tags: new Set([
			'all',
		]),
		exclusionTags: new Set([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'dental floss',
		tags: new Set([
			'all',
		]),
		exclusionTags: new Set([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'shower gel',
		tags: new Set([
			'all',
		]),
		exclusionTags: new Set([
			'one-day',
		]),
		category: 'toiletries',
	},
	{
		name: 'nail clippers',
		tags: new Set([
			'all',
		]),
		category: 'toiletries',
	},
	{
		name: 'towel',
		tags: new Set([
			'all'
		]),
		category: 'toiletries',
	},
	{
		name: 'bath slippers',
		tags: new Set([
			'all'
		]),
		exclusionTags: new Set([
			'one-day',
		]),
		category: 'toiletries',
	},
	// PERSONAL =======================================================
	{
		name: 'underwear',
		tags: new Set([
			'all',
		]),
		exclusionTags: new Set([
			'one-day',
		]),
		category: 'personal',
	},
	{
		name: 'socks',
		tags: new Set([
			'all'
		]),
		category: 'personal',
	},
	// PERSONAL-CARE ==================================================
	{
		name: 'sunscreen',
		tags: new Set([
			'summer',
			'winter',
			'glacier-travel',
		]),
		category: 'personal-care',
	},
	{
		name: 'after sun / hydrating lotion',
		tags: new Set([
			'sunny',
			'summer',
			'winter',
			'snowboarding',
			'climbing',
			'glacier-travel',
			'via-ferrata',
		]),
		exclusionTags: new Set([
			'one-day'
		]),
		category: 'personal-care',
	},
	// CLOTHES ========================================================
	{
		name: 'gloves',
		tags: new Set([
			'autumn',
			'winter',
			'snowboarding',
			'hiking',
		]),
		category: 'clothes',
	},
	{
		name: 'sun cap',
		tags: new Set([
			'summer',
		]),
		category: 'clothes',
	},
	{
		name: 'warm hat',
		tags: new Set([
			'autumn',
			'winter',
		]),
		category: 'clothes',
	},
	// ACCESSORIES ====================================================
	{
		name: 'sunglasses',
		tags: new Set([
			'driving',
			'sunny',
		]),
		category: 'accessories',
	},
];
