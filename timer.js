// Tiempo en segundos
let time = 30;

// Detecta parámetro ?url=DESTINO
const urlParams = new URLSearchParams(window.location.search);
const realURL = urlParams.get("url");

// Verificación
if (!realURL) {
    alert("Falta el parámetro ?url= en el enlace.");
}

let timer = setInterval(() => {

    document.getElementById("seconds").textContent = time;

    if (time <= 0) {
        clearInterval(timer);

        let btn = document.getElementById("continueBtn");
        btn.classList.remove("disabled");
        btn.textContent = "Ir al enlace";
        btn.href = realURL;
    }

    time--;

}, 1000);
