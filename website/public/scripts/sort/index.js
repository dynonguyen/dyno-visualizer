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
			xml += `<li class="arr-item" style="height:${item}px">${item}</li>`;
		});
	} else {
		arr.forEach((item, index) => {
			xml += `<li class="arr-item" style="height:${item}px"></li>`;
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

// render sort notes
const renderSortNotes = (sortNotes = []) => {
	let xml = '';
	sortNotes.forEach(
		(note) =>
			(xml += `<li class="d-flex sort-note-item">
			<span class="sort-note-item__title">${note.title}: </span>
			<div class="sort-note-item__color" style="background-color:${note.color}"></div>
	</li>`),
	);
	$('#sortNote').html(xml);
};

// generate array visualizer
function generateVisualizer() {
	const type = typeAlg === 'random' ? 0 : typeAlg === 'sorted' ? 1 : 2;

	// max value of item in is max height graph
	const maxValue = $('#graph').height() - 100;

	// generate array
	initArr = generateRandomData(size, type, maxValue);

	// render array
	toggleSortAnalysis(false);
	$('#graph').empty();
	$('#graph').html(renderArray(initArr));
}

// get description algorithm (*)
function getDescAlg(key = 'bubble') {
	switch (key) {
		case 'bubble':
			return basicBubbleSortDesc;
		case 'enBubble':
			return enhancedBubbleSortDesc;
		case 'selection':
			return selectionSortDesc;
		case 'insertion':
			return insertionSortDesc;
		case 'quick':
			return quickSortDesc;
		case 'merge':
			return mergeSortDesc;
		case 'heap':
			return heapSortDesc;
		default:
			return basicBubbleSortDesc;
	}
}

// render sort analysis
function renderSortAnalysis(
	status = 'Sorting ...',
	comparision = 'Processing ...',
	swap = 'Processing ...',
	arrAccess = 'Processing ...',
) {
	$('#sortStatus').text(status);
	$('#numOfComparision').text(comparision);
	$('#numOfSwap').text(swap);
	$('#numOfArrAccess').text(arrAccess);
}

// toggle sort analysis
function toggleSortAnalysis(open = false) {
	if (open) $('#sortAnalysis').css('display', 'flex');
	else $('#sortAnalysis').css('display', 'none');
}

// animation end sort
function changeOpacity(item) {
	return new Promise((resolve) => {
		setTimeout(() => {
			item.style.opacity = 0.4;
			resolve();
		}, 10);
	});
}

async function endSort() {
	const arr = $('#graph').children();
	let n = arr.length;
	for (let i = 0; i < n; ++i) {
		await changeOpacity(arr[i]);
	}
	$('#graph').children().css('opacity', 1);
}

// constant
const MAX_SIZE = 2000,
	MAX_DELAY = 1000;

// (*)
const OPTION_ALGORITHMS = [
	{
		title: 'Basic Bubble Sort',
		value: 'bubble',
	},
	{
		title: 'Enhanced Bubble Sort',
		value: 'enBubble',
	},
	{
		title: 'Selection Sort',
		value: 'selection',
	},
	{
		title: 'Insertion Sort',
		value: 'insertion',
	},
	{
		title: 'Quick Sort',
		value: 'quick',
	},
	{
		title: 'Merge Sort',
		value: 'merge',
	},
	{
		title: 'Heap Sort',
		value: 'heap',
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
	initArr = generateRandomData(size, delay, 300),
	isSorting = false,
	descAlg = getDescAlg(algorithm);

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

	renderSortNotes(basicBubbleSortDesc.sortNotes);

	// show/close modal
	$('#descAlgBtn').click(() => {
		$('#descTitle').text(descAlg.title);
		$('#descContent').html(descAlg.htmlContent);
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
		if (isSorting) {
			isSorting = false;
			$('#graph').html(renderArray(initArr));
			toggleSortAnalysis(false);
			// enable button sort
			$('#sortBtn').removeClass('disabled');
		}
		algorithm = $(this).val();
		descAlg = getDescAlg(algorithm);
		renderSortNotes(descAlg.sortNotes);
	});

	// check type algorithm change
	$('#type').change(function () {
		$('#sortBtn').removeClass('disabled');
		isSorting = false;
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
		if (isSorting) {
			isSorting = false;
			toggleSortAnalysis(false);
			$('#graph').html(renderArray(initArr));
			// enable button sort
			$('#sortBtn').removeClass('disabled');
		}
	});

	// ! sorting (*)
	$('#sortBtn').click(async function () {
		$(this).addClass('disabled');
		renderSortAnalysis();
		toggleSortAnalysis(true);
		isSorting = true;
		let resultAnalys = null;
		switch (algorithm) {
			case 'bubble':
				resultAnalys = await basicBubbleSort([...initArr]);
				break;
			case 'enBubble':
				resultAnalys = await enhancedBubbleSort([...initArr]);
				break;
			case 'selection':
				resultAnalys = await selectionSort([...initArr]);
				break;
			case 'insertion':
				resultAnalys = await insertionSort([...initArr]);
				break;
			case 'quick':
				resultAnalys = await quickSort([...initArr], 0, initArr.length - 1);
				nQSCompare = 0;
				nQSArrAccess = 0;
				nQSSwap = 0;
				break;
			case 'merge':
				resultAnalys = await mergeSort([...initArr], 0, initArr.length - 1);
				nMSCompare = 0;
				nMSArrAccess = 0;
				nMSSwap = 0;
				break;
			case 'heap':
				resultAnalys = await heapSort([...initArr]);
				nHSCompare = 0;
				nHSArrAccess = 0;
				nHSSwap = 0;
				break;
			default:
				break;
		}

		const { nSwap, nCompare, nArrAccess } = resultAnalys;
		endSort();
		renderSortAnalysis('Done', nCompare, nSwap, nArrAccess);
	});
});
