let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("div");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength; // 20

input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
  // Set The Progress
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};