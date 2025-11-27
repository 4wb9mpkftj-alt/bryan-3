const poemaTexto = document.getElementById("poemaTexto");
let texto = `En las noches donde todo calla,
hay un pensamiento que siempre vuelve:

Tú.

Eres esa chispa suave en la oscuridad,
esa presencia que el alma reconoce
sin abrir los ojos.`;

let i = 0;
let interval;

function escribir() {
    if (i < texto.length) {
        document.getElementById("poemaTexto").innerHTML += texto.charAt(i);
        i++;
    } else clearInterval(interval);
}

function pausarPoema() {
    clearInterval(interval);
}

function reanudarPoema() {
    interval = setInterval(escribir, 45);
}

window.onload = () => {
    interval = setInterval(escribir, 45);
};