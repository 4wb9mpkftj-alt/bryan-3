// Manejo básico de música y utilidades

function reproducir(id) {
    document.getElementById(id).play();
}

function pausar(id) {
    document.getElementById(id).pause();
}

function regresar() {
    window.location.href = "index.html";
}