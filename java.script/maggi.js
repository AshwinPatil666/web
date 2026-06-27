function meggielana(cb) {
  console.log("Maggie lene gaya ...");
  setTimeout(() => {
    console.log("Maggie aa gai...");
    cb(meggieKhana);
  }, 2000);
}
function meggieBanana(cb) {
  console.log("Maggie banane start ...");
  setTimeout(() => {
    console.log("Maggie ban gai...");

    cb();
  }, 2000);
}
function meggieKhana() {
  console.log("Maggie khane laga   ...");
  setTimeout(() => {
    console.log("Maggie khaa gaya ...");
  }, 2000);
}

meggielana(meggieBanana);
