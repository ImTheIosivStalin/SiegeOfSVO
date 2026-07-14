const container = document.getElementById("explosion-container");
const popup = document.getElementById("cooldown-popup");

let nextExplosion = 0;

function showCooldown(text, x, y) {

    popup.textContent = text;

    popup.style.left = x + "px";
    popup.style.top = y + "px";

    popup.classList.add("show");

    clearTimeout(popup.timer);

    popup.timer = setTimeout(() => {
        popup.classList.remove("show");
    }, 1500);
}

document.addEventListener("contextmenu", function (e) {

    e.preventDefault();

    const now = Date.now();

    if (now < nextExplosion) {

        const sec = Math.ceil((nextExplosion - now) / 1000);

        const m = Math.floor(sec / 60);
        const s = sec % 60;

        showCooldown(
            `Перезарядка: ${m}:${String(s).padStart(2, "0")}`,
            e.clientX,
            e.clientY
        );

        return;
    }

    nextExplosion = now + 120000;

    const blast = document.createElement("div");

    blast.className = "explosion";

    blast.style.left = e.clientX + "px";
    blast.style.top = e.clientY + "px";

    container.appendChild(blast);

    document.body.classList.add("shake");

    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 250);

    setTimeout(() => {
        blast.remove();
    }, 800);

});