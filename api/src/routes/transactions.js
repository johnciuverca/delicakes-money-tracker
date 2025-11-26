import { Router } from 'express';

const router = Router();
import { getAllTransactions } from '../controllers/transactionController.js';

// GET all transactions
router.get('/', getAllTransactions);


export default router;
