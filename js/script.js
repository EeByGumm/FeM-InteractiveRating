const buttons = document.querySelectorAll(".scoreBtn");
const subMitted = document.querySelector(".subBtn");
const scoreCard = document.querySelector(".scoreCard");
const thanksCard = document.querySelector(".thanksCard");

let currentNumber = null;

function handleClickNumber() {
  buttons.forEach((button) => button.classList.remove("active"));
  this.classList.add("active");
  currentNumber = this.innerHTML;
}

function submitClicked() {
  if (!currentNumber) {
    alert("Please select a score");
    return;
  }

  scoreCard.classList.add('hidden');
  thanksCard.classList.remove('hidden');

  let text = `You selected ${currentNumber} out of 5`;
  document.getElementById("result").innerHTML = text;
}

buttons.forEach((button) =>
  button.addEventListener("click", handleClickNumber)
);

subMitted.addEventListener("click", submitClicked);