var endDate = new Date("17 Feb , 2026  ").getTime();
var startDate = new Date().getTime();

function updateTimer() {
    var now = new Date().getTime();

    var distancePending = endDate - now;

    var months = Math.floor(distancePending/ (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor(distancePending % (1000 * 60 * 60 * 24*30)/ (1000*60*60*24));
    var hrs = Math.floor(distancePending % (1000 * 60 * 60*24) / (1000*60*60));
    var mins = Math.floor(distancePending % (1000 * 60 * 60) / (1000*60));
    var sec = Math.floor(distancePending % (1000 * 60) / (1000));


    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("mintues").innerHTML = mins;
    document.getElementById("seconds").innerHTML = sec;

}

setInterval(updateTimer, 1000);