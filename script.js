const slidePage = document.querySelector(".slidePage");

const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let current = 1;

firstNextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-25%";
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-50%";
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-75%";
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  progressText[current - 1].classList.add("active");
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");

  setTimeout(function () {
    alert("You`re successfully signed up");
    location.reload();
  }, 800);
});

prevBtnSec.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "0%";
  progressText[current - 2].classList.remove("active");
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-25%";
  progressText[current - 2].classList.remove("active");
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", (e) => {
  e.preventDefault();
  slidePage.style.marginLeft = "-50%";
  progressText[current - 2].classList.remove("active");
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  current -= 1;
});

