import express from 'express';
import { createStudent, getStudents, updateStudent, deleteStudent } from '../controllers/studentController.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateToken, createStudent);
router.get('/', authenticateToken, getStudents);
router.put('/:id', authenticateToken, updateStudent);
router.delete('/:id', authenticateToken, deleteStudent);

export default router;