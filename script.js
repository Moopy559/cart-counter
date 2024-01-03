let cards = document.querySelectorAll("div.cards");
let cardOne = document.querySelector("#card1");
let cardTwo = document.querySelector("#card2");
let cardThree = document.querySelector("#card3");
let cardFour = document.querySelector("#card4");
let total = document.getElementById("total");
let count = 0;
let widget = document.querySelector("div.widget");

function activateAlert(name) {
  alert("The name of this card = " + name);
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // activateAlert(card.dataset.price);
    count += card.dataset.price * 1;
    total.textContent = count;
  });
});

widget.addEventListener("click", () => {
  widget.classList.toggle("toggle");
});
