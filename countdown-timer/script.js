
function countdown(){
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var nextNewYear = currentYear + 1;
    var newYear = new Date("01/01/"+nextNewYear);

    const totalSeconds = (newYear - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById("header").innerHTML = `New Year ${nextNewYear} countdown`;
    document.getElementById("days").innerHTML = formatTime(days);
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(mins);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
}
setInterval(countdown, 1000);

//prefix 0 if < 10
function formatTime(time){
    return (time < 10) ? `0${time}`:time;
}




