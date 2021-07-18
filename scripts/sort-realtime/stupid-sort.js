let nStCompare = 0,
	nStArrAccess = 0,
	nStSwap = 0;

async function isSortedArr(arr = []) {
	let n = arr.length;

	for (let i = 0; i < n - 1; ++i) {
		if (!isSorting) return false;
		nStCompare += 2;
		nStArrAccess += 2;

		await changeItemColor(i, CURRENT_ITEM_COLOR);
		await changeItemColor(i, ITEM_COLOR);

		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}

	return true;
}

function shuffleArray(arr = []) {
	return arr.sort(() => {
		nStArrAccess += 2;
		nStSwap += 2;
		return Math.random() - 0.5;
	});
}

async function reRenderArr(arr) {
	let xml = '';

	arr.forEach((item, index) => {
		xml += `<li class="arr-item" style="height:${item}px"></li>`;
	});

	$('#graph').html(xml);
}

async function stupidSort(arr = []) {
	while (!(await isSortedArr(arr))) {
		nStCompare++;

		if (!isSorting)
			return { nSwap: nStSwap, nCompare: nStCompare, nArrAccess: nStArrAccess };

		shuffleArray(arr);
		await reRenderArr(arr);
	}

	return { nSwap: nStSwap, nCompare: nStCompare, nArrAccess: nStArrAccess };
}

// description
const stSCode = Prism.highlight(
	`// Hàm kiểm tra mảng đã sắp xếp chưa?
function isSortedArr(arr = []) {
	for (let i = 0; i < arr.length - 1; ++i)
		if (arr[i] > arr[i + 1]) return false;

	return true;
}

// Hàm xáo trộn mảng
function shuffleArray(arr = []) {
	return arr.sort(() => Math.random() - 0.5);
}

// stupid sort
function stupidSort(arr = []) {
	while (!isSortedArr(arr)) shuffleArray(arr);
}
`,
	Prism.languages.javascript,
	'javascript',
);

const stupidSortDesc = {
	title: '🍀 STUPID SORT ALGORITHM 🐢',
	sortNotes: [
		{
			title: 'P.tử kiểm tra hiện tại',
			color: CURRENT_ITEM_COLOR,
		},
	],
	htmlContent: `<h2 class="sub-title">
	1) Độ phức tạp thuật toán (Algorithm Complexity BigO):
</h2>
<div class="sub-content p-tb-8">
	- O(∞) hay O(nhân phẩm)
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<div class="sub-content">
	<div class="p-l-8 m-tb-8">
	- Xáo trộn mảng, kiểm tra mảng vừa xáo.<br/>
	- Nếu đã xếp thì dừng, còn không thì lặp lại 🙂.<br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Hàm stupid sort:</h3>
	<pre class="language-js"><code>${stSCode}</code></pre>

</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Dùng để kiểm tra nhân phẩm người dùng. 🐭<br />
	- Chán quá thì dùng cho vui chứ không có ý nghĩa gì. 😜<br/>
</div>`,
};
