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
async function radixSortLSD(arr = []) {
	let nSwap = 0,
		nCompare = 0,
		nArrAccess = 0;

	// Tạo 11 cái xô chứa các digit từ -1 đến 9
	let buckets = Array.from({ length: 11 }, () => new Array());

	// Số chữ số nhiều nhất, cũng là số lần lặp duyệt mảng
	let exp = getMaxExp(arr) || 0;
	nArrAccess += arr.length;

	// LSD lấy từ chữ số cuối
	let i = 0;
	while (i < exp) {
		if (!isSorting) return { nSwap, nCompare, nArrAccess };

		// Lặp qua mảng và cho vào các xô
		const arrLen = arr.length;
		for (let index = 0; index < arrLen; ++index) {
			if (!isSorting) return { nSwap, nCompare, nArrAccess };

			const num = arr[index];
			await changeItemColor(index, CURRENT_ITEM_COLOR);
			const digitIndex = getDigit(num, i) + 1;
			buckets[digitIndex].push(num);
			await changeItemColor(index, ITEM_COLOR);

			nArrAccess += 3;
		}

		// Lấy từ xô trả về mảng
		let j = 0;
		for (let index = 0; index < 11; ++index) {
			if (!isSorting) return { nSwap, nCompare, nArrAccess };

			let numArr = buckets[index];
			nArrAccess++;

			// Nếu là lần cuối và xô là xô chứa số âm thì lấy ngược lại các p.tử trong xô
			if (i === exp - 1 && index === 0) {
				const n = numArr.length;
				for (let k = n - 1; k >= 0; --k) {
					await changeItemColor(j, SECOND_ITEM_COLOR);
					await changeValue(j, numArr[k]);
					await changeItemColor(j, ITEM_COLOR);
					arr[j++] = numArr[k];
					nArrAccess += 2;
				}
			}
			// Ngược lại, thì lấy xuôi từ trong xô
			else {
				const l = numArr.length;
				for (let index = 0; index < l; ++index) {
					if (!isSorting) return { nSwap, nCompare, nArrAccess };

					const num = numArr[index];
					await changeValue(j, num);
					await changeItemColor(j, SECOND_ITEM_COLOR);
					await changeItemColor(j, ITEM_COLOR);

					arr[j++] = num;
					nArrAccess += 2;
				}
			}
			// Làm trống xô
			numArr.length = 0;
		}

		++i;
	}

	return { nSwap, nCompare, nArrAccess };
}

// description
const radixSortLSDCode = Prism.highlight(
	`// Hàm lấy chữ số tại vị trí posDigit
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
`,
	Prism.languages.javascript,
	'javascript',
);

const radixSortLSDDesc = {
	title: '1️⃣ RADIX SORT (LSD) ALGORITHM 💯',
	sortNotes: [
		{
			title: 'P.tử hiện tại',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'P.tử trong xô',
			color: SECOND_ITEM_COLOR,
		},
	],
	htmlContent: `<h2 class="sub-title">
	1) Độ phức tạp thuật toán (Algorithm Complexity BigO):
</h2>
<br />
<div class="sub-content">
	<u>- Độ phức tạp thời gian (Time Complexity):</u>
	<br />
  <br />

  <p>
    Giả sử ta có 1 mảng các số nguyên có số phần tử n, base (số lượng xô (bucket) chứa các phần tử) 
    và digit là số chữ số của số lớn nhất trong mảng. Thì độ phức tạp sẽ là:
  </p>

	<div class="p-l-8 m-tb-8">
		Best case: <b>O( digit * (n + base) )</b>
		<br />
		Average case: <b>O( digit * (n + base) )</b>
		<br />
		Worst case: <b>O( digit * (n + base) )</b>
		<br />
	</div>
	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O( n + base )</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
  Số lượng base (bucket) khác nhau thì cách tách phần tử cũng khác nhau. <br/>
  Ví dụ, ta chọn base = 10 (các xô từ 0 đến 9) thì mỗi lần tách sẽ là 1 chữ số. Còn base = 100 thì mỗi lần tách sẽ là 2 số.
</div>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>buckets</b>: Mảng 2 chiều chứa các số theo cơ số của nó. <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng một mảng 2 chiều để chứa các số được phân loại theo từng chữ số của chúng.<br />
		- Số lần lặp bên ngoài là số lượng chữ số của phần tử lớn nhất trong mảng. <br />
		- Mỗi lần lặp ta sẽ tách các chữ số theo từng hàng. Radix LSD (Least Significant Digit) nên ta sẽ bắt đầu từ hàng đơn vị đến hàng chục ... <br />
    - Mỗi chữ số sẽ vào 1 xô tương ứng. <br/>
		- Lấy các xô theo thứ tự trên xuống gán ngược lại mảng ban đầu. <br/>
    - Tiếp tục như thế đến hàng cuối cùng.
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16">3.1 - Mô tả ý tưởng:</h3>
  <img
		src="/assets/images/sort/radix-lsd.jpg"
		alt="Radix LSD sort illustration photo"
		width="100%"
		heigh="650px"
	/>
  <div class="t-center">
    Nguồn ảnh: <a href="https://www.geeksforgeeks.org/radix-sort/">GeeksforGeek</a>
  </div>
  <br/>
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Hàm Radix LSD sort:</h3>
	<pre class="language-js"><code>${radixSortLSDCode}</code></pre>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
  - Là một thuật toán sắp xếp phân tán, ổn định, không dùng phép so sánh. <br/>
  - Còn được gọi là Digital sort hay Postmans sort. <br/>
  - Radix còn một phiên bản Radix MSD (Most significant digit). <br/>
  - Thích hợp cho việc sắp xếp mảng số hoặc chuỗi (chỉ đối với mảng chuỗi cùng chiều dài). <br/>
  - Nhược điểm: <br/>
  &nbsp;&nbsp;+ Mảng có các phần tử quá chênh lệch nhau về số lượng chữ số. VD: [2, 3, 21, 100000000] <br/>
  &nbsp;&nbsp;+ Tốn không gian tạo bucket.
</div>`,
};
