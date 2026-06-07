/* =============================================================
   WIDGETS.JS
   Widgets dos projetos MalveiraCaioDev
============================================================= */

/* =============================================================
   Compras Organizadas Mark III Widget
============================================================= */
function toggleMarkIII() {

  const widget = document.getElementById(
    "markiii-content"
  );

  if (!widget) return;

  widget.style.display =
    widget.style.display === "block"
      ? "none"
      : "block";
}

/* =============================================================
   Compras Organizadas Mark IV Widget
   (Reservado para futura implementação)
============================================================= */
// function toggleMarkIV() {
//
//   const widget = document.getElementById(
//     "markiv-content"
//   );
//
//   if (!widget) return;
//
//   widget.style.display =
//     widget.style.display === "block"
//       ? "none"
//       : "block";
// }

/* =============================================================
   Finance Organization Widget
   (Reservado para futura implementação)
============================================================= */
// function toggleFinanceOrganization() {
//
//   const widget = document.getElementById(
//     "finance-content"
//   );
//
//   if (!widget) return;
//
//   widget.style.display =
//     widget.style.display === "block"
//       ? "none"
//       : "block";
// }

/* =============================================================
   Fim dos Widgets
============================================================= */