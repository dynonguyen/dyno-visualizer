// debounce
function debounce(timer = null, delay = 250, cbFn) {
	if (timer) clearTimeout(timer);
	timer = setTimeout(cbFn, delay);
	return timer;
}

// render option select
function renderOptionSelect(optionList = []) {
	let result = '';
	optionList.forEach((option) => {
		result += `<option value="${option.value}">${option.title}</option>`;
	});
	return result;
}

// render physical array
const generateRandomData = (length = 10, type = 0, max = 1000) => {
	let arr = [];
	for (let i = 0; i < length; ++i) arr.push(Math.round(Math.random() * max));
	switch (type) {
		case 1:
			arr.sort((a, b) => a - b);
			// swap 2 last postion => generate ~sorted list
			if (length > 2) {
				[arr[length - 1], arr[length - 2]] = [arr[length - 2], arr[length - 1]];
				[arr[length - 2], arr[length - 3]] = [arr[length - 3], arr[length - 2]];
			}
			break;
		case 2:
			arr.sort((a, b) => b - a);
			if (length > 2) {
				[arr[length - 1], arr[length - 2]] = [arr[length - 2], arr[length - 1]];
				[arr[length - 2], arr[length - 3]] = [arr[length - 3], arr[length - 2]];
			}

			break;
		default:
			break;
	}
	return arr;
};
