const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  // date 객체 생성
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
/*
 seconds < 10 ? `0${seconds}` : seconds
 >> seconds가 10보다 작으면 `0${seconds}`
 >> seconds가 10보다 크면 seconds
*/
function init() {
  getTime();
  // 함수 동작시간 설정
  setInterval(getTime, 1000);
}

init();
