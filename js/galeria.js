let fotoActual = 1;

function siguiente() {
    ocultarTodas();
    fotoActual++;
    if (fotoActual > 3) fotoActual = 1;

    const foto = document.getElementById("foto" + fotoActual);

    // activar animación cada vez
    foto.style.display = "block";
    foto.style.animation = "none";
    void foto.offsetWidth;
    foto.style.animation = "fadeIn 0.8s ease-out";
}

function ocultarTodas() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById("foto" + i).style.display = "none";
    }
}

// iniciar en foto 1
window.onload = () => {
    ocultarTodas();
    document.getElementById("foto1").style.display = "block";
};