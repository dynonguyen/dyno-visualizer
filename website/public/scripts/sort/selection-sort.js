async function selectionSort(arr = []) {
	let n = arr.length;
	for (let i = 0; i < n - 1; ++i) {
		let min = arr[i];
		let index = i;

		// find min
		for (let j = i + 1; j < n; ++j) {
			if (arr[j] < min) {
				min = arr[j];
				index = j;
			}
		}

		// swap if min != initial min
		if (index !== i) [arr[i], arr[index]] = [arr[index], arr[i]];
	}
}
