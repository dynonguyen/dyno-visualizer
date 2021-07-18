/* 
    Đầu vào:
  - arr: mảng cần sắp xếp.
  - n: số lượng phần tử của mảng.
  - i: chỉ số index vòng lặp ngoài (1 -> n).
  - j: chỉ số vòng lặp trong (i - 1 -> 0)
  
    Ý tưởng: 
  - Sử dụng 2 vòng lặp lồng nhau.
  - Vòng lặp bên ngoài để duyệt qua mảng.
  - Vòng lặp bên trong để chọn vị trí chèn thích hợp cho phần tử i (insertion).
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

function insertionSort(arr = []) {
	let n = arr.length;

	let i = 1,
		j;

	while (i < n) {
		if (arr[i] >= arr[i - 1]) ++i;
		else {
			const current = arr[i];
			j = i - 1;

			// insert item into suitable position
			while (j >= 0 && arr[j] > current) {
				arr[j + 1] = arr[j];
				--j;
			}

			arr[j + 1] = current;
			++i;
		}
	}

	return arr;
}

module.exports = insertionSort;
