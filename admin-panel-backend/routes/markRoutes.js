import express from 'express';
import { addMarks, getMarksByStudent } from '../controllers/markController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, addMarks);
router.get('/:studentId', authenticateToken, getMarksByStudent);

export default router;
