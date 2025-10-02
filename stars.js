const container = document.getElementById('stars');
const totalStars = 150;

for (let i = 0; i < totalStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDuration = (6 + Math.random() * 4) + 's'; // mais devagar
  star.style.opacity = Math.random();
  star.style.animationDelay = Math.random() * 5 + 's';
  container.appendChild(star);
}
