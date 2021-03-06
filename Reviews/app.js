// local reviews data
const reviews = [
  {
    id: 1,
    name: "처음 만나서 하는 인사",
    job: "web developer",
    img: "img1.PNG",
    text: `Hello, My name is 
     What is your name?`,
  },
  {
    id: 2,
    name: "평상시 인사하기",
    job: "web designer",
    img: "img2.PNG",
    text: "Hi, How are you? I am good thank you, how are you?",
  },
  {
    id: 3,
    name: "어제 뭐했는지 대화하기",
    job: "백수, 아똔",
    img: "img3.PNG",
    text: "I went swimming, I read a book, It was fun.",
  },
  {
    id: 4,
    name: "요청하기",
    job: "Mommy",
    img: "mom.png",
    text: "Can you please ---, Can I have ",
  },
  {
    id: 5,
    name: "달라고 ",
    job: "Mommy",
    img: "mom.png",
    text: "Can I have One two three---  ",
  },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// const last = document.querySelector(".fas");

// set 시작 아이템

let currentItem = 0;

// load 시작 아이템
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

// show person based on item
showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// 다음 사진 보기
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
// 다음 사진 보기
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// 랜덤 버튼
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
