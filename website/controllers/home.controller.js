exports.getHome = (req, res, next) => {
	try {
		res.render('index');
	} catch (error) {}
};
