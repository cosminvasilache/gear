import { items, Item } from "./data/items";

const noItemDuplicates = (items: Item[]) => {
	const encounteredItems = new Set<string>();

	for (const item of items) {
		if (encounteredItems.has(item.name)) {
			console.error(`Duplicate item found: "${item.name}"!`);
			return false;
		}
		encounteredItems.add(item.name);
	}

	return true;
};

console.assert(noItemDuplicates(items), 'Duplicated items!');
