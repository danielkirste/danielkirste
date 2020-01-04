
const targetDate = new Date("2020-05-08");
const timeZoneOffset = targetDate.getTimezoneOffset() / 60;
const countdown = document.getElementById("countdown");

const countdownFun = _ => {
    const difference = +targetDate - +new Date();
    // + before new Date is shorthand to cast the object as an Int

    const parts = {
        Tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Stunden: Math.floor((difference / (1000 * 60 * 60)) % 24 + timeZoneOffset),
        Minuten: Math.floor((difference / (1000 * 60)) % 60),
        Sekunden: Math.floor((difference / 1000) % 60)
    };

    const remaining = Object.keys(parts)
        .map(part => `<p>${parts[part] || "0"} ${part}</p>`)
        .join(" ");

    countdown.innerHTML = remaining;
}

setInterval(countdownFun, 1000);