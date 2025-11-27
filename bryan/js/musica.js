// ACTIVAR FADE-IN DE MÚSICA CUANDO LA PÁGINA CARGA
window.addEventListener("load", () => {

    const a = document.getElementById("musica");
    if (!a) return;

    // volumen inicial
    a.volume = 0;

    // algunos navegadores no dejan reproducir sin clic, pero lo intentamos
    a.play().catch(() => {});

    // fade-in suave
    let v = 0;
    const fade = setInterval(() => {
        if (v >= 0.35) {
            clearInterval(fade);
        } else {
            v += 0.02;
            a.volume = v;
        }
    }, 140);
});


// ACTIVACIÓN MANUAL (cuando el usuario da clic)
document.addEventListener("click", () => {
    const a = document.getElementById("musica");
    if (!a) return;

    if (a.paused) {
        a.play();
    }

    // Si existe la indicación, la ocultamos
    const cartel = document.getElementById("click-indicacion");
    if (cartel) {
        cartel.classList.add("indicacion-oculta");
        setTimeout(() => cartel.remove(), 900);
    }
});