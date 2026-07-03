const ComponentCache = new Map();

/* =========================
   LOAD COMPONENT
========================= */
async function loadComponent(
  id,
  file
) {

  const element =
    document.getElementById(id);

  if (!element) return;

  try {

    if (ComponentCache.has(file)) {

      element.innerHTML =
        ComponentCache.get(file);

      return;
    }

    const response =
      await fetch(file);

    if (!response.ok) {

      throw new Error(
        `Erro ao carregar: ${file}`
      );
    }

    const html =
      await response.text();

    ComponentCache.set(
      file,
      html
    );

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
   INIT
========================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    await loadComponent(
      "header-component",
      "./components/header.html"
    );

    await loadComponent(
      "footer-component",
      "./components/footer.html"
    );

    await loadComponent(
      "widget-compras-markiii",
      "./components/projetos/comprasmarkiii.html"
    );
     await loadComponent(
       "widget-Finance-Organization-MarkI",
      "./components/projetos/financeorganization.html"
);
  }
);
