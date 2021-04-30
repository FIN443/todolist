const body = document.querySelector("body");

const IMG_NUMBER = 4;

// function handleImgLoad() {
//   console.log("finished loading");
// }

function paintImage() {
  const image = new Image();
  image.src = `images/bg${genRandom()}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  //   image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
}

function init() {
  // const randomNumber = genRandom();
  paintImage();
}

init();
