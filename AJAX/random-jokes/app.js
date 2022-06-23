const URL = "https://api.chucknorris.io/jokes/random";
const paragrapgh = document.body.querySelector(".content");
const btn = document.querySelector(".btn");
const img = document.querySelector("img");

btn.addEventListener("click", async () => {
  img.classList.add("shake-img");
  const data = await fetch(URL);
  const response = await data.json();
  diplayText(response);
  img.classList.remove("shake-img");
});

const diplayText = (data) => {
  const { value: joke } = data;
  paragrapgh.textContent = joke;
};
