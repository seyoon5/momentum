const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

//setInterval(sayHello, 1000); 설정한 시간마다 실행
//setTimeout(sayHello, 1000); 설정한 시간뒤 한번 실행
