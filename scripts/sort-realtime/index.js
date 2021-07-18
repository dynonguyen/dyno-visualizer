/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />
let delayTimer = null;

const SORT_BOX_LIST = [
	{
		key: 'bubble-basic',
		title: 'Basic Bubble Sort',
	},
	{
		key: 'bubble-en',
		title: 'Enhanced Bubble Sort',
	},
	{
		key: 'heap',
		title: 'Heap Sort',
	},
];

function renderInitSortBox() {
	let xml = '';

	SORT_BOX_LIST.forEach((item) => {
		xml += `
<div data-key="${item.key}" class="sort-box-item t-center">
	<h3 class="sort-name">${item.title}</h3>
	<div class="sort-content">
		<span class="label">Trạng thái:</span>
		<span class="content">Chuẩn bị ...</span>
	</div>
	<div class="sort-content">
		<span class="label">So sánh:</span>
		<span class="content">0</span>
	</div>
	<div class="sort-content">
		<span class="label">Hoán vị:</span>
		<span class="content">0</span>
	</div>
	<div class="sort-content">
		<span class="label">Truy cập mảng:</span>
		<span class="content">0</span>
	</div>
	<div class="sort-content">
		<span class="label">Thời gian:</span>
		<span class="content">0 (s)</span>
	</div>
</div>
		`;
	});

	$('#sortBoxes').html(xml);
}

function sorting() {
	isSorting = true;
	$('.sort-box-item').each((index, elem) => {
		const nodeElem = $(elem);
		nodeElem.addClass('sorting');

		const key = nodeElem.attr('data-key');
		let arr = [...initArr];
		let sortRes = null;

		switch (key) {
			case 'bubble-basic':
				sortRes = basicBubbleSort(arr);
				console.log(sortRes);
				break;

			case 'bubble-en':
				sortRes = enhancedBubbleSort(arr);
				console.log(sortRes);
				break;

			default:
				break;
		}

		nodeElem.removeClass('sorting').addClass('sorted');
	});
}

const MAX_SIZE = 100_000;
const MAX = 1000;
let size = 100_000,
	typeArr = 0,
	initArr = generateRandomData(size, typeArr, MAX);

$(document).ready(function () {
	// render array type select
	$('#type').html(renderOptionSelect(ARRAY_TYPES));

	// render initial sort box
	renderInitSortBox();

	// check size input change
	$('#size').change(function () {
		delayTimer = debounce(delayTimer, 500, () => {
			const val = parseInt($(this).val());

			if (val > MAX_SIZE) {
				$(this).val(MAX_SIZE);
				size = MAX_SIZE;
			} else if (val < 1 || isNaN(val)) {
				$(this).val(1);
				size = 1;
			} else size = val;

			initArr = generateRandomData(size, typeArr, MAX);

			// enable button sort
			$('#sortBtn').removeClass('disabled');
		});
	});

	// check type algorithm change
	$('#type').change(function () {
		$('#sortBtn').removeClass('disabled');
		typeArr = parseInt($(this).val());
	});

	// sort
	$('#sortBtn').click(function () {
		sorting();
	});
});
