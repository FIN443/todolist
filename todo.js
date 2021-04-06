const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
// 저장할 배열 공간
let toDos = [];

let idNumbers = 1;
// 리스트 삭제
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  // filter()는 array 데이터를 함수에 대하여 수행하고 true인 데이터로 새로운 array 생성
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  // 전부 지우기
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
  idNumbers = 1;
  // cleanToDos array안 객체들 수정
  cleanToDos.forEach(function (toDo) {
    toDo.id = idNumbers;
    paintToDo(toDo.text);
  });
  // 수정값 toDos에 저장
  toDos = cleanToDos;
  saveToDos();
}
// 로컬 스토리지에 리스트 저장
function saveToDos() {
  // JSON.stringify()는 Object를 String으로 변환한다
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
// 리스트 추가(+셋팅)
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  //   const newId = toDos.length + 1;
  const newId = idNumbers++;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  // li밑에 버튼, 글 추가
  li.appendChild(delBtn);
  li.appendChild(span);
  // 순서를 위한 ID
  li.id = newId;
  // ul(.js-toDoList)밑에 생성한 li추가
  toDoList.appendChild(li);
  // Object 생성
  const toDoObj = {
    text: text,
    id: newId,
  };
  // toDos[]에 toDoObj 추가
  toDos.push(toDoObj);
  // 로컬 스토리지 저장
  saveToDos();
}
// submit 수행시
function handleSubmit(event) {
  // 이벤트 발생 방지(입력방지)
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
// 저장 데이터 불러오기
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // JSON.parse()는 String을 객체로 변환한다.(array)
    const parsedToDos = JSON.parse(loadedToDos);
    // forEach()는 array의 각 데이터를 함수에 맞추어 수행한다.
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
// 수행
function init() {
  loadToDos();
  // submit 수행시 이벤트 발생
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
