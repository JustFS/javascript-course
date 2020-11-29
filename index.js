const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.opacity = e.x / window.innerWidth + 0.2;
  mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
});

const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
  document.body.classList.toggle('cursorLess');
  console.log('click');
})
