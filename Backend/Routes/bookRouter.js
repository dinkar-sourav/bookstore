import express from 'express';
import { getBook } from '../Controllers/bookController.js';

const router = express.Router();

router.get('/',getBook);
export default router;
