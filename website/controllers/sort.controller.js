exports.getSortPage = (req, res, next) => {
	try {
		return res.render('sort', {
			title: 'Dyno - Sorting Algorithms',
			current: 'algorithm',
			sub: 'sort',
		});
	} catch (error) {
		console.error('GET SORT PAGE ERROR: ', error);
	}
};
