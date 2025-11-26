import { insert as insertIntoLocalStorage } from "./localStorageService.js";
import { readAll as readAllFromLocalStorage } from "./localStorageService.js";
import { removeTransaction as removeFromLocalStorage } from "./localStorageService.js";

export const dataService = {
      /**
       *  Insert into database
       *  @param {{ description, amount }} transactionInput  The transaction data to be inserted
       */
      insert(transactionInput) {
            insertIntoLocalStorage(transactionInput);
      },

      /**
       * Read all from database
       */
      readAll() {
            return readAllFromLocalStorage();
      },


      /**
       * Remove a transaction by id
       * @param {string} id  The id of the transaction to be removed
       */
      remove(id) {
            removeFromLocalStorage(id);
      }
}
