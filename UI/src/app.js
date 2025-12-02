import { formatCurrency } from "./utils/helpers.js";
import { createTransactionElement } from "./components/transaction.js";
import { dataService as dataProvider } from "./providers/dataProvider.js";
import { updateTransaction } from "./providers/internals/dbProviderUtils.js";


// Entry point
const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionFormEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");

transactionFormEl.addEventListener("submit", addTransaction)

refreshExpenseTracker();

// Functions
function addTransaction(e) {
      e.preventDefault();

      dataProvider.insert({
            description: descriptionEl.value.trim(),
            amount: parseFloat(amountEl.value)
      });
      refreshExpenseTracker();
      transactionFormEl.reset();
}

function updateTransactionList() {
      transactionListEl.innerHTML = "";

      const transactionsPromise = dataProvider.readAll();
      transactionsPromise.then(transactions => {
            const sortedTransactions = [...transactions].reverse();
            sortedTransactions.forEach(uiTransaction => {
                  const transactionEl = createTransactionElement(uiTransaction, removeTransaction, editTransaction);
                  transactionListEl.appendChild(transactionEl);
            });
      });
}

function updateSummary() {

      const transactionsPromise = dataProvider.readAll();

      transactionsPromise.then(transactions => {
            const balance = transactions.reduce(
                  (acc, transaction) => acc + transaction.amount, 0
            );

            const income = transactions
                  .filter(transaction => transaction.amount > 0)
                  .reduce((acc, transaction) => acc + transaction.amount, 0);

            const expense = transactions
                  .filter(transaction => transaction.amount < 0)
                  .reduce((acc, transaction) => acc + transaction.amount, 0);

            balanceEl.textContent = formatCurrency(balance);
            incomeAmountEl.textContent = formatCurrency(income);
            expenseAmountEl.textContent = formatCurrency((expense));
      });
}

function removeTransaction(id) {
      dataProvider.remove(id);
      refreshExpenseTracker();
}

function editTransaction(id) {

      const inputData = {
            description: descriptionEl.value.trim(),
            amount: parseFloat(amountEl.value)
      }

      if (isNaN(inputData.amount) || inputData.description === "") {
            alert("Please provide valid description and amount. Values cannot be empty.");
            return;
      }

      const dataIsComing = dataProvider.update(id, inputData);
      dataIsComing.then((obj) => {
            console.log(obj);
            refreshExpenseTracker();
      })
}



function refreshExpenseTracker() {
      updateSummary();
      updateTransactionList();
}


