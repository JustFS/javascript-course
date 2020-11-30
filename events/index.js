const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

  if (e.x > 600 ) {
    document.body.style.filter =  'blur(3px)';
  } else {
    document.body.style.filter = 'none';
  }
});

const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
  document.getElementById('img').classList.toggle("show")
})

const input = document.getElementById('input');

input.addEventListener('input', (e) => {
  console.log(e.target.value);
  vertical.innerHTML = e.target.value
})

const dark = document.querySelector('.dark')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const theme = document.querySelectorAll('.theme')

theme.forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log('yes');
    document.body.classList.remove('darkTheme', 'yellowTheme', 'greenTheme')
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      case "green":
        document.body.classList.add("greenTheme");
        break;
      default:
        null;
    }
  })
);