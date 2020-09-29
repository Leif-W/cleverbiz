const express = require('express')
const plaid = require('plaid')
const app = express()

app.use(express.json());

const port = 3001
var accounts;
    const plaidClient = new plaid.Client({
        clientID:'5eeaf490f567db0012dbe17f',
        secret: '9fbba8f158f213ab2ceca8d83f4752',
        env: plaid.environments.sandbox,
      });
      // Pull real-time balance information for each account associated
      // with the Item
      plaidClient.getBalance('access-sandbox-4b2fc7fd-de56-4b2e-8324-99a1a39b5b4b', (err, result) => {
          // Handle err
          accounts = result.accounts;
          console.log(accounts);
        });
//using 
app.get('/', (req, res) => {
    

  res.send(accounts)
})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






