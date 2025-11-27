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


