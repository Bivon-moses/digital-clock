//calling showtime function at every second
setInterval(showtime,1000);

//defining showtime function
function showtime() {
    //Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";


//SETTING TIME FOR 12 HOURS FORMAT
    if (hour >=12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    
    hour = 
        hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        let currentTime =
            hour +
            ":" +
            min +
            ":" +
            sec +
            am_pm;

// Displaying time
document.getElementById(
    "clock"
).innerHTML = currentTime;
}

showtime();
    