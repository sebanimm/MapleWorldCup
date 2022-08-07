const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const description = document.getElementById("description");
const optionsList = document.querySelectorAll(".option");
const category = document.getElementsByName("category");
const round = category.value;

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    console.log(optionsList.value);
    selected.innerHTML = o.querySelector("label").innerHTML;
    description.innerText = `64명의 후보 중 무작위 ${round}명이 대결합니다.`;
    optionsContainer.classList.remove("active");
  });
});
