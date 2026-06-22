function createBankaccount(initialbalance) {
  let balance = initialbalance;
  return {
    deposit(value) {
      balance += value;
      console.log(`Deposite: $(value),current balance:$(balance)`);
    },
    withdraw(value) {
      balance -= value;
      console.log(`Withraw:$(value),current balance:$(balance)`);
    },
    checkbalance() {
      console.log(`current Balance:$(balance)`);
    },
  };
}

let user = createBankaccount(100);
user.deposit(50);
user.withdraw(150);
user.checkbalance();
console.log(user.balance);
