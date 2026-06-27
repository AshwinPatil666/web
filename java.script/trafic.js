function Red() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("REd");
      resolve();
    }, 2000);
  });
}
function orange(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Orange");

      resolve();
    }, 2000);
  });
}
function green(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Green");
      resolve();
    }, 2000);
  });
}
Red()
  .then(() => orange())
  .then(() => green())
  .then(() => {
    console.log("TArfic khul gaya bhaago !");
  });
