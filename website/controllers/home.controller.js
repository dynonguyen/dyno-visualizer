exports.getHome = (req, res, next) => {
	try {
		return res.render('index', {
			current: 'home',
		});
	} catch (error) {
		console.error('GET HOME ERROR: ', error);
	}
};
