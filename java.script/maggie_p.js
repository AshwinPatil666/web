function meggielana() {
  return new Promise((resolve, reject) => {
    console.log("Maggie lene gaya ...");
    setTimeout(() => {
      console.log("Maggie aa gai...");
      resolve();
    }, 2000);
  });
}
function meggieBanana() {
  return new Promise((resolve, reject) => {
    console.log("Maggie banane start ...");
    setTimeout(() => {
      console.log("Maggie ban gai...");

      resolve();
    }, 2000);
  });
}
function meggieKhana() {
  return new Promise((resolve, reject) => {
    console.log("Maggie khane laga   ...");
    setTimeout(() => {
      console.log("Maggie khaa gaya ...");
      resolve();
    }, 2000);
  });
}

meggielana()
  .then(() => meggieBanana())
  .then(() => meggieKhana())
  .then(() => {
    console.log("Ab bartan dho lo");
  });
