export function fetchAllTransactions() {
      return fetch('http://localhost:3000/api/transactions')
            .then(response => {
                  if (!response.ok) {
                        throw new Error('Network response was not ok');
                  }
                  return response.json();
            });
}

export function insertTransaction(transactionInput) {
      return fetch('http://localhost:3000/api/transactions', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionInput)
      }).then(response => {
            if (!response.ok) {
                  throw new Error('Network response was not ok');
            }
            return response.json();
      });
}

export function updateTransaction(inputId) {
      console.log("updateTransaction3");
      return fetch(`http://localhost:3000/api/transactions/${inputId}`, {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
      }).then(response => {
            console.log("updateTransaction.then4");
            if (!response.ok) {
                  throw new Error('Network response was not ok');
            }
            return response.json();
      });
}

export function deleteTransaction(inputId) {
      return fetch(`http://localhost:3000/api/transactions/${inputId}`, {
            method: 'DELETE',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  id: inputId
            })
      }).then(response => {
            if (!response.ok) {
                  return false;
            }
            return true;
      });
}

