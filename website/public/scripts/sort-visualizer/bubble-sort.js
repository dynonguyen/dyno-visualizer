async function basicBubbleSort(arr = []) {
	let n = arr.length,
		nSwap = 0,
		nCompare = 0,
		nArrAccess = 0;
	for (let i = 0; i < n - 1; ++i) {
		for (let j = 0; j < n - 1; ++j) {
			++nCompare;
			nArrAccess += 2;
			if (!isSorting) return;
			await preSwap(j, j + 1);
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				nArrAccess += 2;
				await swapEle(j, j + 1);
				++nSwap;
			}
			await endSwap(j, j + 1);
		}
	}

	return { nCompare, nArrAccess, nSwap };
}

async function enhancedBubbleSort(arr = []) {
	let n = arr.length,
		nSwap = 0,
		nCompare = 0,
		nArrAccess = 0;
	for (let i = 0; i < n - 1; ++i) {
		let isSwap = false;
		for (let j = 0; j < n - 1 - i; ++j) {
			++nCompare;
			nArrAccess += 2;
			if (!isSorting) return { nCompare, nArrAccess, nSwap };
			await preSwap(j, j + 1);
			if (arr[j] > arr[j + 1]) {
				nArrAccess += 2;
				isSwap = true;
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				await swapEle(j, j + 1);
				++nSwap;
			}
			await endSwap(j, j + 1);
		}
		await changeItemColor(n - 1 - i, DONE_ITEM_COLOR);
		if (!isSwap) {
			return { nCompare, nArrAccess, nSwap };
		}
	}

	return { nCompare, nArrAccess, nSwap };
}

// description
//  basic
const bsCode = Prism.highlight(
	`function basicBubbleSort(arr = []) {
	const n = arr.length;
	
	// Vòng lặp ngoài -> lặp qua mảng
	for (let i = 0; i < n - 1; ++i) {
		// Vòng lặp trong -> nổi bọt phần tử
		for (let j = 0; j < n - 1; ++j) {
			if (arr[j] > arr[j + 1]) {
				// Hoán vị
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	
	return arr;
}`,
	Prism.languages.javascript,
	'javascript',
);

const basicBubbleSortDesc = {
	title: '🎈 BASIC BUBBLE SORT 💭',
	sortNotes: [
		{
			title: 'P.tử hiện tại',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'P.tử kế tiếp',
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
		- <b>i</b>: chỉ số index vòng lặp ngoài (0 -> n-1). <br />
		- <b>j</b>: chỉ số vòng lặp trong (0 -> n - 1) <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng 2 vòng lặp lồng nhau. <br />
		- Vòng lặp bên ngoài để duyệt qua mảng. <br />
		- Vòng lặp bên trong để đẩy phần tử max (min) lên đầu mảng
		(bubble). <br />
		- Nếu phần tử sau > phần tử trước thì swap 2 phần tử đó (sắp tăng
		dần) và ngược lại.
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class=" m-t-8">
		<pre class="language-js"><code>${bsCode}</code></pre>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
	</div>`,
};

// enhanced
const ebsCode = Prism.highlight(
	`function enhancedBubbleSort(arr = []) {
	const n = arr.length;

	// Vòng lặp ngoài -> lặp qua mảng
	for (let i = 0; i < n - 1; ++i) {
		let swapped = false;

		// Vòng lặp trong -> nổi bọt phần tử
		// Mỗi lần lặp trừ đi 1 là phần tử đã nổi bọt trước đó
		for (let j = 0; j < n - 1 - i; ++j) {
			if (arr[j] > arr[j + 1]) {
				// Hoán vị
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = true; // Đổi cờ swap
			}
		}

		// Nếu vòng lặp trong không có cặp nào swap thì dừng (đã xếp xong)
		if (!swapped) break;
	}

	return arr;
}`,
	Prism.languages.javascript,
	'javascript',
);
const enhancedBubbleSortDesc = {
	title: '💭 ENHANCED BUBBLE SORT 🎈',
	sortNotes: [
		{
			title: 'P.tử hiện tại',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'P.tử kế tiếp',
			color: SECOND_ITEM_COLOR,
		},
		{
			title: 'P.tử nổi bọt',
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
		- <b>i</b>: chỉ số index vòng lặp ngoài (0 -> n-1). <br />
		- <b>j</b>: chỉ số vòng lặp trong (0 -> n - 1 - i) <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng 2 vòng lặp lồng nhau. <br />
		- Vòng lặp bên ngoài để duyệt qua mảng. <br />
		- Vòng lặp bên trong để đẩy phần tử max (min) lên đầu mảng
		(bubble). <br />
		- Nếu phần tử sau > phần tử trước thì swap 2 phần tử đó (sắp tăng
		dần) và ngược lại.
		- Để tối ưu thì ta chỉ nên cho vòng lặp trong chạy đến (n - 1 - i) mà không cần đến (n - 1).
		- Kiểm tra nếu trong suốt vòng lặp bên trong không có cặp nào được swap thì dừng thuật toán.
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div m-t-8">
	<pre class="language-js"><code>${ebsCode}</code></pre>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
	- Nên dùng thay thế cho thuật toán basic bubble sort.
	</div>`,
};
