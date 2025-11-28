import { response, Router } from 'express';

const router = Router();

// In-memory storage
let transactions = [];
let nextId = 1;

// GET all transactions
router.get('/', (req, res) => {
      res.json(transactions);
      console.log("get " + JSON.stringify(transactions));
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
      console.log("post " + JSON.stringify(transactions));
});

//UPDATE a transaction by ID
router.put('/:id', (req, res) => {
      const id = req.params.id;
      const target = transactions.find((transaction) => {
            return transaction.id == id;
      });
      if (target !== undefined) {
            target.description = "x";
            target.amout = 0;
            res.status(200);
      } else {
            res.status(404);
      }
      console.log("put " + JSON.stringify(transactions));
});

// DELETE a transaction by ID
router.delete('/', (req, res) => {
      const id = req.body.id;
      const elementIndex = transactions.findIndex(x => x.id === id);
      transactions.splice(elementIndex, 1);
      res.status(200);
      console.log("delete: " + JSON.stringify(transactions));
});



export default router;
