const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라 서.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  // form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
  // preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
  // 이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 arument는 지금 막 벌어진 event들에 대한 정보를 갖고 있다.
  // JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
