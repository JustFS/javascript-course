const quote = document.getElementById("quote");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((res) => {
      quote.innerHTML = `${res.content}`;
    });

  fetch("https://picsum.photos/1600/900")
    .then((res) => res.url)
    .then((res) => {
      document.getElementById("pic").innerHTML = `<img src=${res} />`;
    });
};

quote.addEventListener("click", () => getQuote());

getQuote();
