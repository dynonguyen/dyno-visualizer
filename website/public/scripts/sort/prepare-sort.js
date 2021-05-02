// change background color pre swap ele
async function preSwap(left, right) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			$('#graph').children()[left].style.backgroundColor = CURRENT_ITEM_COLOR;
			$('#graph').children()[right].style.backgroundColor = SWAP_ITEM_COLOR;

			resolve();
		}, delay);
	});
}

// swap 2 element i, j
async function swapEle(i, j) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const arr = $('#graph').children();
			arr[i].before(arr[j]);
			resolve();
		}, delay);
	});
}

// end swap
async function endSwap(left, right) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			$('#graph').children()[left].style.backgroundColor = ITEM_COLOR;
			$('#graph').children()[right].style.backgroundColor = ITEM_COLOR;

			resolve();
		}, delay);
	});
}

// bubble color for buuble sort
async function bubble(index) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			$('#graph').children()[index].style.backgroundColor = BUBBLE_ITEM_COLOR;
			resolve();
		}, delay);
	});
}
