const btn = document.querySelectorAll(".btn");
let value = document.getElementById("value");
let decrease = document.querySelector(".decrease");
let count = 0;
let classValue = decrease.className;
console.log(classValue);
btn.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("increase")) {
      count = count + 1;
      console.log(count);
      value.textContent = count;
    } else if (item.className == "btn decrease") {
      count--;
      value.textContent = count;
    } else {
      count = 0;
      value.textContent = count;
    }
  });
});

// const increase = document.querySelector(".increase");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");

// let value = document.querySelector("#value");
// let count = 0;
// increase.addEventListener("click", function () {
//   count += 1;
//   console.log(count);
//   value.textContent = count;
// });
// decrease.addEventListener("click", function () {
//   count -= 1;
//   console.log(count);
//   value.textContent = count;
// });
// reset.addEventListener("click", function () {
//   count = 0;
//   value.textContent = count;
// });
