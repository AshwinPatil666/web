// function maggieLana(cb) {
//   console.log("Maggie lene gaye...");
//   setTimeout(() => {
//     console.log("Maggie aa gayi...");
//     cb(maggieKhana);  // cb -> maggieKhana bheja as a callback
//   }, 2000);  // representing it takes 2 sec to get maggie from shop
// }

// function maggieBanana(cb) {
//   console.log("Maggie banana start...");
//   setTimeout(() => {
//     console.log("Maggie ban gayi...");
//     cb();
//   }, 2000); // representing it takes 2 sec to prepare maggie
// }

// function maggieKhana() {
//   console.log("Maggie khana start...");
//   setTimeout(() => {
//     console.log("Maggie khana khatam...");
//   }, 2000); // representing it takes 2 sec to eat maggie
// }

// maggieLana(maggieBanana); // cb -> magieBanana bheja as a callback
// // maggieBanana();
// // maggieKhana();
/*
function download(url) {
  return new Promise((resolve) => {
    console.log("Download starts at url: ", url);
    setTimeout(() => {
      let profileImage = url.split("/").;
      console.log("Download end: ", profileImage);

      resolve(profileImage);
    }, 2000); // Maan lena download mai 2 sec lag gaye
  });
}

function compress(profileImage) {
  return new Promise((resolve) => {
    console.log("Starts compressing: ", profileImage);
    setTimeout(() => {
      let compressedImage = profileImage.split(".")[0] + ".webp";
      console.log("End compression:", compressedImage);

      resolve(compressedImage);
    }, 2000); // maan lena compression mai 2 sec lag gaye
  });
}

function upload() {
  return new Promise((resolve) => {
    console.log("Starts ulpoading: ", compressedImage);
    setTimeout(() => {
      let newUrl = "https://nayawebsite.com/" + compressedImage;
      console.log("Done ulpoading, new URL: ", newUrl);
      resolve();
    }, 2000); // maan lena uploading mai 2 sec lag gaye
  });
}

let url = "https://ankitkiwebsite.com/image/profile.jpg";
download(url, compress);
// download(url);
// compress("profile.jpg");
// upload("profile.webp");
download()
  .then((profileImage) => compress(profileImage))
  .then((compressedImage) => upload(compressedImage))
  .then(() => {
    console.log("Url upload successfully");
  });
*/

function download(url) {
  return new Promise((resolve) => {
    console.log("Download starts at url: ", url);
    setTimeout(() => {
      // 1. Sahi kiya: . ke baad pop() lagaya taaki sahi se image name mile
      let profileImage = url.split("/").pop();
      console.log("Download end: ", profileImage);

      resolve(profileImage);
    }, 2000); // Maan lena download mai 2 sec lag gaye
  });
}

function compress(profileImage) {
  return new Promise((resolve) => {
    console.log("Starts compressing: ", profileImage);
    setTimeout(() => {
      let compressedImage = profileImage.split(".")[0] + ".webp";
      console.log("End compression:", compressedImage);

      resolve(compressedImage);
    }, 2000); // maan lena compression mai 2 sec lag gaye
  });
}

// 2. Sahi kiya: upload ke andar compressedImage parameter pass kiya
function upload(compressedImage) {
  return new Promise((resolve) => {
    console.log("Starts ulpoading: ", compressedImage);
    setTimeout(() => {
      let newUrl = "https://nayawebsite.com/" + compressedImage;
      console.log("Done ulpoading, new URL: ", newUrl);
      resolve();
    }, 2000); // maan lena uploading mai 2 sec lag gaye
  });
}

let url = "https://ankitkiwebsite.com/image/profile.jpg";

// 3. Sahi kiya: Pehle waale faltu function calls hata diye aur sahi waale mein `url` pass kiya
download(url)
  .then((profileImage) => compress(profileImage))
  .then((compressedImage) => upload(compressedImage))
  .then(() => {
    console.log("Url upload successfully");
  });
