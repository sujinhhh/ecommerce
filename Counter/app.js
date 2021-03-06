// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// forEach Array 안에 있는 아이템을 하나씩 뽑아 쓸수 있음
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decreace")) {
      count--;
    } else if (styles.contains("increace")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    // 컬러 바꾸기
    if (count > 0) {
      value.style.color = "#2196f3";
    } else if (count < 0) {
      value.style.color = "pink";
    } else {
      value.style.color = "";
    }
    // stop Watch
    if (styles.contains("stopwatch")) {
      return stopWatch();
      value.textContent = stopWatch();
    }
  });
});

// stop Watch
stopWatch = () => {
  let starTime,
    endTime,
    running,
    duration = 0;
  this.start = () => {
    if (running) throw new Error("Stopwatch has already started");
    // 아니면 러닝을 트루로 설정
    running = true;
    starTime = new Date();
  };
  this.stop = () => {
    if (!running) throw new Error("Stopwatch is not started");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - starTime.getTime()) / 1000;
    duration += seconds;
    console.log(seconds);
  };
  this.reset = () => {
    starTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
};
