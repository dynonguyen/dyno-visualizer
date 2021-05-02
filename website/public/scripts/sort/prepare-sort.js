// change background color pre swap ele
async function preSwap(left, right) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			$('#graph').children()[left].style.backgroundColor = CURRENT_ITEM_COLOR;
			$('#graph').children()[right].style.backgroundColor = SECOND_ITEM_COLOR;

			resolve();
		}, delay);
	});
}

// swap 2 element i, j

async function swapEle(i, j) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const node1 = $('#graph').children()[i],
				node2 = $('#graph').children()[j];

			const afterNode2 = node2.nextElementSibling;
			const parent = node2.parentNode;

			node1.replaceWith(node2);
			parent.insertBefore(node1, afterNode2);

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
async function changeItemColor(index, color) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let item = $('#graph').children()[index];
			if (item) item.style.backgroundColor = color;
			resolve();
		}, delay);
	});
}
