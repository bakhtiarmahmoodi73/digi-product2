let date = document.getElementById("time");

let now = new Date();

let fullTime = now.toLocaleString();

date.innerHTML = fullTime;

const products = document.getElementsByClassName("product-item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
var n = 0;

function displayNone() {
  for (let i = 0; i < products.length; i++) {
    products[i].computedStyleMap.display = "none";
  }
}

function noActive() {
  for (let i = 0; i < products.length; i++) {
    products[i].classList.remove("active");
  }
}

next.addEventListener("click", function () {
  n++;
  if (n > products.length - 1) {
    n = 0;
  }
  displayNone();
  noActive();
  products[n].style.display = "block";
  products[n].classList.add("active");
});

prev.addEventListener("click", function () {
  n--;
  if (n < 0) {
    n = products.length - 1;
  }
  displayNone()
  noActive()
  products[n].style.display = "block";
  products[n].classList.add("active");
});
