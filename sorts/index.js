const bubbleSort = require('./bubble-sort');
const selectionSort = require('./selection-sort');
const insertionSort = require('./insertion-sort');
const quickSort = require('./quick-sort');
const mergeSort = require('./merge-sort');
const heapSort = require('./heap-sort');
const stupidSort = require('./stupid-sort');
// @fn: random a number array
// type = 0: random, 1: ascending, 2: decending
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

// @initial data
const len = 8;
const randomArr = generateRandomData(len, 0);
const ascenArr = generateRandomData(len, 1);
const descenArr = generateRandomData(len, 2);

// @fn: time logger
const timeLogger = (title = 'timer', sortFn) => {
	let arr = [...randomArr];
	console.time(`${title} --> RANDOM`);
	sortFn(arr);
	console.timeEnd(`${title} --> RANDOM`);
	arr = [...ascenArr];
	console.time(`${title} --> ASCENDING`);
	sortFn(arr);
	console.timeEnd(`${title} --> ASCENDING`);

	arr = [...descenArr];
	console.time(`${title} --> DESCENDING`);
	sortFn(arr);
	console.timeEnd(`${title} --> DESCENDING`);

	console.log('---------------------------------------');
};

// @testing
function testing() {
	console.log('LENGTH: ', len);
	console.log('---------------------------------------');

	// 1) NODEJS SORT
	timeLogger('NODEJS SORT', function (arr) {
		arr.sort((a, b) => a - b);
	});

	// // 2) BUUBLE SORT
	// timeLogger('BASIC BUBBLE SORT', bubbleSort.basicBubbleSort);
	// timeLogger('ENHANCED BUBBLE SORT', bubbleSort.enhancedBubbleSort);

	// // 3) SELECTION SORT
	// timeLogger('SELECTION SORT', selectionSort);

	// // 4) INSERTION SORT
	// timeLogger('INSERTION SORT', insertionSort);

	// // 5) QUICK SORT
	// timeLogger('QUICK SORT', (arr) => quickSort(arr, 0, len - 1));

	// // 6) MERGE SORT
	// timeLogger('MERGE SORT', (arr) => mergeSort(arr, 0, arr.length - 1));

	// // 7) HEAP SORT
	// timeLogger('HEAP SORT', heapSort);

	// STUPID SORT
	timeLogger('STUPID SORT', stupidSort);
}

testing();
