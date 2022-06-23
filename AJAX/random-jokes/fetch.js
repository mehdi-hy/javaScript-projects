const URL = "https://api.chucknorris.io/jokes/random";
const paragrapgh = document.body.querySelector(".content");
const btn = document.querySelector(".btn");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  img.classList.add("shake-img");
  fetch(URL)
    .then((data) => data.json())
    .then((data) => diplayText(data))
    .then(() => img.classList.remove("shake-img"));
});

const diplayText = (data) => {
  const { value: joke } = data;
  paragrapgh.textContent = joke;
};
