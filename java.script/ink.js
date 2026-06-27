for (let i = 1; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

let count = 3;
const countdown = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log("Ended");
  }
}, 1000);
