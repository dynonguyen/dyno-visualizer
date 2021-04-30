/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />

// @fn: helper
// render option select
function renderOptionSelect(optionList = []) {
	let result = '';
	optionList.forEach((option) => {
		result += `<option value="${option.value}">${option.title}</option>`;
	});
	return result;
}

// render visualize array
function renderArray(arr = []) {
	let xml = '';
	if (arr.length <= 20) {
		arr.forEach((item, index) => {
			xml += `<li class="arr-item" id="i-${index}" style="height:${item}px">${item}</li>`;
		});
	} else {
		arr.forEach((item, index) => {
			xml += `<li class="arr-item" id="i-${index}" style="height:${item}px"></li>`;
		});
	}

	return xml;
}

// render physical array
const generateRandomData = (length = 10, type = 0, max = 1000) => {
	let arr = [];
	for (let i = 0; i < length; ++i) arr.push(Math.round(Math.random() * max));
	switch (type) {
		case 1:
			arr.sort((a, b) => a - b);
			// swap 2 last postion => generate ~sorted list
			if (length > 1)
				[arr[length - 1], arr[length - 2]] = [arr[length - 2], arr[length - 1]];
			break;
		case 2:
			arr.sort((a, b) => b - a);
			if (length > 1)
				[arr[length - 1], arr[length - 2]] = [arr[length - 2], arr[length - 1]];
			break;
		default:
			break;
	}
	return arr;
};

// generate array visualizer
function generateVisualizer() {
	const type = typeAlg === 'random' ? 0 : typeAlg === 'sorted' ? 1 : 2;

	// max value of item in is max height graph
	const maxValue = $('#graph').height() - 80;

	// generate array
	initArr = generateRandomData(size, type, maxValue);

	// render array
	$('#graph').empty();
	$('#graph').html(renderArray(initArr));
}

// constant
const MAX_SIZE = 2000,
	MAX_DELAY = 1000;

const OPTION_ALGORITHMS = [
	{
		title: 'Basic Bubble Sort',
		value: 'bubble',
	},
	{
		title: 'Enhanced Bubble Sort',
		value: 'enBubble',
	},
];

const ARRAY_TYPES = [
	{
		title: 'Random',
		value: 'random',
	},
	{
		title: '~Sorted',
		value: 'sorted',
	},
	{
		title: '~Reverse Sorted',
		value: 'reverse',
	},
];

// initial
let size = 1,
	delay = 0,
	typeAlg = 'random',
	algorithm = OPTION_ALGORITHMS[0].value,
	initArr = generateRandomData(1, 0, 100),
	isSorting = false;

// @render
$(document).ready(() => {
	// web display
	$('#hideControlBtn').click(function () {
		const thisEle = $(this);
		if (thisEle.hasClass('more')) {
			thisEle.removeClass('more').addClass('less');
			thisEle
				.children('.fas')
				.removeClass('fa-chevron-circle-up')
				.addClass('fa-chevron-circle-down');

			$('.sort-input').hide(250);
			$('.sort-btn').hide(250);
			$('#hideControlBtn').css({
				top: 2,
			});
		} else {
			thisEle.removeClass('less').addClass('more');
			thisEle
				.children('.fas')
				.removeClass('fa-chevron-circle-down')
				.addClass('fa-chevron-circle-up');
			$('.sort-input').show(250);
			$('.sort-btn').show(250);
			$('#hideControlBtn').css({
				top: 18,
			});
		}
	});

	// show/close modal
	$('#descAlgBtn').click(() => {
		$('#descTitle').text(basicBubbleSortDesc.title);
		$('#descContent').html(basicBubbleSortDesc.htmlContent);
		$('#modalOverlay').show();
		$('#descAlgModal').fadeIn(350);
	});

	$('#closeModal').click(() => {
		$('#modalOverlay').hide();
		$('#descAlgModal').fadeOut(350);
	});

	// initial select
	$('#algorithm').append(renderOptionSelect(OPTION_ALGORITHMS));
	$('#type').append(renderOptionSelect(ARRAY_TYPES));
	$('#graph').html(renderArray(initArr));

	// check size input change
	$('#size').change(function () {
		isSorting = false;

		const val = parseInt($(this).val());

		if (val > MAX_SIZE) {
			$(this).val(MAX_SIZE);
			size = MAX_SIZE;
		} else if (val < 1 || isNaN(val)) {
			$(this).val(1);
			size = 1;
		} else size = val;

		generateVisualizer();

		// enable button sort
		$('#sortBtn').removeClass('disabled');
	});

	// check delay input change
	$('#delay').change(function () {
		const val = parseInt($(this).val());
		if (val > MAX_DELAY) {
			$(this).val(MAX_DELAY);
			delay = MAX_DELAY;
		} else if (val < 0 || isNaN(val)) {
			$(this).val(0);
			delay = 0;
		} else delay = val;
	});

	// check algorithm change
	$('#algorithm').change(function () {
		algorithm = $(this).val();
	});

	// check type algorithm change
	$('#type').change(function () {
		$('#sortBtn').removeClass('disabled');
		typeAlg = $(this).val();
		generateVisualizer();
	});

	// generate array
	$('#generateBtn').click(() => {
		// Stop sorting if it's sorting
		isSorting = false;

		generateVisualizer();

		// enable button sort
		$('#sortBtn').removeClass('disabled');
	});

	// get last unsorted array
	$('#oldUnsortedBtn').click(function () {
		$('#graph').html(renderArray(initArr));
		// enable button sort
		$('#sortBtn').removeClass('disabled');
	});

	// ! sorting
	$('#sortBtn').click(function () {
		$(this).addClass('disabled');

		isSorting = true;
		switch (algorithm) {
			case 'bubble':
				basicBubbleSort(initArr);
				break;
			case 'enBubble':
				break;
			default:
				break;
		}
	});
});
