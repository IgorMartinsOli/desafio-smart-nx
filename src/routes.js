const express = require('express');
const router = express.Router();
const PostController = require('./controllers/PostController');
const ComentController = require('./controllers/ComentController');

router.get('/posts', PostController.index)
router.get('/post/:postId', PostController.findByPk)
router.post('/post/new', PostController.store)
router.delete('/post/:postId', PostController.delete)

router.get('/posts/:postId/coment', ComentController.index)
router.post('/posts/:postId/coment', ComentController.store)
router.delete('/posts/:postId/coment/:comentId', ComentController.delete)
router.post('/posts/:postId/', ComentController.edit)
module.exports = router;