const MIN_ITEM_COLOR = SECOND_ITEM_COLOR;
const SORTED_ITEM_COLOR = DONE_ITEM_COLOR;

async function selectionSort(arr = []) {
	let n = arr.length,
		nSwap = 0,
		nCompare = 0,
		nArrAccess = 0;

	for (let i = 0; i < n - 1; ++i) {
		++nArrAccess;
		let min = arr[i];
		let index = i;
		await changeItemColor(i, MIN_ITEM_COLOR);

		// find min
		for (let j = i + 1; j < n; ++j) {
			if (!isSorting) return { nCompare, nArrAccess, nSwap };
			++nArrAccess;
			++nCompare;
			await changeItemColor(j, CURRENT_ITEM_COLOR);
			if (arr[j] < min) {
				await changeItemColor(j, MIN_ITEM_COLOR);
				await changeItemColor(index, ITEM_COLOR);
				min = arr[j];
				index = j;
			} else {
				await changeItemColor(j, ITEM_COLOR);
			}
		}

		// swap if min != initial min
		if (index !== i) {
			nArrAccess += 2;
			++nSwap;
			[arr[i], arr[index]] = [arr[index], arr[i]];
			await swapEle(i, index);
		}

		await changeItemColor(i, SORTED_ITEM_COLOR);
	}

	return { nCompare, nArrAccess, nSwap };
}

// description
const selectionSortCode = Prism.highlight(
	`function selectionSort(arr = []) {
	const n = arr.length;

	for (let i = 0; i < n - 1; ++i) {
		let min = arr[i];
		let index = i;

		// tìm min
		for (let j = i + 1; j < n; ++j) {
			if (arr[j] < min) {
				min = arr[j];
				index = j;
			}
		}

		// Hoán vị nếu min tìm thấy # min ban đầu
		if (index !== i) [arr[i], arr[index]] = [arr[index], arr[i]];
	}
}`,
	Prism.languages.javascript,
	'javascript',
);

const selectionSortDesc = {
	title: '🔎 SELECTION SORT ALGORITHM ✔',
	sortNotes: [
		{
			title: 'P.tử hiện tại',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'P.tử nhỏ nhất',
			color: SECOND_ITEM_COLOR,
		},
		{
			title: 'P.tử đã chọn',
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
		Best case: <b>O(n<sup>2</sup>)</b>
		<br />
		Average case: <b>O(n<sup>2</sup>)</b>
		<br />
		Worst case: <b>O(n<sup>2</sup>)</b>
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
		- <b>i</b>: chỉ số index vòng lặp ngoài (0 -> n-1). <br />
		- <b>j</b>: chỉ số vòng lặp trong (i+1 -> n) <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng 2 vòng lặp lồng nhau để chia mảng thành 2 mảng con (1 đã
		sắp xếp, 1 không). <br />
		- Vòng lặp bên ngoài để duyệt qua mảng. <br />
		- Vòng lặp bên trong duyệt qua mảng con chưa sắp xếp để tìm phần
		tử min (max). <br />
		- Nếu min (max) trong mảng con đó nhỏ (lớn) hơn phần tử cuối mảng
		đã sắp xếp thì swap 2 phần từ đó.
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="m-t-8">
	<pre class="language-js"><code>${selectionSortCode}</code></pre>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
</div>`,
};
