async function basicBubbleSort(arr = []) {
	let n = arr.length;
	for (let i = 0; i < n - 1; ++i) {
		for (let j = 0; j < n - 1; ++j) {
			if (!isSorting) return;
			await preSwap(j, j + 1);
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				await swapEle(j, j + 1);
			}
			await endSwap(j, j + 1);
		}
	}
}

async function enhancedBubbleSort(arr = []) {
	let n = arr.length;
	for (let i = 0; i < n - 1; ++i) {
		let isSwap = false;
		for (let j = 0; j < n - 1 - i; ++j) {
			if (!isSorting) return;
			await preSwap(j, j + 1);
			if (arr[j] > arr[j + 1]) {
				isSwap = true;
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				await swapEle(j, j + 1);
			}
			await endSwap(j, j + 1);
		}
		await changeItemColor(n - 1 - i, DONE_ITEM_COLOR);
		if (!isSwap) return;
	}
}
