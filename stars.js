const container = document.getElementById('stars');
const totalStars = 150;

// Atualiza a altura do container para cobrir toda a página
container.style.height = document.body.scrollHeight + 'px';

for (let i = 0; i < totalStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Posição horizontal aleatória
  star.style.left = `${Math.random() * 100}vw`;

  // Posição vertical aleatória dentro da página inteira
  star.style.bottom = `${Math.random() * document.body.scrollHeight}px`;

  // Tamanho e estilo
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.opacity = Math.random() * 0.8 + 0.2;

  // Animação
  star.style.animationDuration = `${6 + Math.random() * 4}s`;
  star.style.animationDelay = `${Math.random() * 5}s`;

  container.appendChild(star);
}
