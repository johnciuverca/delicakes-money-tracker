import { formatCurrency } from "../utils/helpers.js";
import { dataService } from "../services/dataService.js";

/**
 * Creates a transaction HTML element
 * @param {{ description, amount }} transaction The transaction data
 * @param {Function} onRemove Callback function to call when the transaction is removed
 * @returns {HTMLElement} The transaction HTML element
 */
export function createTransactionElement(transaction, onRemove) {
      const li = document.createElement("li");
      li.classList.add("transaction");
      li.classList.add(transaction.amount > 0 ? "income" : "expense");

      const transactionDescSpan = document.createElement("span");
      transactionDescSpan.textContent = transaction.description;

      const transactionAmountSpan = document.createElement("span");
      transactionAmountSpan.textContent = formatCurrency(transaction.amount);

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "x";
      deleteBtn.onclick = () => removeTransaction(transaction.id, onRemove);

      const amountContainer = document.createElement("span");
      amountContainer.appendChild(transactionAmountSpan);
      amountContainer.appendChild(deleteBtn);

      li.appendChild(transactionDescSpan);
      li.appendChild(amountContainer);

      return li;
}

function removeTransaction(id, onRemove) {
      dataService.remove(id);
      onRemove();
}


