/* ==========================================================
   COMPONENTS.JS
   Sistema de Componentes - MalveiraCaioDev
========================================================== */

const ComponentCache = new Map();

/* ==========================================================
   LOAD COMPONENT
========================================================== */
async function loadComponent(id, file) {

  const element = document.getElementById(id);

  if (!element) return;

  try {

    /* Cache */
    if (ComponentCache.has(file)) {

      element.innerHTML =
        ComponentCache.get(file);

      return;
    }

    const response = await fetch(file);

    if (!response.ok) {

      throw new Error(
        `Erro ao carregar ${file}`
      );
    }

    const html = await response.text();

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

/* ==========================================================
   COMPONENTES GLOBAIS
========================================================== */
function loadGlobalComponents() {

  loadComponent(
    "header-component",
    "/components/header.html"
  );

  loadComponent(
    "footer-component",
    "/components/footer.html"
  );
}

/* ==========================================================
   WIDGETS DE PROJETOS
========================================================== */
function loadProjectWidgets() {

  loadComponent(
    "widget-compras-markiii",
    "/components/projetos/comprasmarkiii.html"
  );

  /* Futuros Projetos */

  // loadComponent(
  //   "widget-compras-markiv",
  //   "/components/projetos/comprasmarkiv.html"
  // );

  // loadComponent(
  //   "widget-financeorganization",
  //   "/components/projetos/financeorganization.html"
  // );

  // loadComponent(
  //   "widget-markv",
  //   "/components/projetos/markv.html"
  // );
}

/* ==========================================================
   INIT
========================================================== */
document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadGlobalComponents();

    loadProjectWidgets();

  }
);