
function mostrarModal(texto) {
        document.getElementById("textoModal").innerText = texto;
    new bootstrap.Modal(document.getElementById("miModal")).show();
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

tooltipTriggerList.forEach(el => {
    new bootstrap.Tooltip(el);
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", e.clientX - rect.left + "px");
    card.style.setProperty("--y", e.clientY - rect.top + "px");
    });
});

//efecto de particulas//
function mostrarModal(texto) {
    document.getElementById("textoModal").innerText = texto;
    new bootstrap.Modal(document.getElementById("miModal")).show();
}

