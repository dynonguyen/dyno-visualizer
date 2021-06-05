/* 
    Đầu vào:
  - arr: mảng cần sắp xếp.
	- Stupid sort hay còn gọi là BogoSort, Permutation sort, slow sort
  
    Ý tưởng:
	- Xáo trộn mảng, kiểm tra mảng vừa xáo
	- Nếu đã xếp thì dừng, còn không thì lặp lại :">
*/

/* 
	Độ phức tạp (BigO): O(∞) nhân phẩm.
	Note:
	 - Dùng để kiểm tra nhân phẩm người dùng.
	 - Chán quá thì dùng cho vui chứ không có ý nghĩa gì.
	
*/

// Hàm kiểm tra mảng đã sắp xếp chưa?
function isSortedArr(arr = []) {
	for (let i = 0; i < arr.length - 1; ++i)
		if (arr[i] > arr[i + 1]) return false;

	return true;
}

// Hàm xáo trộn mảng
function shuffleArray(arr = []) {
	return arr.sort(() => Math.random() - 0.5);
}

// stupid sort
function stupidSort(arr = []) {
	while (!isSortedArr(arr)) shuffleArray(arr);
}

module.exports = stupidSort;
