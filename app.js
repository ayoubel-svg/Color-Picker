const span = document.querySelector(".span");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
let myColors = [
  "Green",
  "Red",
  "#F15025",
  "Rgba(133,122,200)",
  "orange",
  "pink",
  "tomato",
];

btn.addEventListener("click", () => {
  for (i = 0; i < myColors.length; i++) {
    span.innerHTML = myColors[Math.floor(Math.random() * 6)];
    body.style.background = span.innerHTML;
  }
});
