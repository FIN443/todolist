const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad() {
//   console.log("finished loading");
// }

function paintImage() {
  const image = new Image();
  image.src = `images/bg1.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  //   image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  // const randomNumber = genRandom();
  paintImage();
}

init();
