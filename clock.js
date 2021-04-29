const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  clockCircle1 = document.querySelector(".clock__circle1"),
  clockCircle2 = document.querySelector(".clock__circle2"),
  clockCircle3 = document.querySelector(".clock__circle3");

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

function paintCircleLine() {
  for (let i = 0; i < 30; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.transform = `rotate(${6 * i}deg)`;
    if (i % 5) {
      line.classList.add("thin");
    } else {
      line.classList.add("thick");
    }
    clockCircle1.appendChild(line);
  }
}

function paintClockNumber() {
  let right = 3;
  let left = 9;
  for (let i = 0; i < 6; i++) {
    const num_container = document.createElement("div");
    num_container.classList.add("clock__num-container");
    num_container.style.transform = `rotate(${30 * i}deg)`;
    num_container.innerHTML = `
    <div class="num ${i === 0 || i === 3 ? "highlight" : ""}" 
      style="transform: rotate(-${30 * i}deg)">${
      left > 12 ? left - 12 : left
    }</div>
    <div class="num ${i === 0 || i === 3 ? "highlight" : ""}" 
      style="transform: rotate(-${30 * i}deg)">${right}</div>
    `;
    clockCircle3.appendChild(num_container);
    right++;
    left++;
  }
}

function rotateAnimation(hand, duration, deg) {
  hand.animate(
    [
      { transform: `rotate(${deg}deg)` },
      { transform: `rotate(${deg + 360}deg)` },
    ],
    {
      duration: duration,
      iterations: Infinity,
    }
  );
}

function updateClock() {
  const hour = document.querySelector(".clock__hour-hand");
  const minute = document.querySelector(".clock__minute-hand");
  const second = document.querySelector(".clock__second-hand");

  const date = new Date();
  // 시침, 분침, 초침 현재 위치 각도 계산
  const secDeg =
    360 * (date.getSeconds() / 60) + 6 * (date.getMilliseconds() / 1000);
  const minDeg = 360 * (date.getMinutes() / 60) + 6 * (secDeg / 360);
  const hourDeg = 360 * (date.getHours() / 12) + 30 * (minDeg / 360);

  rotateAnimation(hour, 43200000, hourDeg);
  rotateAnimation(minute, 3600000, minDeg);
  rotateAnimation(second, 60000, secDeg);
}

function init() {
  getTime();
  paintCircleLine();
  paintClockNumber();
  updateClock();
  // 함수 동작시간 설정
  setInterval(getTime, 1000);
}

init();
