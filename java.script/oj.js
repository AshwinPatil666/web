function wait() {
  //let time = new Date().getTime();
  // while (new data().getime() < time + 5000)
  /*setTimeout(() => {
    console.log("timeout encounter");
  }, 0);
}*/
  var id = setInterval(() => {
    console.log("2 sec passed");
  }, 2000);
  setTimeout(() => {
    clearInterval(id);
    console.log("code Stopped");
    k8q;
  }, 5000);
}
console.log("hello");
wait();
console.log("world");
/*console.log("rendom task");
for (let i = 0; i < 10; i++) {
  console.log(i);
*/
