let cuervos = 0;
let activo = false;

function iniciar() {
    if (activo) return;
    activo = true;

   const m = document.getElementById("musicaJuego");
    if (m) m.play();

    setInterval(() => {
        let c = document.createElement("div");
        c.innerHTML = "🦇";
        c.style.position = "fixed";
        c.style.top = "-40px";
        c.style.left = Math.random()*90 + "vw";
        c.style.fontSize = "42px";
        c.style.zIndex = "9999";
        c.style.cursor = "pointer";

        c.style.animation = `caer ${4 + Math.random()*3}s linear`;

        c.onclick = () => morir(c);

        document.body.appendChild(c);

        setTimeout(() => c.remove(), 7000);
    }, 900);
}

function morir(c) {
    cuervos++;
    contador.innerText = "murcielagos muertos: " + cuervos;

    c.style.animation = "muerte 0.6s forwards";
    setTimeout(() => c.remove(), 600);

    if (cuervos === 3) mensaje.innerText = "Amor que pro, recolecta mas";
    if (cuervos === 7) mensaje.innerText = "el dios gamer";
    if (cuervos === 12) mensaje.innerText = "Te amo me quiero casar contigo";
}