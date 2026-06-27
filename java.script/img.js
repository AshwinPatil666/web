function download(url,cb) {
    console.log("Download start at url",url);
    setTimeout(()=>{
        
    let profileimage = url.split("/")[4];
  console.log("download end:",profileimage);
  cb(profileimage,upload);
  
    },2000);
}
function compress(profileimage,cb) {
    console.log("Start Compressing:",profileimage);
    setTimeout(()=>{
        let newUrl="https://nayawebsite.com/"+ compressedImage;
  console.log(""newUrl);
    })
  let compressedImage = profileimage.split(",")[0] + ".webp";
  console.log(compressedImage);
}
function upload(compressedImage) {
  let newUrl = "https://nayawebsite.com/" + compressedImage;
  console.log(newUrl);
}

let url = "https://ankitkiwebsite.com/image/profile.jpg";



