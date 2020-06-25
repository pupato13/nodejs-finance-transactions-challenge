import Transaction from '../models/Transaction';
import Balance from '../models/Balance';

interface Request {
  transactions: Transaction[];
}

class CalculateBalanceService {
  public execute(transactions: Transaction[]): Balance {
    const balance = new Balance();

    const incomeTransactions = transactions.filter(
      transaction => transaction.type === 'income',
    );
    const outcomeTransactions = transactions.filter(
      transaction => transaction.type === 'outcome',
    );

    incomeTransactions.map(transaction => balance.setIncome(transaction.value));
    outcomeTransactions.map(transaction =>
      balance.setOutcome(transaction.value),
    );

    balance.calculateBalance();

    return balance;
  }
}

export default CalculateBalanceService;
