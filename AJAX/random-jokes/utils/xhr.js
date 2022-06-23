// const url = "https://api.chucknorris.io/jokes/random";

export const getData = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", url);
  console.log(xhr.readyState);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      return data.value;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
};
