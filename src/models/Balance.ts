class Balance {
  income: number;

  outcome: number;

  total: number;

  constructor() {
    this.income = 0;
    this.outcome = 0;
    this.total = 0;
  }

  setIncome(income: number) {
    this.income += income;
  }

  setOutcome(outcome: number) {
    this.outcome += outcome;
  }

  calculateBalance() {
    this.total = this.income - this.outcome;
  }
}

export default Balance;
