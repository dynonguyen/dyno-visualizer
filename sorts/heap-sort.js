/* 
    Đầu vào:
  - arr: mảng cần sắp xếp.
  - n: số lượng phần tử của mảng.
  
    Ý tưởng: 
  - Sử dụng tính chất của cấu trúc dữ liệu heap (max heap, min heap).
  - Đầu tiên xây dựng một max-heap (min-heap).
  - Hoán vị phần tử root của heap với phần tử cuối.
  - Xoá phần tử cuối ra khỏi heap.
  - Xây dựng lại heap tại phần tử root. 
*/

/* 
	Độ phức tạp (BigO):
	- Best Case (Mảng đã sắp xếp): O(n*log(n)).
	- Average: O(n*log(n)).
	- Worst Case (Mảng sắp xếp ngươc): O(n*log(n)).
	- Không gian biến phụ: O(1).
	Note:
	 - Thuật toán khá ổn định trong mọi trường hớp.
*/

// @fn: Xây dựng max heap từ 1 node
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

// @fn: Xây dụng max-heap
function buildMaxHeap(arr = []) {
	const len = arr.length;
	// Parent node cuối cùng
	const lastParentNode = Math.floor(len / 2 - 1);

	// Từ node cha cuối trở lên đều là parent node
	for (let i = lastParentNode; i >= 0; --i) maxHeapify(arr, len, i);
}

// @fn: Heap sort
function heapSort(arr = []) {
	// Xây dựng max heap
	buildMaxHeap(arr);

	const len = arr.length;
	for (let i = len - 1; i >= 0; --i) {
		// Hoán vị node root với node cuối cùng
		[arr[0], arr[i]] = [arr[i], arr[0]];

		// Xây lại max heap tại vị trí root
		maxHeapify(arr, i, 0);
	}
}

module.exports = heapSort;
