const express = require('express');
const router = express.Router();
const PostController = require('./controllers/PostController');

router.post('/posts', PostController.store)

module.exports = router;