const PIVOT_COLOR = DONE_ITEM_COLOR;
let nQSCompare = 0,
	nQSArrAccess = 0,
	nQSSwap = 0;

async function partitionFunc(arr = [], low, high) {
	await changeItemColor(high, PIVOT_COLOR);
	let pivot = arr[high];
	let l = low;
	let r = high - 1;

	while (true) {
		while (l <= r && arr[l] < pivot) {
			l++;
			++nQSArrAccess;
			nQSCompare += 2;
		}
		while (r >= l && arr[r] > pivot) {
			r--;
			++nQSArrAccess;
			nQSCompare += 2;
		}
		if (l >= r) break;
		await preSwap(l, r);
		[arr[l], arr[r]] = [arr[r], arr[l]];
		++nQSCompare;
		nQSArrAccess += 2;
		nQSSwap++;
		await swapEle(l, r);
		await endSwap(l, r);
		l++;
		r--;
	}

	await preSwap(l, high);
	[arr[l], arr[high]] = [arr[high], arr[l]];
	await swapEle(l, high);
	await endSwap(l, high);

	await changeItemColor(l, PIVOT_COLOR);
	return l;
}

async function quickSort(arr, low, high) {
	if (low < high) {
		if (!isSorting) return { nQSSwap, nQSCompare, nQSArrAccess };
		const pivot = await partitionFunc(arr, low, high);
		await changeItemColor(pivot, ITEM_COLOR);
		await quickSort(arr, low, pivot - 1);
		await quickSort(arr, pivot + 1, high);
	}
	return { nSwap: nQSSwap, nCompare: nQSCompare, nArrAccess: nQSArrAccess };
}

// description
const qSPivotCode = Prism.highlight(
	`function partitionFunc(arr = [], low, high) {
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
}`,
	Prism.languages.javascript,
	'javascript',
);
const qSCode = Prism.highlight(
	`function quickSort(arr, low, high) {
	if (low < high) {
		// Tìm phần tử pivot
		const pivot = partitionFunc(arr, low, high);

		// Đệ quy nửa mảng bên trái
		quickSort(arr, low, pivot - 1);

		// Đệ quy nửa mảng bên phải
		quickSort(arr, pivot + 1, high);
	}
}`,
	Prism.languages.javascript,
	'javascript',
);
const quickSortDesc = {
	title: '⚡ QUICK SORT ALGORITHM 🐢',
	sortNotes: [
		{
			title: 'P.tử trái',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'P.tử phải',
			color: SECOND_ITEM_COLOR,
		},
		{
			title: 'Pivot',
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
		Worst case (mảng đã sắp xếp hay pivot phần tử lớn nhất (nhỏ nhất) của mảng): <b>O(n<sup>2</sup>)</b>
		<br />
	</div>

	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O( log(n) )</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>low</b>: index phần tử bắt đầu duyệt. <br />
		- <b>high</b>: index phần tử cuối cùng cần duyệt. <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
	- Lựa chọn một phần tử vách ngăn (pivot).<br/>
	- Xây dựng một hàm với nhiệm vụ chia mảng thành 2 mảng con sao cho: <br/>
	&nbsp;	+ Mảng bên trái bao gồm các phần tử nhỏ hơn pivot. <br/> 
	&nbsp;	+ Mảng bên phải bao gồm các phần tử lớn hơn pivot. <br/> 
	- Lặp lại 2 bước trên với nửa mảng bên trái và nửa mảng bên phải.<br/>
	- Kết thúc khi mảng chỉ còn 1 phần tử (không thể chia mảng ra nữa).<br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16">3.1 - Hàm tìm vách ngăn pivot (partition function):</h3>
	<pre class="language-js"><code>${qSPivotCode}</code></pre>
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Hàm quick sort:</h3>
	<pre class="language-js"><code>${qSCode}</code></pre>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Nên dùng cho mảng kích thước lớn. <br />
	- Không nên dùng khi mảng đã sắp xếp.. <br/>
	- <b>Nhược điểm:</b><br/>
	  &nbsp;	+ Thuật toán bị chậm khi chọn pivot không tốt (nhân phẩm kém 😂🙂). <br />
		&nbsp;	+ Tốt thêm bộ nhớ để lưu trữ đệ quy. <br/>
	- Ưu điểm:</br> Nếu pivot là phần tử gần trung bình cộng của các phần tử mảng thì thuật toán chạy rất nhanh. <br/>S
</div>`,
};
