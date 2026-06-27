function orderplace(cb) {
  setTimeout(() => {
    console.log("Order placed");
    cb();
  }, 2000);
}
function foodprepared(cb) {
  setTimeout(() => {
    console.log("Food Prepared");

    cb();
  }, 2000);
}
function fooddilever(cb) {
  setTimeout(() => {
    console.log("Food is delivered");
    cb();
  }, 2000);
}

orderplace(() => {
  foodprepared(() => {
    fooddilever(() => {
      console.log("Enjoy your Food !");
    });
  });
});
