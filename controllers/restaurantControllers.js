const getAllRestaurant = (req, res) => {
	res.status(200).json({ message: 'All restaurant data' });
};

const getSingleRestaurant = (req, res) => {
	res.status(200).json({ message: 'Single restaurant data' });
};

module.exports = {
	getAllRestaurant,
	getSingleRestaurant,
};
