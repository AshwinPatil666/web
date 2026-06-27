function Atm(balance) {
  return new Promise((resolve, reject) => {
    if (balance <= 1000) {
      resolve("Ammount withdrawl successfully!");
    } else {
      reject("Account balance is low you cant withdraw money! ");
    }
  });
}

Atm(4000)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
