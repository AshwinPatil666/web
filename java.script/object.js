let user = {
  name: "jay",
  age: 25,
  branch: "cs",
  isStudent: true,
  "": "empty String",
};

console.log(user.name);
console.log(user.branch);
console.log(user["age"]);
// there are ways to print the object first for simple id and second for all ids .because when id start with space we cant use . for printing the object

let message = greet("Ankit");
console.log(message);

function greet(name) {
  return `hello ,${name}!`;
}

const expression = function (name) {
  return `hello,${name}`;
};
console.log(expression("Adsh"));

const arrowfunc = (name) => {
  return `hello,${name}!`;
};

console.log(arrowfunc("Ankit"));

function multiply(a, b) {
  return a * b;
}
function add(a, b) {
  return a + b;
}

let mu1 = multiply(5, 20);
console.log(mu1);

function sumofar(arr, n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    s += arr[i];
  }
  return s;
}

let ar = sumofar(arr);
