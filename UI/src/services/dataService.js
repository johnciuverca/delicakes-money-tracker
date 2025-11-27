import { deleteTransaction, fetchAllTransactions, insertTransaction } from "./dataApiService.js";
import { insert as insertIntoLocalStorage } from "./localStorageService.js";
import { readAll as readAllFromLocalStorage } from "./localStorageService.js";
import { removeTransaction as removeFromLocalStorage } from "./localStorageService.js";

const localStorageServiceAdapter = {
      insert(x) {
            return Promise.resolve(insertIntoLocalStorage(x));
      },
      readAll() {
            return Promise.resolve(readAllFromLocalStorage());
      },
      remove(id) {
            return Promise.resolve(removeFromLocalStorage(id));
      }
};

const dataApiServiceAdapter = {
      insert(x) {
            return insertTransaction(x);
      },
      readAll() {
            return fetchAllTransactions();
      },
      remove(id) {
            return deleteTransaction(id);
      }
};

const dataServiceImpl = dataApiServiceAdapter;

export const dataService = {
      /**
       *  Insert into database
       * @param {{ description, amount }} transactionInput  The transaction data to be inserted
       * @returns {Promise<void>}
       */
      insert(transactionInput) {
            return dataServiceImpl.insert(transactionInput);
      },

      /**
       * Read all from database
       * @returns {Promise<Array>}  Array of all transactions
       */
      readAll() {
            return dataServiceImpl.readAll();
      },

      /**
       * Remove a transaction by id
       * @param {string} id  The id of the transaction to be removed
       * @returns {Promise<void >}
       */
      remove(id) {
            return dataServiceImpl.remove(id);

      }
}


