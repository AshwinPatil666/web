function checkEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve("Number is Even");
    } else {
      reject("Number is odd");
    }
  });
}
checkEven(6)
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
