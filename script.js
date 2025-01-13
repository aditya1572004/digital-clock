const WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function updateTime() {
    var now = new Date();
    
    // Display time in HH:MM:SS format
    document.getElementById("time").innerText =
        zeroPadding(now.getHours(), 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2);

    // Display date in YYYY-MM-DD DAY format
    document.getElementById("date").innerText =
        now.getFullYear() + "-" +
        zeroPadding(now.getMonth() + 1, 2) + "-" +
        zeroPadding(now.getDate(), 2) + " " +
        WEEK[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}
