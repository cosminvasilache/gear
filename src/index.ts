import { Tag } from './data/tags';
import { Item, items } from './data/items';

const filterByActiveTags = (activeTags: Set<Tag>) => (item: Item) => {
	if (item.exclusionTags) {
		for (const exclusionTag of item.exclusionTags) {
			if (activeTags.has(exclusionTag)) {
				return false;
			}
		}
	}
	if (item.tags.has('all')) {
		return true;
	}

	for (const activeTag of activeTags) {
		if (item.tags.has(activeTag)) {
			return true;
		}
	}

	return false;
};

const activeTagsArr: Tag[] = [
	'climbing',
	'one-day',
];
const activeTags: Set<Tag> = new Set(activeTagsArr);
const activeItems = items
	.filter(filterByActiveTags(activeTags))
	.sort((a, b) => {
		if (a < b) { return -1; }
		if (a === b) { return 0; }
		return 1;
	})
	.map(item => item.name);

console.log({
	activeItems,
});
