const MIN_ITEM_COLOR = SECOND_ITEM_COLOR;
const SORTED_ITEM_COLOR = DONE_ITEM_COLOR;

async function selectionSort(arr = []) {
	let n = arr.length;

	for (let i = 0; i < n - 1; ++i) {
		let min = arr[i];
		let index = i;
		await changeItemColor(i, MIN_ITEM_COLOR);

		// find min
		for (let j = i + 1; j < n; ++j) {
			if (!isSorting) return;

			await changeItemColor(j, CURRENT_ITEM_COLOR);
			if (arr[j] < min) {
				await changeItemColor(j, MIN_ITEM_COLOR);
				await changeItemColor(index, ITEM_COLOR);
				min = arr[j];
				index = j;
			} else {
				await changeItemColor(j, ITEM_COLOR);
			}
		}

		// swap if min != initial min
		if (index !== i) {
			[arr[i], arr[index]] = [arr[index], arr[i]];
			await swapEle(i, index);
		}

		await changeItemColor(i, SORTED_ITEM_COLOR);
	}
}
