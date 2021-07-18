function basicBubbleSort(arr = []) {
	let n = arr.length,
		nSwap = 0,
		nCompare = 0,
		nArrAccess = 0;

	for (let i = 0; i < n - 1; ++i) {
		for (let j = 0; j < n - 1; ++j) {
			++nCompare;
			nArrAccess += 2;
			if (!isSorting) return;

			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				nArrAccess += 2;
				++nSwap;
			}
		}
	}

	return { nCompare, nArrAccess, nSwap };
}

function enhancedBubbleSort(arr = []) {
	let n = arr.length,
		nSwap = 0,
		nCompare = 0,
		nArrAccess = 0;

	for (let i = 0; i < n - 1; ++i) {
		let isSwap = false;

		for (let j = 0; j < n - 1 - i; ++j) {
			++nCompare;
			nArrAccess += 2;
			if (!isSorting) return { nCompare, nArrAccess, nSwap };

			if (arr[j] > arr[j + 1]) {
				nArrAccess += 2;
				isSwap = true;
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				++nSwap;
			}
		}

		if (!isSwap) {
			return { nCompare, nArrAccess, nSwap };
		}
	}

	return { nCompare, nArrAccess, nSwap };
}
