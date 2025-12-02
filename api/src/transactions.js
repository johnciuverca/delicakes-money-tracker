import { Router } from 'express';

const router = Router();

// In-memory storage
let transactions = [];
let nextId = 1;

// GET all transactionsx
router.get('/', (req, res) => {
      res.json(transactions);
      console.log(getCurrentTime() + " get " + JSON.stringify(transactions));
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
      console.log(getCurrentTime() + " post " + JSON.stringify(transactions));
});

//UPDATE a transaction by ID
router.put('/:id', (req, res) => {
      const id = req.params.id;
      const description = req.body.description;
      const amount = req.body.amount;
      const target = transactions.find((transaction) => {
            return transaction.id == id;
      });
      if (target !== undefined) {
            target.description = description;
            target.amount = amount;
            res.status(200).json({});
      } else {
            res.status(404).json({});
      }
      console.log(getCurrentTime() + " put " + JSON.stringify(transactions));
});

// DELETE a transaction by ID
router.delete('/', (req, res) => {
      const id = req.body.id;
      const elementIndex = transactions.findIndex(x => x.id === id);
      transactions.splice(elementIndex, 1);
      res.status(200).json({});
      console.log(getCurrentTime() + " delete: " + JSON.stringify(transactions));
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
