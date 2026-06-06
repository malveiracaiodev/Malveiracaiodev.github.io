const container = document.getElementById('stars');
const totalStars = 150;

container.innerHTML = '';

for (let i = 0; i < totalStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  const size = Math.random() * 2 + 1;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.opacity = Math.random() * 0.8 + 0.2;

  star.style.animationDuration = `${6 + Math.random() * 4}s`;
  star.style.animationDelay = `${Math.random() * 5}s`;

  container.appendChild(star);
}
