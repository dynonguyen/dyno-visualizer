const PARENT_NODE_COLOR = '#F24A0E';

let nHSCompare = 0,
	nHSArrAccess = 0,
	nHSSwap = 0;

// @fn: Xây dựng max heap từ 1 node
async function maxHeapify(arr = [], len, nodeIndex) {
	// Nếu là node lá thì dừng
	nHSCompare++;
	if (nodeIndex > Math.floor(len / 2 - 1))
		return { nSwap: nHSSwap, nCompare: nHSCompare, nArrAccess: nHSArrAccess };

	const leftNode = 2 * nodeIndex + 1,
		rightNode = 2 * nodeIndex + 2;
	let maxIndex = nodeIndex;

	// Tìm node lớn nhất trong 3 node
	if (leftNode < len && arr[leftNode] > arr[maxIndex]) {
		nHSArrAccess += 2;
		nHSCompare++;
		maxIndex = leftNode;
	}
	if (rightNode < len && arr[rightNode] > arr[maxIndex]) {
		nHSArrAccess += 2;
		nHSCompare++;
		maxIndex = rightNode;
	}

	// Hoán vị node cha hiện tại với con lớn nhất
	nHSCompare += 3;
	if (maxIndex !== nodeIndex) {
		await preSwap(nodeIndex, maxIndex);
		await swapEle(nodeIndex, maxIndex);
		[arr[maxIndex], arr[nodeIndex]] = [arr[nodeIndex], arr[maxIndex]];
		nHSSwap++;
		await endSwap(nodeIndex, maxIndex);

		// Tiếp tục đệ quy kiểm tra tại node lớn nhất này
		await maxHeapify(arr, len, maxIndex);
	}
}

// @fn: Xây dụng max-heap
async function buildMaxHeap(arr = []) {
	const len = arr.length;
	// Parent node cuối cùng
	const lastParentNode = Math.floor(len / 2 - 1);

	// Từ node cha cuối trở lên đều là parent node
	for (let i = lastParentNode; i >= 0; --i) {
		if (!isSorting)
			return { nSwap: nHSSwap, nCompare: nHSCompare, nArrAccess: nHSArrAccess };
		nHSCompare++;
		await changeItemColor(i, PARENT_NODE_COLOR);
		await maxHeapify(arr, len, i);
		await changeItemColor(i, ITEM_COLOR);
	}
}

// @fn: Heap sort
async function heapSort(arr = []) {
	// Xây dựng max heap
	await buildMaxHeap(arr);

	const len = arr.length;
	for (let i = len - 1; i >= 0; --i) {
		if (!isSorting)
			return { nSwap: nHSSwap, nCompare: nHSCompare, nArrAccess: nHSArrAccess };

		nHSCompare++;
		nHSSwap++;
		nHSArrAccess += 2;
		// Hoán vị node root với node cuối cùng
		await preSwap(0, i);
		[arr[0], arr[i]] = [arr[i], arr[0]];
		await swapEle(0, i);
		await endSwap(0, i);

		await changeItemColor(i, DONE_ITEM_COLOR);
		// Xây lại max heap tại vị trí root
		await maxHeapify(arr, i, 0);
	}

	return { nSwap: nHSSwap, nCompare: nHSCompare, nArrAccess: nHSArrAccess };
}
