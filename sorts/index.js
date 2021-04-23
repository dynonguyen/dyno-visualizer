const bubbleSort = require('./bubble-sort');

// @fn: random a number array
// type = 0: random, 1: ascending, 2: decending
const generateRandomData = (length = 10, type = 0, max = 1000) => {
	let arr = [];
	switch (type) {
		case 1:
			for (let i = 0; i < length; ++i) arr.push(i);
			break;
		case 2:
			for (let i = 0; i < length; ++i) arr.push(length - i);
			break;
		default:
			for (let i = 0; i < length; ++i)
				arr.push(Math.round(Math.random() * max));
			break;
	}
	return arr;
};

// @initial data
const len = 100000;
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
console.log('LENGTH: ', len);
console.log('---------------------------------------');

// 1) NODEJS SORT
timeLogger('NODEJS SORT', function (arr) {
	arr.sort((a, b) => a - b);
});

// 2) BUUBLE SORT
timeLogger('BUBBLE SORT', bubbleSort);
