import express from 'express';
import { login, createAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', login);
router.post('/create', createAdmin);

export default router;