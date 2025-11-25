import React, { useEffect } from 'react';

// STEP 1: Basic Static React Component
// This is your exact HTML structure converted to JSX
// No functionality yet - just learning JSX syntax

function App() {

    const [description, setDescription] = useState('');
    // const description = 'Sample Description';

    console.log('Description is: ', description);

    useEffect(() => {
        // This is where you would add any side effects or data fetching
    }, [description]);

    return (
        <div className="container">
            <h1>Expense Tracker</h1>

            <div className="balance-container">
                <h2>Your Balance</h2>
                <h3 id="balance">$0.00</h3>
                <div className="summary">
                    <div className="income">
                        <h3>Income</h3>
                        <p id="income-amount">$0.00</p>
                    </div>
                    <div className="expenses">
                        <h3>Expenses</h3>
                        <p id="expense-amount">$0.00</p>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="transaction-container">
                    <h2>Transactions</h2>
                    <ul id="transaction-list">
                        {/* Static example transactions for now */}
                        <li className="transaction income">
                            <span>Salary</span>
                            <span>
                                $3,000.00
                                <button className="delete-btn">×</button>
                            </span>
                        </li>
                        <li className="transaction expense">
                            <span>Groceries</span>
                            <span>
                                -$150.00
                                <button className="delete-btn">×</button>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="form-container">
                    <h2>Add Transaction</h2>
                    <form id="transaction-form">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" placeholder="Enter description..." required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" id="amount" placeholder="Enter amount..." required />
                            <small>Use negative (-) for expenses</small>
                        </div>
                        <button type="submit">Add Transaction</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;