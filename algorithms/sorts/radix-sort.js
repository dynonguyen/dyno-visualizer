// Hàm lấy chữ số tại vị trí posDigit
// posDigit = 0 là hàng đơn vị
function getDigit(num = 0, posDigit = 0) {
	// ex: num = -1234, posDigit = 2, expected = 2
	let numInt = Math.abs(parseInt(num / 10 ** posDigit)); // numInt = | -1234 / 10^2 | = 12;
	let digit = numInt % 10; // digit = 2;

	// Nếu num < 0 và digit = 0 thì trả về -1, ngược lại trả về digit
	return num < 0 && digit === 0 ? -1 : digit;
}

// Tìm số chữ số lớn nhất của mảng
// Chú ý số âm thì cộng thêm 1 chữ số
function getMaxExp(arr = []) {
	let exp = 0;

	arr.forEach((num) => {
		const len = num.toString().length;
		if (len > exp) exp = len;
	});

	return exp;
}

// Hàm radix sort LSD ( Least Significant Digit )
function radixSortLSD(arr = []) {
	// Tạo 11 cái xô chứa các digit từ -1 đến 9
	let buckets = Array.from({ length: 11 }, () => new Array());

	// Số chữ số nhiều nhất, cũng là số lần lặp duyệt mảng
	let exp = getMaxExp(arr) || 0;

	// LSD lấy từ chữ số cuối
	let i = 0;
	while (i < exp) {
		// Lặp qua mảng và cho vào các xô
		arr.forEach((num) => {
			const digitIndex = getDigit(num, i) + 1; // Do buckets có index từ 0 -> 10, getDigit() trả về -1 -> 10
			buckets[digitIndex].push(num);
		});

		// Lấy từ xô trả về mảng
		let j = 0;
		buckets.forEach((numArr, index) => {
			// Nếu là lần cuối và xô là xô chứa số âm thì lấy ngược lại các p.tử trong xô
			if (i === exp - 1 && index === 0) {
				const n = numArr.length;
				for (let k = n - 1; k >= 0; --k) arr[j++] = numArr[k];
			}
			// Ngược lại, thì lấy xuôi từ trong xô
			else numArr.forEach((num) => (arr[j++] = num));

			// Làm trống xô
			numArr.length = 0;
		});

		++i;
	}

	return arr;
}

// Hàm radix sort MSD ( Most Significant Digit )
function radixSortMSD(arr = []) {}

module.exports = { radixSortLSD, radixSortMSD };
