// TRANSICIÓN VHS AL ENTRAR A UNA PÁGINA
window.addEventListener("load", () => {
    const t = document.createElement("div");
    t.className = "vhs-transition";
    document.body.appendChild(t);

    t.style.animation = "vhsIn 0.6s forwards";
});

// TRANSICIÓN AL SALIR
function irA(pagina) {
    const t = document.createElement("div");
    t.className = "vhs-transition";
    document.body.appendChild(t);

    t.style.animation = "vhsOut 0.6s forwards";

    setTimeout(() => {
        window.location.href = pagina;
    }, 550);
}