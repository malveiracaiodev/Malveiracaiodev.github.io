const container = document.getElementById("projetos-container");

const projetos = [
  "compras",
  "financeorganization",
  "dailytasks",
  "markvsuite"
];

/* =========================
   LOAD PROJECTS (ORDERED)
========================= */
async function loadProjetos() {
  if (!container) return;

  container.innerHTML = "";

  try {
    const requests = projetos.map(async (projeto) => {
      const response = await fetch(
        `../components/projetos/${projeto}.html`
      );

      if (!response.ok) {
        throw new Error(`Erro ao carregar ${projeto}`);
      }

      return await response.text();
    });

    const htmls = await Promise.all(requests);

    container.innerHTML = htmls.join("");

  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <div style="
        padding:20px;
        color:#ff6b6b;
        text-align:center;
      ">
        ⚠ Erro ao carregar projetos
      </div>
    `;
  }
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", loadProjetos);