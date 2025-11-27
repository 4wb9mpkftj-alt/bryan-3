let acertijos = [
    { p: "Es la cantidad de veces que nos dijimos amor por wats", r: "8129" },
    { p: "cuantos hijos vamos a tener", r: "2" },
    { p: "como se llama nuestra cancion", r: "nuts" }
];

let idx = 0;

window.onload = () => cargar();

function cargar() {
    pregunta.innerText = acertijos[idx].p;
    respuesta.value = "";
    mensajeCorrecto.innerText = "";
    
    // ocultar botón siguiente
    btnSiguiente.style.display = "none";

    // OCULTAR la animación para preparar la siguiente
    const efecto = document.getElementById("efectoCorrecto");
    efecto.classList.remove("efecto-activo");
}

function verificar() {
    if (respuesta.value.toLowerCase().includes(acertijos[idx].r)) {
        mensajeCorrecto.innerText = "AMOR SI, te amo";
        // EFECTO ESTÉTICO LIL PEEP × $UICIDEBOY$
        const efecto = document.getElementById("efectoCorrecto");
        efecto.classList.remove("efecto-activo"); // reinicio de animación
        void efecto.offsetWidth; // truco para reiniciar animación
        efecto.classList.add("efecto-activo");
        btnSiguiente.style.display = "inline-block";
    } else {
        mensajeCorrecto.innerText = "No…:(";
    }
}

function siguiente() {
    idx++;
    if (idx >= acertijos.length) {
        window.location.href = "final.html";
    } else {
        cargar();
    }
}