const p = new Promise((res, rej) => {
  let data = "Data recived";
  let success = true;

  if (success) {
    res(data);
  } else {
    rej();
  }
});

p.then((data) => {
  console.log(data);
  return 2;
})
  .then((num) => {
    console.log(num * 2);
    return num * 2;
  })

  .then((num) => {
    console.log(num * 2);
  })
  .catch(() => {
    console.log("Data is not recived");
  })

  .finally(() => {
    console.log("function Ended");
  });
