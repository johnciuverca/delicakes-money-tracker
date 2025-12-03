import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// api/src/server.js
const __startupFile = fileURLToPath(import.meta.url);

// api/src
const __dirname = path.dirname(__startupFile);

// api/src/.storage
const __storageDir = path.join(__dirname, ".storage");

// Store transactions.json in the api/src directory (where server runs)
const STORAGE_FILE = path.join(__storageDir, '..', 'transactions.json');

// // Initialize storage file if it doesn't exist
// async function initializeStorage() {
//       try {
//             await fs.access(STORAGE_FILE);
//       } catch {
//             // File doesn't exist, create it with empty data
//             await fs.writeFile(STORAGE_FILE, JSON.stringify({ transactions: [], nextId: 1 }, null, 2));
//       }
// }

fs.access(STORAGE_FILE).catch(() => {
      const json = JSON.stringify({ transactions: [], nextId: 1 }, null, 2);
      fs.writeFile(STORAGE_FILE, json);
});

// Get all transactions
export function getAllTransactions() {
      const dataPromise = fs.readFile(STORAGE_FILE, 'utf8');
      return dataPromise.then((data) => {
            const result = JSON.parse(data);
            return result.transactions;
      })
}
// // Add a new transaction
export function addTransaction(description, amount) {

      //fetch data( promis of string)xx=
      // insert the data in a new transaction object x
      //    unwrap the dataPromise(string) x
      //    parse the data in obj({transactions: [], nextId: number });
      //           instantate new object(descriptio, amount, id)
      //            add the object to the array object
      //    stringify the object(String)
      //     write transaction 
      const dataPromise = fs.readFile(STORAGE_FILE, 'utf8');
      const writeResult = dataPromise.then((data) => {
            const result = JSON.parse(data);
            const newTransaction = {
                  id: data.nextId++,
                  description,
                  amount
            }
            result.transactions.push(newTransaction);
            const newState = JSON.stringify(result);
            fs.writeFile(STORAGE_FILE, newState);
      });
      return writeResult;
}
// export async function addTransaction(description, amount) {
//       const data = await readTransactions();
//       const newTransaction = {
//             id: data.nextId++,
//             description,
//             amount
//       };
//       data.transactions.push(newTransaction);
//       await writeTransactions(data);
//       return newTransaction;
// }

// // Update a transaction
// export async function updateTransaction(id, description, amount) {
//       const data = await readTransactions();
//       const target = data.transactions.find(transaction => transaction.id == id);

//       if (target) {
//             target.description = description;
//             target.amount = amount;
//             await writeTransactions(data);
//             return true;
//       }
//       return false;
// }

// // Delete a transaction
// export async function deleteTransaction(id) {
//       const data = await readTransactions();
//       const elementIndex = data.transactions.findIndex(x => x.id === id);

//       if (elementIndex !== -1) {
//             data.transactions.splice(elementIndex, 1);
//             await writeTransactions(data);
//             return true;
//       }
//       return false;
// }
