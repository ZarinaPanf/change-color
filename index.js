const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const body = document.body;

const colors = ['#FECEF1', '#EF9CDA', '#89A1EF', '#00A5E0', '#32CBFF', '#F2E2D2', '#FFF'];

btn.addEventListener('click', () => {
const color = getRandomColor();
console.log(color)
text.innerHTML = `${color}`;
body.style.backgroundColor = color;
})

function getRandomColor() {
return colors[Math.floor(Math.random() * colors.length)];
}

