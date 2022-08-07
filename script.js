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