// ALERTA
function mostrarAlerta() {
    alert("Gracias por tu gran apoyo");
}

// ACORDEÓN
let acordeones = document.querySelectorAll(".acordeon");

acordeones.forEach(btn => {
    btn.addEventListener("click", function() {
        let panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
// FORMULARIO
document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;

    alert("Gracias " + nombre + ", tu mensaje fue enviado");

    this.reset();
});

// BOTÓN SUBIR
function subirArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
