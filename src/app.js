import { formatCurrency } from "./utils/helpers.js";
import { createTransactionElement } from "./components/transaction.js";
import { dataService } from "./services/dataService.js";


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

    dataService.insert({
        description: descriptionEl.value.trim(),
        amount: parseFloat(amountEl.value)
    });
    refreshExpenseTracker();
    transactionFormEl.reset();
}

function updateTransactionList() {
    transactionListEl.innerHTML = "";

    const transactions = dataService.readAll();

    const sortedTransactions = [...transactions].reverse();
    sortedTransactions.forEach(uiTransaction => {
        const transactionEl = createTransactionElement(uiTransaction, refreshExpenseTracker);
        transactionListEl.appendChild(transactionEl);
    });
}

function updateSummary() {

    const transactions = dataService.readAll();

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
}

export function refreshExpenseTracker() {
    updateSummary();
    updateTransactionList();
}


