import { Router } from 'express';

const router = Router();

// In-memory storage
let transactions = [];
let nextId = 1;

// GET all transactions
router.get('/', (req, res) => {
      res.json(transactions);
});

// POST a new transaction
router.post('/', (req, res) => {
      const newTransaction = {
            id: nextId++,
            description: req.body.description,
            amount: req.body.amount
      };
      transactions.push(newTransaction);
      res.status(201).json(newTransaction);
});

// DELETE a transaction by ID
router.delete('/', (req, res) => {
      const id = req.body.id;
      const elementIndex = transactions.findIndex(x => x.id === id);
      transactions.splice(elementIndex, 1);
      res.status(200);
});

export default router;
