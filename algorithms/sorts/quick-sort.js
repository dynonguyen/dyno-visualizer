/* 
    Đầu vào:
  - arr: mảng cần sắp xếp.
  - low: index phần tử bắt đầu duyệt.
  - high: index phần tử cuối cần duyệt.
  
    Ý tưởng:
	- Lựa chọn một phần tử vách ngăn (pivot).
	- Xây dựng một hàm với nhiệm vụ chia mảng thành 2 mảng con sao cho:
		+ Mảng bên trái bao gồm các phần tử nhỏ hơn pivot.
		+ Mảng bên phải bao gồm các phần tử lớn hơn pivot.
	- Lặp lại 2 bước trên với nửa mảng bên trái và nửa mảng bên phải.
	- Kết thúc khi mảng chỉ còn 1 phần tử (không thể chia mảng ra nữa).
*/

/* 
	Độ phức tạp (BigO):
	- Best Case: O( n*log(n) ).
	- Average:  O( n*log(n) )
	- Worst Case (mảng đã sắp xếp hay pivot phần tử lớn nhất (nhỏ nhất) của mảng): O(n^2).
	- Không gian biến phụ: O(log(n)).
	Note:
	 - Nên dùng cho mảng kích thước lớn.
	 - Không nên dùng khi mảng đã sắp xếp...
*/

function partitionFunc(arr = [], low, high) {
	let pivot = arr[high];
	let l = low;
	let r = high - 1;

	while (true) {
		// Tìm phần tử bên trái bị sai vị trí
		while (l <= r && arr[l] < pivot) l++;

		// Tìm phần tử bên phải bị sai vị trí
		while (r >= l && arr[r] > pivot) r--;

		// Nếu đã hoàn tất duyệt thì dừng
		if (l >= r) break;

		// Ngược lại thì swap 2 phần tử bị sai, sau đó tăng trái và phải lên 1
		[arr[l], arr[r]] = [arr[r], arr[l]];
		l++;
		r--;
	}

	// Đưa phần tử pivot vào đúng vị trí
	[arr[l], arr[high]] = [arr[high], arr[l]];

	// Trả về vị trí pivot hiện tại
	return l;
}

function quickSort(arr, low, high) {
	if (low < high) {
		// Tìm phần tử pivot
		const pivot = partitionFunc(arr, low, high);

		// Đệ quy nửa mảng bên trái
		quickSort(arr, low, pivot - 1);

		// Đệ quy nửa mảng bên phải
		quickSort(arr, pivot + 1, high);
	}
}

module.exports = quickSort;
