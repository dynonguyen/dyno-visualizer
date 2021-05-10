const PIVOT_COLOR = DONE_ITEM_COLOR;
let nQSCompare = 0,
	nQSArrAccess = 0,
	nQSSwap = 0;

async function partitionFunc(arr = [], low, high) {
	await changeItemColor(high, PIVOT_COLOR);
	let pivot = arr[high];
	let l = low;
	let r = high - 1;

	while (true) {
		while (l <= r && arr[l] < pivot) {
			l++;
			++nQSArrAccess;
			nQSCompare += 2;
		}
		while (r >= l && arr[r] > pivot) {
			r--;
			++nQSArrAccess;
			nQSCompare += 2;
		}
		if (l >= r) break;
		await preSwap(l, r);
		[arr[l], arr[r]] = [arr[r], arr[l]];
		++nQSCompare;
		nQSArrAccess += 2;
		nQSSwap++;
		await swapEle(l, r);
		await endSwap(l, r);
		l++;
		r--;
	}

	await preSwap(l, high);
	[arr[l], arr[high]] = [arr[high], arr[l]];
	await swapEle(l, high);
	await endSwap(l, high);

	await changeItemColor(l, PIVOT_COLOR);
	return l;
}

async function quickSort(arr, low, high) {
	if (low < high) {
		if (!isSorting) return { nQSSwap, nQSCompare, nQSArrAccess };
		const pivot = await partitionFunc(arr, low, high);
		await changeItemColor(pivot, ITEM_COLOR);
		await quickSort(arr, low, pivot - 1);
		await quickSort(arr, pivot + 1, high);
	}
	return { nSwap: nQSSwap, nCompare: nQSCompare, nArrAccess: nQSArrAccess };
}
