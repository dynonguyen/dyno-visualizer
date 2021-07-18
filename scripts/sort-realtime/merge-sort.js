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

// description
const mSCode = Prism.highlight(
	`// Hàm gộp 2 mảng lại với nhau
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

// Merge sort
function mergeSort(arr = [], l, r) {
	// điều kiện dừng đệ quy
	if (l >= r) return;

	// tìm phần tử trung gian để tách mảng
	let middle = parseInt((l + r) / 2);

	mergeSort(arr, l, middle); // tách nửa mảng trái
	mergeSort(arr, middle + 1, r); // tách nửa mảng phải
	mergeArr(arr, l, middle, r); // gộp 2 mảng trái phải
}`,
	Prism.languages.javascript,
	'javascript',
);
const mergeSortDesc = {
	title: 'MERGE SORT ALGORITHM',
	sortNotes: [
		{
			title: 'P.tử giữa',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'Vị trí gộp',
			color: SECOND_ITEM_COLOR,
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
	<div class="p-l-8 m-tb-8">Worst case: <b>O(n)</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>l</b>: index phần tử bắt đầu duyệt. <br />
		- <b>r</b>: index phần tử cuối cùng cần duyệt. <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
	- Tách mảng ban đầu thành 2 mảng dựa trên phần tử middle: (n - 1)/2.<br/>
	- Cứ thế đệ quy, tách đến khi các mảng còn 1 phần tử. <br/>
	- Gộp các mảng trên lại, vừa gộp vừa sắp xếp.<br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16">3.1 - Minh hoạ ý tưởng:</h3>
	<img
		src="/assets/images/sort/merge-sort-illustration.jpg"
		alt="Merge sort illustration photo"
		width="100%"
		heigh="650px"
	/>
	<p class="t-center m-tb-12" style="font-size:16px">Nguồn: <a href="https://www.programiz.com/" target="_blank">https://www.programiz.com/</a></p>
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Hàm merge sort:</h3>
	<pre class="language-js"><code>${mSCode}</code></pre>

</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Nên dùng cho mảng kích thước lớn. <br />
	- Thuật toán khá ổn định trong mọi trường hợp.<br/>
	- <b>Nhược điểm:</b><br/>
	  &nbsp;	+ Tốn khá nhiều không gian phụ để gộp mảng <br />
</div>`,
};
