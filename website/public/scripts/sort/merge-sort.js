const MIDDLE_ITEM_COLOR = CURRENT_ITEM_COLOR,
	MERGE_INDEX_COLOR = SECOND_ITEM_COLOR;

let nMSCompare = 0,
	nMSArrAccess = 0,
	nMSSwap = 0;

// @fn: Hàm gộp 2 mảng lại với nhau
async function mergeArr(arr, l, middle, r) {
	let flag = arr.length <= 20;
	if (!isSorting)
		return { nSwap: nMSSwap, nCompare: nMSCompare, nArrAccess: nMSArrAccess };

	// tạo 2 mảng trái, phải đã sắp xếp
	let leftArr = [...arr.slice(l, middle + 1)],
		rightArr = [...arr.slice(middle + 1, r + 1)];

	let mergeIndex = l,
		i = 0,
		j = 0,
		n1 = middle + 1 - l, // số phần tử mảng trái
		n2 = r - middle; // số phấn tử mảng phải

	nMSArrAccess += n1 + n2;

	// gộp 2 mảng lại
	while (i < n1 && j < n2) {
		let newVal = leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++];
		nMSCompare += 3;
		await changeItemColor(mergeIndex, MERGE_INDEX_COLOR);
		await changeValue(mergeIndex, newVal, flag);
		await changeItemColor(mergeIndex, ITEM_COLOR);
		arr[mergeIndex++] = newVal;
		nMSArrAccess += 4;
	}
	nMSCompare += 2;

	// gán hết phần tử mảng trái nếu còn
	while (i < n1) {
		let t = leftArr[i++];
		await changeItemColor(mergeIndex, MERGE_INDEX_COLOR);
		await changeValue(mergeIndex, t, flag);
		await changeItemColor(mergeIndex, ITEM_COLOR);
		arr[mergeIndex++] = t;
		nMSArrAccess += 2;
	}
	nMSCompare++;

	// gán hết phần tử mảng phải nếu còn
	while (j < n2) {
		let t = rightArr[j++];
		await changeItemColor(mergeIndex, MERGE_INDEX_COLOR);
		await changeValue(mergeIndex, t, flag);
		await changeItemColor(mergeIndex, ITEM_COLOR);
		arr[mergeIndex++] = t;
		nMSArrAccess += 2;
	}
	nMSCompare++;
}

// @fn: merge sort
async function mergeSort(arr = [], l, r) {
	// điều kiện dừng đệ quy
	if (l < r) {
		nMSCompare++;

		if (!isSorting)
			return { nSwap: nMSSwap, nCompare: nMSCompare, nArrAccess: nMSArrAccess };

		// tìm phần tử trung gian để tách mảng
		let middle = parseInt((l + r) / 2);
		await changeItemColor(middle, MIDDLE_ITEM_COLOR);
		await changeItemColor(middle, ITEM_COLOR);

		await mergeSort(arr, l, middle); // tách nửa mảng trái
		await mergeSort(arr, middle + 1, r); // tách nửa mảng phải
		await mergeArr(arr, l, middle, r); // gộp 2 mảng trái phải

		return { nSwap: nMSSwap, nCompare: nMSCompare, nArrAccess: nMSArrAccess };
	}
}
