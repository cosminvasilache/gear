import { Tag } from './tags';
import { Category } from './categories';

export type Item = {
	name: string,
	tags: Set<Tag>,
	exclusionTags?: Set<Tag>,
	category: Category,
	comments?: String[],
	// ammount: number,
	// unitOfMeasurement: string,
	// gramsPerUnitOfMeasurement: number
};

export const items: Item[] = [
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
];
