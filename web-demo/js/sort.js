/// <reference path="D:\tips\typings\jquery\globals\jquery\index.d.ts" />
import sortModule from '../../sorts/index.js';

// constant
const MAX_SIZE = 2000,
	MAX_DELAY = 1000;

const OPTION_ALGORITHMS = [
	{
		title: 'Javascript Sort',
		value: 'js',
	},
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
	initArr = [];

// @fn: helper
function renderOptionSelect(optionList = []) {
	let result = '';
	optionList.forEach((option) => {
		result += `<option value="${option.value}">${option.title}</option>`;
	});
	return result;
}

function renderArray(arr = []) {
	let xml = '';
	arr.forEach((item) => {
		xml += `<li class="arr-item" style="height:${item}px"></li>`;
	});
	return xml;
}

// @render
$(document).ready(() => {
	// initial select
	$('#algorithm').append(renderOptionSelect(OPTION_ALGORITHMS));
	$('#type').append(renderOptionSelect(ARRAY_TYPES));

	// check size input change
	$('#size').change(function () {
		const val = parseInt($(this).val());

		if (val > MAX_SIZE) {
			$(this).val(MAX_SIZE);
			size = MAX_SIZE;
		} else if (val < 1) {
			$(this).val(1);
			size = 1;
		} else size = val;

		console.log(size);
	});

	// check delay input change
	$('#delay').change(function () {
		const val = parseInt($(this).val());
		if (val > MAX_DELAY) {
			$(this).val(MAX_DELAY);
			delay = MAX_DELAY;
		} else if (val < 0) {
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
		typeAlg = $(this).val();
	});

	// generate array
	$('#generateBtn').click(() => {
		const type = typeAlg === 'random' ? 0 : typeAlg === 'sorted' ? 1 : 2;
		// max value of item in is max height graph
		const maxValue = $('#graph').height() - 50;

		// generate array
		initArr = sortModule.generateRandomData(size, type, maxValue);

		// render array

		$('#graph').html(renderArray(initArr));
	});
});
