let user = {
  name: "neha",
  age: 98,
  dog: function () {
    return "Bark";
  },
};

user.subject = "Dsa";
user["grade"] = 80;

console.log(user);

console.log(user.dog());

function saygood() {
  console.log("Goodbuy!");
}

function execution(action) {
  console.log("execution...");

  action();
}
execution(saygood);

function even(n) {
  if (n % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(even(10));
