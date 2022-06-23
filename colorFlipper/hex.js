const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color_name = document.querySelector(".color");

btn.addEventListener("click", function () {
  let count = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    console.log(random);
    let color = hex[random];
    count += color;
  }

  document.body.style.backgroundColor = `${count}`;
  color_name.textContent = count;
});
