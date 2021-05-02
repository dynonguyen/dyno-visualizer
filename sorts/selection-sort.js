/* 
    Đầu vào:
  - arr: mảng cần sắp xếp.
  - n: số lượng phần tử của mảng.
  - i: chỉ số index vòng lặp ngoài (0 -> n-1).
  - j: chỉ số vòng lặp trong (i+1 -> n)
  
    Ý tưởng: 
  - Sử dụng 2 vòng lặp lồng nhau để chia mảng thành 2 mảng con (1 đã sắp xếp, 1 không).
  - Vòng lặp bên ngoài để duyệt qua mảng.
  - Vòng lặp bên trong duyệt qua mảng con chưa sắp xếp để tìm phần tử min (max).
		+ Nếu min (max) trong mảng con đó nhỏ (lớn) hơn phần tử cuối mảng đã sắp xếp thì swap 2 phần từ đó.

*/

/* 
	Độ phức tạp (BigO):
	- Best Case (Mảng đã sắp xếp): O(n^2).
	- Average: O (n^2)
	- Worst Case (Mảng sắp xếp ngươc): O(n^2).
	- Không gian biến phụ: O(1).
	Note:
	 - Không nên dùng cho mảng kích thước lớn.
*/

function selectionSort(arr = []) {
	let n = arr.length;
	for (let i = 0; i < n - 1; ++i) {
		let min = arr[i];
		let index = i;

		// find min
		for (let j = i + 1; j < n; ++j) {
			if (arr[j] < min) {
				min = arr[j];
				index = j;
			}
		}

		// swap if min != initial min
		if (index !== i) [arr[i], arr[index]] = [arr[index], arr[i]];
	}
}

module.exports = {
	selectionSort,
};
