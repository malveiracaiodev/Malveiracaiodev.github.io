<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfólio Caio</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: radial-gradient(ellipse at bottom, #0d1b2a 0%, #000 100%);
      overflow: hidden;
      color: white;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    h1 {
      font-size: 3em;
      margin: 0;
    }

    p {
      font-size: 1.2em;
      margin-top: 10px;
    }

    .stars {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .star {
      position: absolute;
      bottom: 0;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      animation: rise 5s linear infinite;
    }

    @keyframes rise {
      0% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh);
        opacity: 0;
      }
    }
  </style>
</head>
<body>
  <h1>Olá, eu sou o Caio!</h1>
  <p>Seja bem-vindo ao meu portfólio ✌️</p>
  <div class="stars" id="stars"></div>

  <script>
    const container = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + 'vw';
      star.style.animationDuration = (2 + Math.random() * 3) + 's';
      star.style.opacity = Math.random();
      container.appendChild(star);
    }
  </script>
</body>
</html>
