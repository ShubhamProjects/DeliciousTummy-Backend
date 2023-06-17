const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/deliciousTummy', require('./routes/restaurantRoute'));

app.listen(port, () => {
	console.log(`Port running at ${port}`);
});
