const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  // 로컬 스토리지 저장
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // 이벤트 방지
  event.preventDefault();
  // 입력값 currentValue로 가져옴
  const currentValue = input.value;
  paintGreeting(currentValue);
  // 로컬 스토리지 저장
  saveName(currentValue);
}

function askForName() {
  // form -> display: block
  form.classList.add(SHOWING_CN);
  // submit시 handleSubmit() 수행
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  // form -> display: none
  form.classList.remove(SHOWING_CN);
  // h4 -> display: block
  greeting.classList.add(SHOWING_CN);
  // h4 텍스트 부여
  greeting.innerText = `안녕하세요 ${text} 님`;
}

function loadName() {
  // 로컬 스토리지에서 불러오기
  const currentUser = localStorage.getItem(USER_LS);
  // 저장 데이터 유무 체크
  if (currentUser === null) {
    // 데이터 없을 때
    askForName();
  } else {
    // 데이터 있을 때
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
