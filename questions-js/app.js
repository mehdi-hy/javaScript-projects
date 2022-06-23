//using selectors inside the element
// traversing the dom
const plus_icons = document.querySelectorAll(".plus-icon");
const minus_icons = document.querySelectorAll(".minus-icon");
const questions = document.querySelectorAll(".question");
// function plus_selector(item) {
//   item.addEventListener("click", question_selector);
// }
// function question_selector() {
//   question_text.forEach(show_text);
// }
// function show_text(item) {
//   item.classList.add("show-text");
// }

// =================
// solution-1
// =================

// plus_icons.forEach(function (icon) {
//   icon.addEventListener("click", function () {
//     console.log(icon);
//     questions.forEach(function (text) {
//       text.classList.remove("show-text");
//     });
//     icon.parentElement.parentElement.parentElement.classList.add("show-text");
//   });
// });

// minus_icons.forEach(function (icon) {
//   icon.addEventListener("click", function () {
//     icon.parentElement.parentElement.parentElement.classList.remove(
//       "show-text"
//     );
//   });
// });

// =================
// solution-2
// =================
// questions.forEach(function (question) {
//   question.addEventListener("click", function (e) {
//     if (e.target.classList.contains("fa-plus-square")) {
//       console.log("question");
//       questions.forEach(function (question) {
//         question.classList.remove("show-text");
//       });
//       question.classList.add("show-text");
//     }
//   });
// });
// questions.forEach(function (question) {
//   question.addEventListener("click", function (e) {
//     if (e.target.classList.contains("fa-minus-square")) {
//       question.classList.remove("show-text");
//     }
//   });
// });

// questions.addEventListener("click", function (e) {
//   if (e.target.classList.contains("far")) {
//     console.log("hello world");
//   }
// });
questions.forEach(function (question) {
  console.log(question);
});
console.log("hello world");
