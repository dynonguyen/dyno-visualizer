let nStCompare = 0,
	nStArrAccess = 0,
	nStSwap = 0;

async function isSortedArr(arr = []) {
	let n = arr.length;

	for (let i = 0; i < n - 1; ++i) {
		if (!isSorting) return false;
		nStCompare += 2;
		nStArrAccess += 2;

		await changeItemColor(i, CURRENT_ITEM_COLOR);
		await changeItemColor(i, ITEM_COLOR);

		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}

	return true;
}

function shuffleArray(arr = []) {
	return arr.sort(() => {
		nStArrAccess += 2;
		nStSwap += 2;
		return Math.random() - 0.5;
	});
}

async function reRenderArr(arr) {
	let xml = '';

	arr.forEach((item, index) => {
		xml += `<li class="arr-item" style="height:${item}px"></li>`;
	});

	$('#graph').html(xml);
}

async function stupidSort(arr = []) {
	while (!(await isSortedArr(arr))) {
		nStCompare++;

		if (!isSorting)
			return { nSwap: nStSwap, nCompare: nStCompare, nArrAccess: nStArrAccess };

		shuffleArray(arr);
		await reRenderArr(arr);
	}

	return { nSwap: nStSwap, nCompare: nStCompare, nArrAccess: nStArrAccess };
}
