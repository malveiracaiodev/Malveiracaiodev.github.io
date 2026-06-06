const ComponentCache = new Map();

/* =========================
   LOAD COMPONENT (CORE)
========================= */
async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    // cache simples (evita refetch)
    if (ComponentCache.has(file)) {
      element.innerHTML = ComponentCache.get(file);
      return;
    }

    const response = await fetch(file, {
      cache: "force-cache"
    });

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
        font-family:Segoe UI, sans-serif;
      ">
        ⚠ Erro ao carregar componente<br>
        <small>${file}</small>
      </div>
    `;
  }
}

/* =========================
   INIT (HEADER / FOOTER ONLY)
========================= */
document.addEventListener("DOMContentLoaded", () => {

  loadComponent("header-component", "components/header.html");
  loadComponent("footer-component", "components/footer.html");

});