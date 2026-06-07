/* =============================================================
   WIDGETS.JS
   Widgets dos projetos MalveiraCaioDev
============================================================= */

/* =============================================================
   Função Genérica
============================================================= */
function toggleWidget(id) {

  const widget = document.getElementById(id);

  if (!widget) return;

  widget.style.display =
    widget.style.display === "block"
      ? "none"
      : "block";
}

/* =============================================================
   Compras Organizadas Mark III
============================================================= */
function toggleMarkIII() {

  toggleWidget("markiii-content");

}

/* =============================================================
   Futuros Projetos
============================================================= */

// function toggleMarkIV() {
//   toggleWidget("markiv-content");
// }

// function toggleFinance() {
//   toggleWidget("finance-content");
// }

// function toggleMarkV() {
//   toggleWidget("markv-content");
// }