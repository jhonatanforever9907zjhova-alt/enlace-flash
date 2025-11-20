let time = 30;

const urlParams = new URLSearchParams(window.location.search);
const realURL = urlParams.get("url");

if (!realURL) {
    alert("Error: falta el parámetro url=");
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
