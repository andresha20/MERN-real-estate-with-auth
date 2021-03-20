import express from 'express';
import { getPublishedHouses, postPublishHouse, patchPublishedHouse, deletePublishedHouse, likePost } from '../Controllers/controllers.js';
import auth from '../Middleware/auth.js';

const router = express.Router();

router.get('/', getPublishedHouses) // Route without middleware
router.post('/', auth, postPublishHouse) // Route with 'auth' middleware
router.patch('/:id', auth, patchPublishedHouse)
router.delete('/:id', auth, deletePublishedHouse)
router.patch('/:id/likePost', auth, likePost)

export default router;