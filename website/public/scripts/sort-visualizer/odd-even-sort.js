async function oddEvenSort(arr = []) {
	const n = arr.length;
	let nSwap = 0,
		nCompare = 0,
		nArrAccess = 0,
		isSorted = false;

	while (!isSorted) {
		isSorted = true;
		if (!isSorting) return { nSwap, nArrAccess, nCompare };

		// Sắp xếp mảng chẵn
		for (let i = 0; i <= n - 2; i += 2) {
			if (!isSorting) return { nSwap, nArrAccess, nCompare };

			nArrAccess += 2;
			nCompare++;

			if (arr[i] > arr[i + 1]) {
				await preSwap(i, i + 1);
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				isSorted = false;
				await swapEle(i, i + 1);

				nSwap++;
				nArrAccess += 2;
				await endSwap(i, i + 1);
			}
		}

		// Sắp xếp mảng lẻ
		for (let i = 1; i <= n - 2; i += 2) {
			if (!isSorting) return { nSwap, nArrAccess, nCompare };

			nArrAccess += 2;
			nCompare++;
			if (arr[i] > arr[i + 1]) {
				await preSwap(i, i + 1);

				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				isSorted = false;
				await swapEle(i, i + 1);

				nSwap++;
				nArrAccess += 2;
				await endSwap(i, i + 1);
			}
		}
	}

	return { nSwap, nArrAccess, nCompare };
}

// description
const oeSortCode = Prism.highlight(
	`function oddEvenSort(arr = []) {
  const n = arr.length;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    // Sắp xếp mảng chẵn
    for (let i = 0; i <= n - 2; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
      }
    }

    // Sắp xếp mảng lẻ
    for (let i = 1; i <= n - 2; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
      }
    }
  }

  return arr;
}
  `,
	Prism.languages.javascript,
	'javascript',
);

const oeSortDesc = {
	title: '0️⃣1️⃣ ODD EVEN SORT / BRICK SORT 🧱',
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
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
  - Là phiên bản khác cải thiện của bubble sort, chia mảng làm 2 pha chẵn và lẻ, sau đó dùng bubble sort. <br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class=" m-t-8">
		<pre class="language-js"><code>${oeSortCode}</code></pre>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
  - Còn gọi là Brick sort. <br/>
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
	</div>`,
};
