let time = 30;

// Leer parámetro
const urlParams = new URLSearchParams(window.location.search);
const realURL = urlParams.get("url");

// Si no existe parámetro, manda a inicio
if (!realURL) {
    window.location.href = "index.html";
}

let sound = document.getElementById("finishSound");

// AntiBots: bloquea navegadores sin JS o sin userAgent válido
if (!navigator.userAgent || navigator.userAgent.length < 10) {
    document.body.innerHTML = "<h2>Acceso bloqueado (BOT detectado)</h2>";
}

// TIMER -------------------------------------------------
let timer = setInterval(() => {
    document.getElementById("seconds").textContent = time;

    if (time <= 0) {
        clearInterval(timer);

        let btn = document.getElementById("continueBtn");
        btn.classList.remove("disabled");
        btn.textContent = "Ir al enlace";
        btn.href = realURL;

        // sonido
        sound.play();
    }

    time--;
}, 1000);
