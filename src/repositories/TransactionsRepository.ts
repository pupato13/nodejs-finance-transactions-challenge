import Transaction from '../models/Transaction';
import Balance from '../models/Balance';
import CalculateBalanceService from '../services/CalculateBalanceService';

interface CreateTransactionDTO {
  title: string;

  value: number;

  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance;

  constructor() {
    this.transactions = [];

    this.balance = new Balance();
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const calculateBalanceService = new CalculateBalanceService();

    const balance = calculateBalanceService.execute(this.transactions);

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }

  public hasSufficientFunds(value: number): boolean {
    const balance = this.getBalance();

    return balance.total >= value;
  }
}

export default TransactionsRepository;
