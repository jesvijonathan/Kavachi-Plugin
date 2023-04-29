let kava = "https://i.imgur.com/WjfqQLa.png";
console.log("Kavachi Plugin Active");
onload = function () {
  const imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = kava;
    // imgs[i].style.opacity = 0;
    // console.log(imgs[i]);
  }
};
onscroll = function () {
  const imgs = document.getElementsByTagName("img");

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = kava;
  }
};
