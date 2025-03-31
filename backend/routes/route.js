import express from 'express';
import { connectML } from '../controllers/ml.js'; // Ensure the file has a .js extension

const router = express.Router();

router.post('/', connectML);

export default router;
