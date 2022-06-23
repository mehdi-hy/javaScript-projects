function getElement(classElement) {
  const element = document.querySelector(`${classElement}`);
  // console.log(element);
  return element;
}

// class Counter {
//   constructor(element, count) {
//     this.element = element;
//     this.count = count;
//     this.value = element.querySelector(".value");
//     console.log(this.value);
//     this.value.textContent = count;
//     this.increaseBtn = element.querySelector(".increase");
//     this.decreaseBtn = element.querySelector(".decrease");
//     this.resetBtn = element.querySelector(".reset");
//     this.increaseBtn.addEventListener("click", this.increase.bind(this));
//     this.decreaseBtn.addEventListener("click", this.decrease.bind(this));
//     this.resetBtn.addEventListener("click", this.reset.bind(this));
//   }
//   increase() {
//     this.count++;
//     this.value.textContent = this.count;
//   }
//   decrease() {
//     this.count--;
//     this.value.textContent = this.count;
//   }
//   reset() {
//     this.count = 0;
//     this.value.textContent = this.count;
//   }
// }
function Counter(element, count) {
  this.element = element;
  this.count = count;
  this.value = element.querySelector(".value");
  console.log(this.value);
  this.value.textContent = count;
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.resetBtn = element.querySelector(".reset");

  this.increase = function () {
    this.count++;
    this.value.textContent = this.count;
  };
  this.decrease = function () {
    this.count--;
    this.value.textContent = this.count;
  };
  this.reset = function () {
    this.count = 0;
    this.value.textContent = this.count;
  };
  this.increaseBtn.addEventListener("click", this.increase.bind(this));
  this.decreaseBtn.addEventListener("click", this.decrease.bind(this));
  this.resetBtn.addEventListener("click", this.reset.bind(this));
}
const first = new Counter(getElement(".first-counter"), 100);
const second = new Counter(getElement(".second-counter"), 200);

// const containers = document.body.querySelectorAll(".container");

// const value = document.body.querySelectorAll(".value");
// // console.log(containers[0].children[1]);
// class Counter {
//   constructor(count, container) {
//     this.count;
//     this.container;
//   }
//   showInitialValue() {
//     this.container.children[1].textContent = this.count;
//   }

//   increment(e) {
//     console.log(e.target);
//     if (e.target.classList.contains("increase")) {
//       this.count++;
//       console.log(this.count);
//       this.container.children[1].textContent = this.count;
//     } else if (e.target.classList.contains("decrease")) {
//       this.count--;
//       this.container.children[1].textContent = this.count;
//     } else if (e.target.classList.contains("reset")) {
//       this.count = 0;
//       this.container.children[1].textContent = this.count;
//     }
//   }
//   event() {
//     this.container.addEventListener(
//       "click",
//       this.increment.bind(this.container)
//     );
//   }
// }
// let first_Counter = new Counter(100, containers[0]);
// let secondCounter = new Counter(200, containers[1]);
// first_Counter.showInitialValue();
// containers[0].addEventListener(
//   "click",
//   first_Counter.increment.bind(first_Counter)
// );
// secondCounter.showInitialValue();
// containers[1].addEventListener(
//   "click",
//   secondCounter.increment.bind(secondCounter)
// );
