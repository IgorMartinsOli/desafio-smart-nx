const express = require('express');
const router = express.Router();
const PostController = require('./controllers/PostController');
const ComentController = require('./controllers/ComentController');

router.get('/posts', PostController.index)
router.post('/posts', PostController.store)

router.post('posts/:postId/coment', ComentController.store)
module.exports = router;