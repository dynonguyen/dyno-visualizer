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

// description
const maxHeapCode = Prism.highlight(
	`// Hàm xây dựng max heap từ 1 node
function maxHeapify(arr = [], len, nodeIndex) {
	// Nếu là node lá thì dừng
	if (nodeIndex > Math.floor(len / 2 - 1)) return;

	const leftNode = 2 * nodeIndex + 1,
		rightNode = 2 * nodeIndex + 2;
	let maxIndex = nodeIndex;

	// Tìm node lớn nhất trong 3 node
	if (leftNode < len && arr[leftNode] > arr[maxIndex]) maxIndex = leftNode;
	if (rightNode < len && arr[rightNode] > arr[maxIndex]) maxIndex = rightNode;

	// Hoán vị node cha hiện tại với con lớn nhất
	if (maxIndex !== nodeIndex) {
		[arr[maxIndex], arr[nodeIndex]] = [arr[nodeIndex], arr[maxIndex]];

		// Tiếp tục đệ quy kiểm tra tại node lớn nhất này
		maxHeapify(arr, len, maxIndex);
	}
}

// Hàm xây dụng max-heap
function buildMaxHeap(arr = []) {
	const len = arr.length;
	// Parent node cuối cùng
	const lastParentNode = Math.floor(len / 2 - 1);

	// Từ node cha cuối trở lên đều là parent node
	for (let i = lastParentNode; i >= 0; --i) maxHeapify(arr, len, i);
}
`,
	Prism.languages.javascript,
	'javascript',
);

const hSCode = Prism.highlight(
	`function heapSort(arr = []) {
	// Xây dựng max heap
	buildMaxHeap(arr);

	const len = arr.length;
	for (let i = len - 1; i >= 0; --i) {
		// Hoán vị node root với node cuối cùng
		[arr[0], arr[i]] = [arr[i], arr[0]];

		// Xây lại max heap tại vị trí root
		maxHeapify(arr, i, 0);
	}
}`,
	Prism.languages.javascript,
	'javascript',
);

const heapSortDesc = {
	title: 'HEAP SORT ALGORITHM',
	sortNotes: [
		{
			title: 'Node Cha',
			color: '#F24A0E',
		},
		{
			title: 'P.tử hoán vị',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'P.tử hoán vị',
			color: SECOND_ITEM_COLOR,
		},
		{
			title: 'P.tử đã sắp xếp',
			color: DONE_ITEM_COLOR,
		},
	],
	htmlContent: `<h2 class="sub-title">
	1) Độ phức tạp thuật toán (Algorithm Complexity BigO):
</h2>
<br />
<div class="sub-content">
	<u>- Độ phức tạp thời gian (Time Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">
		Best case: <b>O( n log(n) )</b>
		<br />
		Average case: <b>O( n log(n) )</b>
		<br />
		Worst case: <b>O( n log(n) )</b>
		<br />
	</div>

	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O(1)</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
	- Sử dụng tính chất của cấu trúc dữ liệu heap (max heap, min heap).<br/>
	- Đầu tiên xây dựng một max-heap (min-heap).<br/>
	- Hoán vị phần tử root của heap với phần tử cuối.<br/>
	- Xoá phần tử cuối ra khỏi heap.<br/>
	- Xây dựng lại heap tại phần tử root.<br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16">3.1 - Minh hoạ ý tưởng:</h3>
	<span>Mọi người xem chi tiết cấu trúc "Heap" là gì và cách xây dựng heap</span> <a href="/structures/heap" style="color:#6EC4E6">tại đây</a> nhé
	<img
		src="/assets/images/sort/max-heap.jpg"
		alt="Max heap illustration photo"
		width="100%"
		heigh="650px"
	/>
	<img
		src="/assets/images/sort/rebuild-max-heap.jpg"
		alt="Max heap illustration photo"
		width="100%"
		heigh="650px"
	/>
	<br/>
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Xây dựng max-heap:</h3>
	<pre class="language-js"><code>${maxHeapCode}</code></pre>
	<br/>
	<h3 class="m-l-16 m-t-16 m-b-8">3.3 - Hàm heap sort:</h3>
	<pre class="language-js"><code>${hSCode}</code></pre>

</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Nên dùng cho mảng kích thước lớn. <br />
	- Thuật toán khá ổn định trong mọi trường hợp.<br/>
</div>`,
};
