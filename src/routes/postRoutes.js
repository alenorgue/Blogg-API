
import express from 'express';
import postControllers from '../controllers/postControllers.js';

const router = express.Router();

router.post('/', postControllers.createPost);
router.get('/', postControllers.getAllPosts);
router.get('/:id', postControllers.getPostById);
router.put('/:id', postControllers.updatePost);
router.delete('/:id', postControllers.deletePost);

export default router;