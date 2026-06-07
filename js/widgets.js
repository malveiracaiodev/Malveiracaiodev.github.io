/* =============================================================
   WIDGETS.JS
============================================================= */

function toggleWidget(id) {

  const widget =
    document.getElementById(id);

  if (!widget) return;

  widget.classList.toggle("active");
}

/* =============================================================
   Compras Organizadas Mark III
============================================================= */

function toggleMarkIII() {

  toggleWidget(
    "markiii-content"
  );
}