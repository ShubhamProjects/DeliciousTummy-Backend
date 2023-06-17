const express = require('express');
const {
	getAllRestaurant,
	getSingleRestaurant,
} = require('../controllers/restaurantControllers');
const router = express.Router();

router.route('/').get(getAllRestaurant);
router.route('/:id').get(getSingleRestaurant);

module.exports = router;
