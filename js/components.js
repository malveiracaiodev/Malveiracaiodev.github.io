const ComponentCache = new Map();

/* =========================
   LOAD COMPONENT
========================= */
async function loadComponent(id, file) {

  const element = document.getElementById(id);

  if (!element) return;

  try {

    if (ComponentCache.has(file)) {
      element.innerHTML = ComponentCache.get(file);
      return;
    }

    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Erro ao carregar: ${file}`);
    }

    const html = await response.text();

    ComponentCache.set(file, html);

    element.innerHTML = html;

  } catch (error) {

    console.error(error);

    element.innerHTML = `
      <div style="
        padding:20px;
        text-align:center;
        color:#ff6b6b;
      ">
        ⚠ Erro ao carregar componente
      </div>
    `;
  }
}

/* =========================
   INIT
========================= */
document.addEventListener(
  "DOMContentLoaded",
  async () => {

    /* Header */
    await loadComponent(
      "header-component",
      "/components/header.html"
    );

    /* Footer */
    await loadComponent(
      "footer-component",
      "/components/footer.html"
    );

    /* Widgets de Projetos */

    await loadComponent(
      "widget-compras-markiii",
      "/components/projetos/comprasmarkiii.html"
    );

    /* Futuros projetos */

    // await loadComponent(
    //   "widget-compras-markiv",
    //   "/components/projetos/comprasmarkiv.html"
    // );

    // await loadComponent(
    //   "widget-financeorganization",
    //   "/components/projetos/financeorganization.html"
    // );

  }
);