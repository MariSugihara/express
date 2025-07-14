var express = require('express');
var router = express.Router();
const axios = require('axios'); // requestの代わりにaxiosを使用
const cors = require('cors'); // corsミドルウェアを追加

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching cat image:", error);
        res.status(500).json({ error: "Failed to retrieve cat image" });
    }
});

module.exports = router;
