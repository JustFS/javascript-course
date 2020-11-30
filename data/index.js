let array1 = ["javascript", "html", "css"];
let array2 = ["From Scratch", 33, ["javascript", "html", "css"], true];

console.log(array1[0][4]);

for (i = 0; i < array2.length; i++) {
  console.log(array2[i]);
  console.log("Element numéro : " + [i] + " est un " + typeof array2[i]);
}

// ****************************************

const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `
      <iframe
        width="654"
        height="491"
        src=${link}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  }
});

const changeLink = (linkToChange) => {
  embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};
