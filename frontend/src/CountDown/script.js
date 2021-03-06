const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const start = document.getElementById("start");

const newYears = "5 Mar 2021 19:40:00";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  if (seconds >= 0) {
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    start.innerHTML = "<h1>수업준비 해주세요</h1>";
  } else {
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
    document.body.style.backgroundImage = "url(haha.PNG)";
    start.innerHTML = "<h1>영어로 말하기 시작</h1> ";
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

//  Chagne Background color

const bgSelection = [
  "../../images/jin.png",
  "../../images/chan.jpg",
  "../../images/niece.jpeg",
  "../../images/he2.jpg",
  "../../images/chon.jpg",
  "../../images/ram.png",
  "../../images/jin.png",
  "../../images/jin.png",
];
const backgroundBtn = document.getElementById("bgButton");

backgroundBtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * bgSelection.length);
  document.body.style.backgroundImage = `url(${bgSelection[randomNumber]})`;
});
