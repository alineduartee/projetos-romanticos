  // Botão para abrir a carta
const button = document.getElementById('openButton');
const letter = document.getElementById('letter');
const music = document.getElementById('music');

button.addEventListener('click', () => {
  letter.style.display = 'block';
  button.style.display = 'none';
  music.play();
});

// Animação dos corações
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speedY: Math.random() * 1 + 0.5,
    color: `rgba(255, 77, 109, ${Math.random()})`
  };
}

for (let i = 0; i < 100; i++) {
  hearts.push(createHeart());
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach(heart => {
    ctx.beginPath();
    ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
    ctx.fillStyle = heart.color;
    ctx.fill();
    heart.y += heart.speedY;

    if (heart.y > canvas.height) {
      heart.y = -heart.size;
      heart.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateHearts);
}

animateHearts();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
