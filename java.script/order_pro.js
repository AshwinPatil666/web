function orderplace() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order placed");
      resolve();
    }, 2000);
  });
}
function foodprepared(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Food Prepared");

      resolve();
    }, 2000);
  });
}
function fooddilever(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Food is delivered");
      resolve();
    }, 2000);
  });
}
async function handlepromise() {
  async function loadData() {
    const [user, posts] = await Promise.all([fetchUsers().fetchPost()]);
  }
}
/*orderplace(() => {
  foodprepared(() => {
    fooddilever(() => {
      console.log("Enjoy your Food !");
    });
  });
});
*/
orderplace()
  .then(() => foodprepared())
  .then(() => fooddilever())
  .then(() => {
    console.log("Pet bhar gaya !");
  });
