let array1 = ["javascript", "html", "css"];
let array2 = ["From Scratch", 33, ["javascript", "html", "css"], true];

console.log(array1[0][4]);

for (i = 0; i < array2.length; i++) {
  console.log(array2[i]);
  console.log("Element numéro : " + [i] + " est un " + typeof array2[i]);
}

let link = "";

const input = document.getElementById("input");
const video = document.getElementById("video");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  link = e.target.value;

  video.innerHTML = `
      <iframe
        width="654"
        height="491"
        src=${link}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
});
