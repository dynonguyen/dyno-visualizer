const INSERTED_ITEM = SECOND_ITEM_COLOR;

async function insertionSort(arr = []) {
	let n = arr.length;
	let type = 0;
	if (n <= 20) type = 1;

	let i = 1,
		j;

	while (i < n) {
		if (!isSorting) return;
		await changeItemColor(i, CURRENT_ITEM_COLOR);
		if (arr[i] >= arr[i - 1]) ++i;
		else {
			const current = arr[i];
			j = i - 1;
			// insert item into suitable position
			while (j >= 0 && arr[j] > current) {
				await changeItemColor(j + 1, '#fff');
				await swapEle(j, j + 1);
				if (j + 1 === i) await changeItemColor(j + 1, CURRENT_ITEM_COLOR);
				arr[j + 1] = arr[j];
				--j;
			}

			arr[j + 1] = current;
			await changeValue(j + 1, current, type);
			await changeItemColor(j + 1, ITEM_COLOR);
			++i;
		}
		await changeItemColor(i - 1, ITEM_COLOR);
	}
}
