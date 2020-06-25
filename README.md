# NodeJS Finance Transactions Challenge

## :dart: The Challenge

This will be an application to store incoming and outgoing financial transactions, which should allow the registration and listing of these transactions including the balance of your account.

## Routes

- **`POST /transactions`**: The route must receive `title`, `value`, and `type` inside of the request body, `type` is the type of the transaction, which must be `income` for deposits and `outcome` for withdrawals. When registering a new transaction, it must be stored inside an object with the following format:

```json
{
  "id": "uuid",
  "title": "Salary",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: The route that lists all transactions, including the balance of your account (`income`, `outcome` and `total`). That route must return an object as below:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salary",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Rent",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Gamer chair",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

## Tests

For this challenge we have the following tests:

- **`should be able to create a new transaction`**: In order for this test to pass, your application must allow a transaction to be created, and return a JSON with the created transaction.

- **`should be able to list the transactions`**: In order for this test to pass, your application must return an object with all transactions with the balance of your account containing income, outcome and total of all transactions that have been created.

- **`should not be able to create outcome transaction without a valid balance`**: In order for this test to pass, your application should not allow that a transaction of the type `outcome` exceeds the total balance, returning a HTTP Response with status 400 and an error message with the following format:

# :rocket: Releasing the Kraken

## Requirements

You will only need Node.js and a node global package, Yarn, installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node -v
    v12.18.0

    $ npm -v
    6.13.7

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

## :computer: Install

    $ git clone https://github.com/pupato13/nodejs-finance-transactions-challenge.git
    $ cd nodejs-finance-transactions-challenge
    $ yarn install

## :checkered_flag: Running the project

    $ yarn dev

Access: [localhost:3333](http://localhost:3333/transactions)

PS: To run all routes, you will need to install an API testing tool. Below are two that I use to work with:

[Insomnia](https://insomnia.rest/)

[Postman](https://www.postman.com/)

## :white_check_mark: Running tests

    $ yarn test
