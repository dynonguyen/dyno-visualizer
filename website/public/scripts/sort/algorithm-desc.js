const basicBubbleSortDesc = {
	title: '🎈 BASIC BUBBLE SORT 💭',
	sortNotes: [
		{
			title: 'Current Item',
			color: '#BD93F9',
		},
		{
			title: 'Next Item',
			color: '#48D06D',
		},
	],
	htmlContent: `<h2 class="sub-title">
	1) Độ phức tạp thuật toán (Algorithm Complexity BigO):
</h2>
<br />
<div class="sub-content">
	<u>- Độ phức tạp thời gian (Time Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">
		Best case: <b>O(n)</b>
		<br />
		Average case: <b>O(n<sup>2</sup>)</b>
		<br />
		Worst case: <b>O(n<sup>2</sup>)</b>
		<br />
	</div>

	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O(1)</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>i</b>: chỉ số index vòng lặp ngoài (0 -> n-1). <br />
		- <b>j</b>: chỉ số vòng lặp trong (0 -> n - 1) <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng 2 vòng lặp lồng nhau. <br />
		- Vòng lặp bên ngoài để duyệt qua mảng. <br />
		- Vòng lặp bên trong để đẩy phần tử max (min) lên đầu mảng
		(bubble). <br />
		- Nếu phần tử sau > phần tử trước thì swap 2 phần tử đó (sắp tăng
		dần) và ngược lại.
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8">
	<img
		src="/assets/images/basic-bubble-sort.jpg"
		alt="Basic bubble sort photo"
		width="100%"
	/>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
	</div>`,
};

const enhancedBubbleSortDesc = {
	title: '💭 ENHANCED BUBBLE SORT 🎈',
	sortNotes: [
		{
			title: 'Current Item',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'Next Item',
			color: SECOND_ITEM_COLOR,
		},
		{
			title: 'Bubbled Item',
			color: DONE_ITEM_COLOR,
		},
	],
	htmlContent: `<h2 class="sub-title">
	1) Độ phức tạp thuật toán (Algorithm Complexity BigO):
</h2>
<br />
<div class="sub-content">
	<u>- Độ phức tạp thời gian (Time Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">
		Best case: <b>O(n)</b>
		<br />
		Average case: <b>O(n<sup>2</sup>)</b>
		<br />
		Worst case: <b>O(n<sup>2</sup>)</b>
		<br />
	</div>

	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O(1)</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>i</b>: chỉ số index vòng lặp ngoài (0 -> n-1). <br />
		- <b>j</b>: chỉ số vòng lặp trong (0 -> n - 1 - i) <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng 2 vòng lặp lồng nhau. <br />
		- Vòng lặp bên ngoài để duyệt qua mảng. <br />
		- Vòng lặp bên trong để đẩy phần tử max (min) lên đầu mảng
		(bubble). <br />
		- Nếu phần tử sau > phần tử trước thì swap 2 phần tử đó (sắp tăng
		dần) và ngược lại.
		- Để tối ưu thì ta chỉ nên cho vòng lặp trong chạy đến (n - 1 - i) mà không cần đến (n - 1).
		- Kiểm tra nếu trong suốt vòng lặp bên trong không có cặp nào được swap thì dừng thuật toán.
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8">
	<img
		src="/assets/images/enhanced-bubble-sort.jpg"
		alt="Enhanced bubble sort photo"
		width="100%"
	/>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
	- Nên dùng thay thế cho thuật toán basic bubble sort.
	</div>`,
};

const selectionSortDesc = {
	title: '🔎 SELECTION SORT ALGORITHM ✔',
	sortNotes: [
		{
			title: 'Current Item',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'Minimum Item',
			color: SECOND_ITEM_COLOR,
		},
		{
			title: 'Selected Item',
			color: DONE_ITEM_COLOR,
		},
	],
	htmlContent: `<h2 class="sub-title">
	1) Độ phức tạp thuật toán (Algorithm Complexity BigO):
</h2>
<br />
<div class="sub-content">
	<u>- Độ phức tạp thời gian (Time Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">
		Best case: <b>O(n<sup>2</sup>)</b>
		<br />
		Average case: <b>O(n<sup>2</sup>)</b>
		<br />
		Worst case: <b>O(n<sup>2</sup>)</b>
		<br />
	</div>

	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O(1)</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>i</b>: chỉ số index vòng lặp ngoài (0 -> n-1). <br />
		- <b>j</b>: chỉ số vòng lặp trong (i+1 -> n) <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng 2 vòng lặp lồng nhau để chia mảng thành 2 mảng con (1 đã
		sắp xếp, 1 không). <br />
		- Vòng lặp bên ngoài để duyệt qua mảng. <br />
		- Vòng lặp bên trong duyệt qua mảng con chưa sắp xếp để tìm phần
		tử min (max). <br />
		- Nếu min (max) trong mảng con đó nhỏ (lớn) hơn phần tử cuối mảng
		đã sắp xếp thì swap 2 phần từ đó.
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8">
	<img
		src="/assets/images/selection-sort.jpg"
		alt="Selection sort photo"
		width="100%"
	/>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
</div>`,
};

const insertionSortDesc = {
	title: 'INSERTION SORT ALGORITHM',
	sortNotes: [
		{
			title: 'Current Item',
			color: CURRENT_ITEM_COLOR,
		},
	],
	htmlContent: `<h2 class="sub-title">
	1) Độ phức tạp thuật toán (Algorithm Complexity BigO):
</h2>
<br />
<div class="sub-content">
	<u>- Độ phức tạp thời gian (Time Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">
		Best case: <b>O(n)</b>
		<br />
		Average case: <b>O(n<sup>2</sup>)</b>
		<br />
		Worst case: <b>O(n<sup>2</sup>)</b>
		<br />
	</div>

	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O(1)</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>i</b>: chỉ số index vòng lặp ngoài (1 -> n). <br />
		- <b>j</b>: chỉ số vòng lặp trong (i - 1 -> 0) <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- Sử dụng 2 vòng lặp lồng nhau để chia mảng thành 2 mảng con (1 đã
		sắp xếp, 1 không). <br />
		- Vòng lặp bên ngoài để duyệt qua mảng. <br />
		- Vòng lặp bên trong để chọn vị trí chèn thích hợp cho phần tử i
		(insertion).
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8">
	<img
		src="/assets/images/insertion-sort.jpg"
		alt="Insertion sort photo"
		width="100%"
	/>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Không nên dùng cho mảng kích thước lớn. <br />
	- Chỉ nên sử dụng khi mảng gần như đã sắp xếp như bảng Highscore
	list...
</div>`,
};
