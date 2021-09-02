const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

setInterval(handelSecondTick, 1000);

function handelSecondTick() {
    let date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    let secondsDeg = ((seconds / 60) * 360) + 90;
    let minutesDeg = ((minutes / 60) * 360) + 90;
    let hoursDeg = ((hours / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`
}