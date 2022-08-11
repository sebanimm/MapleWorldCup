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

let usedImages = [];
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

const numOfName = imgName.length;
console.log(numOfName);
function randomImage() {
  let randomNumber1 = Math.floor(Math.random() * numOfName);
  let randomNumber2 = Math.floor(Math.random() * numOfName);
  const leftImage = document.querySelector("#left > .image");
  const rightImage = document.querySelector("#right > .image");
  const leftImageName = document.querySelector("#left > .name");
  const rightImageName = document.querySelector("#right > .name");
  const versus = document.querySelector("#versus");

  while (1) {
    if (randomNumber1 === randomNumber2) {
      randomNumber2 = Math.floor(Math.random() * numOfName);
    } else {
      break;
    }
  }

  versus.classList.remove("hidden");
  leftImage.style.backgroundImage = `url(images/${randomNumber1}.png)`;
  rightImage.style.backgroundImage = `url(images/${randomNumber2}.png)`;
  leftImageName.innerText = `${imgName[randomNumber1]}`;
  rightImageName.innerText = `${imgName[randomNumber2]}`;
}

const startBtn = document.querySelector(".start");
const overlay = document.getElementById("overlay");

function modalFadeOut() {
  overlay.classList.add("fade-out");
  startBtn.style.cursor = "default";
}

startBtn.addEventListener("click", modalFadeOut, randomImage);
