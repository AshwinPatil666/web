/*function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Resolve ho gaya ");
    }, 3000);
  });
}
const getData2 = new Promise((resolve) => {
  setTimeout(() => {}, 3000);
});
//console.log(getData());
async function handlePromise() {
  console.log("Hello");
  const val = await getData();
  console.log(val);
  console.log("World");

  const val2 = await getData2();
  console.log(val2);
  console.log("World2");
}
handlePromise();*/
/*console.log("Random Task");
console.log("Random Task");
console.log("Random Task");
console.log("Random Task");
console.log("Random Task");
// getData().then{(msg)=>{
// console.log(msg);

// });
*/
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise Resolve ho gaya ");
      // 1. ADDED: Actually resolve the promise and pass a value
      resolve("Data 1 fetched!");
    }, 3000);
  });
}

const getData2 = new Promise((resolve) => {
  setTimeout(() => {
    // 2. ADDED: Resolve this promise too
    resolve("Data 2 fetched!");
  }, 3000);
});

async function handlePromise() {
  console.log("Hello");

  const val = await getData();
  console.log(val);
  console.log("World");

  // 3. FIXED: Removed the parentheses because getData2 is just a variable holding a promise, not a function.
  const val2 = await getData2;
  console.log(val2);
  console.log("World2");
}

handlePromise();
