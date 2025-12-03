import { Router } from 'express';
import {
      getAllTransactions,
      addTransaction,
      updateTransaction,
      deleteTransaction
} from './data/fileSystemStorage.js';

const router = Router();

// GET all transactions
router.get('/', (req, res) => {
      getAllTransactions().then((data) => {
            res.json(data);
            console.log(getCurrentTime() + " get " + JSON.stringify(data));
      }).catch(() => {
            console.error('Error getting transactions:', error);
            res.status(500).json({ error: "Faile to retrieve transactions" });
      });
});

// POST a new transaction
router.post('/', async (req, res) => {
      try {
            const newTransaction = await addTransaction(req.body.description, req.body.amount);
            res.status(201).json(newTransaction);
            console.log(getCurrentTime() + " post " + JSON.stringify(newTransaction));
      } catch (error) {
            console.error('Error creating transaction:', error);
            res.status(500).json({ error: 'Failed to create transaction' });
      }
});

//UPDATE a transaction by ID
router.put('/:id', async (req, res) => {
      try {
            const id = req.params.id;
            const description = req.body.description;
            const amount = req.body.amount;

            const success = await updateTransaction(id, description, amount);
            if (success) {
                  res.status(200).json({});
                  console.log(getCurrentTime() + " put - updated transaction " + id);
            } else {
                  res.status(404).json({});
            }
      } catch (error) {
            console.error('Error updating transaction:', error);
            res.status(500).json({ error: 'Failed to update transaction' });
      }
});

// DELETE a transaction by ID
router.delete('/', async (req, res) => {
      try {
            const id = req.body.id;
            const success = await deleteTransaction(id);
            if (success) {
                  res.status(200).json({});
                  console.log(getCurrentTime() + " delete: transaction " + id);
            } else {
                  res.status(404).json({});
            }
      } catch (error) {
            console.error('Error deleting transaction:', error);
            res.status(500).json({ error: 'Failed to delete transaction' });
      }
});

function getCurrentTime() {
      var now = new Date();
      var pretty = [
            now.getFullYear(),
            '-',
            now.getMonth() + 1,
            '-',
            now.getDate(),
            ' ',
            now.getHours(),
            ':',
            now.getMinutes(),
            ':',
            now.getSeconds()
      ].join('');
      return pretty;
}

export default router;
