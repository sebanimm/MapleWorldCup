const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const description = document.getElementById("description");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

function getRound(category) {
  const round = category.getAttribute("id");
  description.innerText = `64명의 후보 중 무작위 ${round}명이 대결합니다.`;
}

const usedImages = [];
const imgName = [
  "윈드브레이커",
  "스우",
  "루시드",
  "데미안",
  "하얀 마법사",
  "윌",
  "진 힐라",
  "제논",
  "검은 마법사",
  "시그너스",
  "반 레온",
  "하딘",
  "아인",
  "라이언",
  "퀘이그",
  "에드",
  "샤렌 4세",
  "세렌",
  "칼라일",
  "제른 다르모어(애런)",
  "제로(알파)",
  "제로(베타)",
  "아델",
  "엔젤릭버스터",
  "아란",
  "아크메이지(불,독)",
  "아크메이지(썬,콜)",
  "아크",
  "배틀메이지",
  "비숍",
  "블래스터",
  "보우마스터",
  "카데나",
  "캐논슈터",
  "캡틴",
  "다크나이트",
  "데몬어벤져",
  "데몬슬레이어",
  "듀얼블레이드",
  "은월",
  "에반",
  "플레임위자드",
  "히어로",
  "호영",
  "일리움",
  "카인",
  "카이저",
  "키네시스",
  "라라",
  "루미너스",
  "신궁",
  "메카닉",
  "메르세데스",
  "미하일",
  "나이트로드",
  "나이트워커",
  "팔라딘",
  "패스파인더",
  "팬텀",
  "섀도어",
  "소울마스터",
  "스트라이커",
  "바이퍼",
  "와일드헌터",
];

const leftImg = document.querySelector("#left > .image");
const rightImg = document.querySelector("#right > .image");
const leftImgName = document.querySelector("#left > .name");
const rightImgName = document.querySelector("#right > .name");
const progress = document.querySelector(".title > h2 > p");
const numOfName = imgName.length;

function randomImage() {
  checkProgress();
  let leftImgNumber = Math.floor(Math.random() * numOfName);
  let rightImgNumber = Math.floor(Math.random() * numOfName);

  while (1) {
    for (let j = 0; j < currentRound; j++) {
      for (let i = 0; i < currentRound; ) {
        if (leftImgNumber === usedImages[i]) {
          leftImgNumber = Math.floor(Math.random() * numOfName);
        } else if (rightImgNumber === usedImages[i]) {
          rightImgNumber = Math.floor(Math.random() * numOfName);
        } else {
          i++;
        }
      }
    }
    if (leftImgNumber === rightImgNumber) {
      rightImgNumber = Math.floor(Math.random() * numOfName);
    } else {
      break;
    }
  }

  usedImageLeft = leftImgNumber;
  usedImageRight = rightImgNumber;

  leftImg.style.backgroundImage = `url(images/${leftImgNumber}.png)`;
  rightImg.style.backgroundImage = `url(images/${rightImgNumber}.png)`;
  leftImgName.innerText = `${imgName[leftImgNumber]}`;
  rightImgName.innerText = `${imgName[rightImgNumber]}`;
  if (currentRound === 61) {
    progress.innerText = `결승전`;
  } else if (currentRound === 62) {
    winner();
  } else {
    progress.innerText = `${selectedRound}강 ${count}/${selectedRound / 2}`;
  }
  count += 1;
}

let selectedRound;
let count = 1;
let currentRound = usedImages.length;

function checkProgress() {
  currentRound = usedImages.length;
  if (currentRound === 59) {
    selectedRound = 4;
    count = 1;
  } else if (currentRound === 55) {
    selectedRound = 8;
    count = 1;
  } else if (currentRound === 47) {
    selectedRound = 16;
    count = 1;
  } else if (currentRound === 31) {
    selectedRound = 32;
    count = 1;
  } else if (currentRound === 0) {
    selectedRound = 64;
  }
}

let usedImageLeft;
let usedImageRight;

function chooseLeft() {
  randomImage();
  usedImages.push(usedImageLeft);
}

function chooseRight() {
  randomImage();
  usedImages.push(usedImageRight);
}

const win = document.getElementById("winner");
const winnerName = document.querySelector("#winner > p");
let a = [];

function winner() {
  for (let i = 0; i < numOfName; i++) {
    for (let j = 0; j < numOfName; j++) {
      if (usedImages[i] === j) {
        a[i] = 1;
      } else {
        a[i] = 0;
      }
    }
  }
  for (let i = 0; i < numOfName; i++) {
    if (a[i] === 0) {
      console.log(a[i]);
    }
  }
  win.classList.remove("hidden");
  leftImg.classList.add("hidden");
  rightImg.classList.add("hidden");
  leftImgName.classList.add("hidden");
  rightImgName.classList.add("hidden");
  versus.classList.add("hidden");
  win.style.backgroundImage = `url("images/${j}.png")`;
  winnerName.innerText = `${imgName[j]}`;
}

const startBtn = document.querySelector(".start");
const overlay = document.getElementById("overlay");
const versus = document.querySelector("#versus");

function modalFadeOut() {
  overlay.classList.add("fade-out");
  startBtn.style.cursor = "default";
  versus.classList.remove("hidden");
  randomImage();
}

startBtn.addEventListener("click", modalFadeOut);
leftImg.addEventListener("click", chooseLeft);
rightImg.addEventListener("click", chooseRight);
