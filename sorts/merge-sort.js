/* 
    Đầu vào:
  - arr: mảng cần sắp xếp.
  - l: index phần tử bắt đầu duyệt.
  - r: index phần tử cuối cần duyệt.
  
    Ý tưởng:
	- Tách mảng ban đầu thành 2 mảng dựa trên phần tử middle: (n - 1)/2.
  - Cứ thế đệ quy, tách đến khi các mảng còn 1 phần tử.
  - Gộp các mảng trên lại, vừa gộp vừa sắp xếp.
*/

/* 
	Độ phức tạp (BigO):
	- Best Case: O( n*log(n) ).
	- Average:  O( n*log(n) )
	- Worst Case: O( n*log(n) ).
	- Không gian biến phụ: O(n).
	Note:
	 - Nên dùng cho mảng kích thước lớn.
	 - Thuật toán khá ổn định trong mọi trường hợp.
   - Nhược: sử dụng không gian phụ khá nhiều.
*/

// @fn: Hàm gộp 2 mảng lại với nhau
function mergeArr(arr, l, middle, r) {
	// tạo 2 mảng trái, phải đã sắp xếp
	let leftArr = [...arr.slice(l, middle + 1)],
		rightArr = [...arr.slice(middle + 1, r + 1)];

	let mergeIndex = l,
		i = 0,
		j = 0,
		n1 = middle + 1 - l, // số phần tử mảng trái
		n2 = r - middle; // số phấn tử mảng phải

	// gộp 2 mảng lại
	while (i < n1 && j < n2)
		arr[mergeIndex++] = leftArr[i] < rightArr[j] ? leftArr[i++] : rightArr[j++];

	// gán hết phần tử mảng trái nếu còn
	while (i < n1) arr[mergeIndex++] = leftArr[i++];

	// gán hết phần tử mảng phải nếu còn
	while (j < n2) arr[mergeIndex++] = rightArr[j++];
}

// @fn: merge sort
function mergeSort(arr = [], l, r) {
	// điều kiện dừng đệ quy
	if (l >= r) return;

	// tìm phần tử trung gian để tách mảng
	let middle = parseInt((l + r) / 2);

	mergeSort(arr, l, middle); // tách nửa mảng trái
	mergeSort(arr, middle + 1, r); // tách nửa mảng phải
	mergeArr(arr, l, middle, r); // gộp 2 mảng trái phải
}

module.exports = mergeSort;
