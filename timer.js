let time = 30;
let label = document.getElementById("time");
let btn = document.getElementById("continueBtn");

let countdown = setInterval(() => {
    time--;
    label.textContent = time;

    if (time <= 0) {
        clearInterval(countdown);
        btn.disabled = false;
        btn.innerText = "Continuar";
    }
}, 1000);
