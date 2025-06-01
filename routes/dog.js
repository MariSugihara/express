var express = require('express');
var router = express.Router();
const axios = require('axios'); // requestの代わりにaxiosを使用

router.get('/', async (req, res) => {
		try {
				const response = await axios.get('https://dog.ceo/api/breeds/image/random');
				res.json(response.data);
		} catch (error) {
				console.error("Error fetching dog image:", error);
				res.status(500).json({ error: "Failed to retrieve dog image" });
		}
});

module.exports = router;
