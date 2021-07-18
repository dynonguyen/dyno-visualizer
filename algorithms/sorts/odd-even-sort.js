/* 
 
    Ý tưởng: 
  - Còn gọi là brick sort
  - Là phiên bản khác cải thiện của bubble sort, chia mảng làm 2 phase chẵn và lẻ, sau đó dùng bubble sort.

*/

function oddEvenSort(arr = []) {
	const n = arr.length;
	let isSorted = false;

	while (!isSorted) {
		isSorted = true;

		// Sắp xếp mảng chẵn
		for (let i = 0; i <= n - 2; i += 2) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				isSorted = false;
			}
		}

		// Sắp xếp mảng lẻ
		for (let i = 1; i <= n - 2; i += 2) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				isSorted = false;
			}
		}
	}
}

module.exports = oddEvenSort;
