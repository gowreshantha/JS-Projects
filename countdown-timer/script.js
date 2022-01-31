
function countdown(){
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var nextNewYear = currentYear + 1;

    var newYear = new Date("01/01/"+nextNewYear);

    let diffTime = Math.abs(newYear - currentDate);

    //Days
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("days").innerHTML = diffDays;

    //Seconds -- Convert ms to seconds
    let seconds = diffTime / 1000;

    //Hours
    let hours = parseInt(seconds / 3600); //3600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    document.getElementById("hours").innerHTML = hours;

    //Minutes
    let minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
    document.getElementById("mins").innerHTML = minutes;

    //Keep only seconds not extracted to minutes:
    seconds = parseInt(seconds % 60);
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(countdown, 1000);




