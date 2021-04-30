/* 
    Đầu vào:
  - arr: mảng cần sắp xếp.
  - n: số lượng phần tử của mảng.
  - i: chỉ số index vòng lặp ngoài (0 -> n-1).
  - j: chỉ số vòng lặp trong (0 -> n - 1 - i)
  
    Ý tưởng: 
  - Sử dụng 2 vòng lặp lồng nhau.
  - Vòng lặp bên ngoài để duyệt qua mảng.
  - Vòng lặp bên trong để đẩy phần tử max (min) lên đầu mảng (bubble).
    + Nếu phần tử sau > phần tử trước thì swap 2 phần tử đó (sắp tăng dần) và ngược lại.
  - Để tối ưu thì ta chỉ nên cho vòng lặp trong chạy đến (n - 1 - i) mà không cần đến (n - 1).

*/

/* 
	Độ phức tạp (BigO):
	- Best Case (Mảng đã sắp xếp): O(n).
	- Average: O (n^2)
	- Worst Case (Mảng sắp xếp ngươc): O(n^2).
	- Không gian biến phụ: O(1).
	Note:
	 - Không nên dùng cho mảng kích thước lớn.
	 - Chỉ nên sử dụng khi mảng đã sắp xếp như bảng Highscore...
*/

function basicBubbleSort(arr = []) {
	const n = arr.length;

	// outer loop
	for (let i = 0; i < n - 1; ++i) {
		// inner loop
		for (let j = 0; j < n - 1; ++j) {
			if (arr[j] > arr[j + 1]) {
				// swap (*)
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}

	return arr;
}

function enhancedBubbleSort(arr = []) {
	const n = arr.length;

	// outer loop
	for (let i = 0; i < n - 1; ++i) {
		let swapped = false;

		// inner loop
		for (let j = 0; j < n - 1 - i; ++j) {
			if (arr[j] > arr[j + 1]) {
				// swap (*)
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = true;
			}
		}

		// Nếu inner loop không có cặp nào swap thì ngưng (đã xếp xong)
		if (!swapped) break;
	}

	return arr;
}

module.exports = {
	enhancedBubbleSort,
	basicBubbleSort,
};
