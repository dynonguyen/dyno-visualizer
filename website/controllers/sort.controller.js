exports.getSortPage = (req, res, next) => {
	try {
		return res.render('sort-visualizer', {
			title: 'Dyno - Sorting Visualizer',
			current: 'algorithm',
			sub: 'sort',
		});
	} catch (error) {
		console.error('GET SORT PAGE ERROR: ', error);
	}
};

exports.getSortRealtimePage = (req, res, next) => {
	try {
		return res.render('sort-realtime', {
			title: 'Dyno - Sorting Realtime',
			current: 'algorithm',
			sub: 'sort-realtime',
		});
	} catch (error) {}
};
