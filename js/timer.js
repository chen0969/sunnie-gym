function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

}

function trapTimer() {
    var tenMinutes = 60 * 5,
        display = $('#trap');
    startTimer(tenMinutes, display);
}

function shoulderTimer() {
    var tenMinutes = 60 * 15,
        display = $('#shoulder');
    startTimer(tenMinutes, display);
}

function absTimer() {
    var tenMinutes = 60 * 5,
        display = $('#abs');
    startTimer(tenMinutes, display);
}


function mBackTimer() {
    var tenMinutes = 60 * 5,
        display = $('#mBack');
    startTimer(tenMinutes, display);
}

function lBackTimer() {
    var tenMinutes = 60 * 5,
        display = $('#lBack');
    startTimer(tenMinutes, display);
}

function legTimer() {
    var tenMinutes = 60 * 10,
        display = $('#leg');
    startTimer(tenMinutes, display);
}