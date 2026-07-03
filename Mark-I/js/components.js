const ComponentCache = new Map();

/* =========================
   LOAD COMPONENT
========================= */
async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    // Se o componente já estiver no cache, carrega instantaneamente
    if (ComponentCache.has(file)) {
      element.innerHTML = ComponentCache.get(file);
      return;
    }

    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Erro ao carregar: ${file}`);
    }

    const html = await response.text();

    // Salva no cache para evitar requisições redundantes
    ComponentCache.set(file, html);
    element.innerHTML = html;

  } catch (error) {
    console.error(error);
    element.innerHTML = `
      <div class="component-error">
        ⚠ Erro ao carregar componente
      </div>
    `;
  }
}

/* =========================
   INIT (DYNAMIC PATH LOADING)
========================= */
document.addEventListener("DOMContentLoaded", async () => {
  // Detecta se a página atual está dentro da pasta 'pages/'
  const isSubPage = window.location.pathname.includes("/pages/");
  const basePath = isSubPage ? "../" : "./";

  // Carrega os componentes injetando o caminho dinâmico correto [1]
  await loadComponent(
    "header-component",
    `${basePath}components/header.html`
  );

  await loadComponent(
    "footer-component",
    `${basePath}components/footer.html`
  );

  await loadComponent(
    "widget-compras-markiii",
    `${basePath}components/projetos/comprasmarkiii.html`
  );
  
  await loadComponent(
    "widget-Finance-Organization-MarkI",
    `${basePath}components/projetos/financeorganization.html`
  );
});