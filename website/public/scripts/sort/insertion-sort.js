const INSERTED_ITEM = SECOND_ITEM_COLOR;

async function insertionSort(arr = []) {
	let n = arr.length,
		nSwap = 0,
		nCompare = 0,
		nArrAccess = 0;
	let type = 0;
	if (n <= 20) type = 1;

	let i = 1,
		j;

	while (i < n) {
		if (!isSorting) return { nCompare, nArrAccess, nSwap };
		await changeItemColor(i, CURRENT_ITEM_COLOR);
		++nCompare;
		nArrAccess += 2;
		if (arr[i] >= arr[i - 1]) ++i;
		else {
			const current = arr[i];
			j = i - 1;
			// insert item into suitable position
			while (j >= 0 && arr[j] > current) {
				++nCompare;
				++nSwap;
				nArrAccess += 2;
				await changeItemColor(j + 1, '#fff');
				await swapEle(j, j + 1);
				if (j + 1 === i) await changeItemColor(j + 1, CURRENT_ITEM_COLOR);
				arr[j + 1] = arr[j];
				--j;
			}

			arr[j + 1] = current;
			++nArrAccess;

			await changeValue(j + 1, current, type);
			await changeItemColor(j + 1, ITEM_COLOR);
			++i;
		}
		await changeItemColor(i - 1, ITEM_COLOR);
	}

	return { nCompare, nArrAccess, nSwap };
}

// description
const insertionSortCode = Prism.highlight(
	`function insertionSort(arr = []) {
	let n = arr.length;

	let i = 1, j = 0;

	while (i < n) {
		if (arr[i] >= arr[i - 1]) ++i;
		else {
			const current = arr[i];
			j = i - 1;

			// Chèn phần tử vào vị trí thích hợp
			while (j >= 0 && arr[j] > current) {
				arr[j + 1] = arr[j];
				--j;
			}

			arr[j + 1] = current;
			++i;
		}
	}

	return arr;
}`,
	Prism.languages.javascript,
	'javascript',
);
const insertionSortDesc = {
	title: 'INSERTION SORT ALGORITHM',
	sortNotes: [
		{
			title: 'P.tử hiện tại',
			color: CURRENT_ITEM_COLOR,
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
		Best case: <b>O(n)</b>
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
		- <b>i</b>: chỉ số index vòng lặp ngoài (1 -> n). <br />
		- <b>j</b>: chỉ số vòng lặp trong (i - 1 -> 0) <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng 2 vòng lặp lồng nhau để chia mảng thành 2 mảng con (1 đã
		sắp xếp, 1 không). <br />
		- Vòng lặp bên ngoài để duyệt qua mảng. <br />
		- Vòng lặp bên trong để chọn vị trí chèn thích hợp cho phần tử i
		(insertion).
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="m-t-8">
  <pre class="language-js"><code>${insertionSortCode}</code></pre>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
</div>`,
};
