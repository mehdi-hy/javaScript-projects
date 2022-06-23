const URL = "https://api.chucknorris.io/jokes/random";
const paragrapgh = document.body.querySelector(".content");
const btn = document.querySelector(".btn");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  img.classList.add("shake-img");
  getData(URL)
    .then((response) => {
      diplayText(response);
    })
    .then(() => img.classList.remove("shake-img"));
});

const getData = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("Get", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
};
const diplayText = (response) => {
  const { value: joke } = JSON.parse(response);
  paragrapgh.textContent = joke;
};
