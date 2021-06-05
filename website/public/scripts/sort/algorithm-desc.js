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
		src="/assets/images/sort/basic-bubble-sort.jpg"
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
		src="/assets/images/sort/enhanced-bubble-sort.jpg"
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
		src="/assets/images/sort/selection-sort.jpg"
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
		src="/assets/images/sort/insertion-sort.jpg"
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

const quickSortDesc = {
	title: '⚡ QUICK SORT ALGORITHM 🐢',
	sortNotes: [
		{
			title: 'Left Item',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'Right Item',
			color: SECOND_ITEM_COLOR,
		},
		{
			title: 'Pivot Item',
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
		Best case: <b>O( n log(n) )</b>
		<br />
		Average case: <b>O( n log(n) )</b>
		<br />
		Worst case (mảng đã sắp xếp hay pivot phần tử lớn nhất (nhỏ nhất) của mảng): <b>O(n<sup>2</sup>)</b>
		<br />
	</div>

	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O( log(n) )</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>low</b>: index phần tử bắt đầu duyệt. <br />
		- <b>high</b>: index phần tử cuối cùng cần duyệt. <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
	- Lựa chọn một phần tử vách ngăn (pivot).<br/>
	- Xây dựng một hàm với nhiệm vụ chia mảng thành 2 mảng con sao cho: <br/>
	&nbsp;	+ Mảng bên trái bao gồm các phần tử nhỏ hơn pivot. <br/> 
	&nbsp;	+ Mảng bên phải bao gồm các phần tử lớn hơn pivot. <br/> 
	- Lặp lại 2 bước trên với nửa mảng bên trái và nửa mảng bên phải.<br/>
	- Kết thúc khi mảng chỉ còn 1 phần tử (không thể chia mảng ra nữa).<br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16">3.1 - Hàm tìm vách ngăn pivot (partition function):</h3>
	<img
		src="/assets/images/sort/partition-quick-sort.jpg"
		alt="Partition Function photo"
		width="100%"
	/>
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Hàm quick sort:</h3>
	<img
	src="/assets/images/sort/quick-sort.jpg"
	alt="Quick sort photo"
	width="100%"
/>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Nên dùng cho mảng kích thước lớn. <br />
	- Không nên dùng khi mảng đã sắp xếp.. <br/>
	- <b>Nhược điểm:</b><br/>
	  &nbsp;	+ Thuật toán bị chậm khi chọn pivot không tốt (nhân phẩm kém 😂🙂). <br />
		&nbsp;	+ Tốt thêm bộ nhớ để lưu trữ đệ quy. <br/>
	- <br>Ưu điểm:</br> Nếu pivot là phần tử gần trung bình cộng của các phần tử mảng thì thuật toán chạy rất nhanh. <br/>S
</div>`,
};

const mergeSortDesc = {
	title: 'MERGE SORT ALGORITHM',
	sortNotes: [
		{
			title: 'Middle Item',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'Merge Index',
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
	<div class="p-l-8 m-tb-8">
		Best case: <b>O( n log(n) )</b>
		<br />
		Average case: <b>O( n log(n) )</b>
		<br />
		Worst case: <b>O( n log(n) )</b>
		<br />
	</div>

	<u>- Độ phức tạp bộ nhớ (Menory Complexity):</u>
	<br />
	<div class="p-l-8 m-tb-8">Worst case: <b>O(n)</b></div>
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<br />
<div class="sub-content">
	<u>- Đầu vào:</u>
	<br />
	<div class="p-l-8 m-tb-8">
		- <b>arr</b>: mảng cần sắp xếp. <br />
		- <b>n</b>: số lượng phần tử của mảng. <br />
		- <b>l</b>: index phần tử bắt đầu duyệt. <br />
		- <b>r</b>: index phần tử cuối cùng cần duyệt. <br />
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
	- Tách mảng ban đầu thành 2 mảng dựa trên phần tử middle: (n - 1)/2.<br/>
	- Cứ thế đệ quy, tách đến khi các mảng còn 1 phần tử. <br/>
	- Gộp các mảng trên lại, vừa gộp vừa sắp xếp.<br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16">3.1 - Minh hoạ ý tưởng:</h3>
	<img
		src="/assets/images/sort/merge-sort-illustration.jpg"
		alt="Merge sort illustration photo"
		width="100%"
		heigh="650px"
	/>
	<p class="t-center m-tb-12" style="font-size:16px">Nguồn: https://www.programiz.com/</p>
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Hàm merge sort:</h3>
	<img
	src="/assets/images/sort/merge-sort.jpg"
	alt="Merge sort photo"
	width="100%"
/>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Nên dùng cho mảng kích thước lớn. <br />
	- Thuật toán khá ổn định trong mọi trường hợp.<br/>
	- <b>Nhược điểm:</b><br/>
	  &nbsp;	+ Tốn khá nhiều không gian phụ để gộp mảng <br />
</div>`,
};

const heapSortDesc = {
	title: 'HEAP SORT ALGORITHM',
	sortNotes: [
		{
			title: 'Parent Node',
			color: '#F24A0E',
		},
		{
			title: 'Swap Item 1',
			color: CURRENT_ITEM_COLOR,
		},
		{
			title: 'Swap Item 2',
			color: SECOND_ITEM_COLOR,
		},
		{
			title: 'Sorted Item',
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
		Best case: <b>O( n log(n) )</b>
		<br />
		Average case: <b>O( n log(n) )</b>
		<br />
		Worst case: <b>O( n log(n) )</b>
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
	</div>
	<u>- Ý tưởng:</u>
	<br />
	<div class="p-l-8 m-tb-8">
	- Sử dụng tính chất của cấu trúc dữ liệu heap (max heap, min heap).<br/>
	- Đầu tiên xây dựng một max-heap (min-heap).<br/>
	- Hoán vị phần tử root của heap với phần tử cuối.<br/>
	- Xoá phần tử cuối ra khỏi heap.<br/>
	- Xây dựng lại heap tại phần tử root.<br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16">3.1 - Minh hoạ ý tưởng:</h3>
	<span>Mọi người xem chi tiết cấu trúc "Heap" là gì và cách xây dựng heap</span> <a href="/structures/heap" style="color:#6EC4E6">tại đây</a> nhé
	<img
		src="/assets/images/sort/max-heap.jpg"
		alt="Max heap illustration photo"
		width="100%"
		heigh="650px"
	/>
	<img
		src="/assets/images/sort/rebuild-max-heap.jpg"
		alt="Max heap illustration photo"
		width="100%"
		heigh="650px"
	/>
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Hàm heap sort:</h3>
	<img
	src="/assets/images/sort/max-heapify.jpg"
	alt="Max heapify photo"
	width="100%"
/>
	<img
	src="/assets/images/sort/heap-sort.jpg"
	alt="Heap sort photo"
	width="100%"
/>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Nên dùng cho mảng kích thước lớn. <br />
	- Thuật toán khá ổn định trong mọi trường hợp.<br/>
</div>`,
};

const stupidSortDesc = {
	title: '🍀 STUPID SORT ALGORITHM 🐢',
	sortNotes: [
		{
			title: 'Current test item',
			color: CURRENT_ITEM_COLOR,
		},
	],
	htmlContent: `<h2 class="sub-title">
	1) Độ phức tạp thuật toán (Algorithm Complexity BigO):
</h2>
<div class="sub-content p-tb-8">
	- O(∞) hay O(nhân phẩm)
</div>
<h2 class="sub-title">2) Ý tưởng thuật toán (Algorithm Idea):</h2>
<div class="sub-content">
	<div class="p-l-8 m-tb-8">
	- Xáo trộn mảng, kiểm tra mảng vừa xáo.<br/>
	- Nếu đã xếp thì dừng, còn không thì lặp lại 🙂.<br/>
	</div>
</div>
<h2 class="sub-title">3) Triển khai (Implement Algorithm):</h2>
<div class="sub-content m-t-8 m-b-8">
	<h3 class="m-l-16 m-t-16 m-b-8">3.2 - Hàm stupid sort:</h3>
	<img
	src="/assets/images/sort/stupid-sort.jpg"
	alt="Stupid sort photo"
	width="100%"
/>
</div>
<h2 class="sub-title">4) Ghi chú (Note):</h2>
<div class="sub-content">
	- Dùng để kiểm tra nhân phẩm người dùng. 🐭<br />
	- Chán quá thì dùng cho vui chứ không có ý nghĩa gì. 😜<br/>
</div>`,
};
