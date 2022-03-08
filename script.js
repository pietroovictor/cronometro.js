var hour = 0;
var min = 0;
var sec = 0;

var time = 1000; // quantos milesimos valem 1 segundo
var stopwatch;

function start(){
    stopwatch = setInterval(() => {timer()}, time);
}

function pause(){
    clearInterval(stopwatch);
}

function stop(){
    clearInterval(stopwatch);
    hour = 0;
    min = 0;
    sec = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer(){

    sec++;

    if (sec == 60){
        sec = 0;
        min ++;

        if (min == 60){
            min = 0;
            hour ++;
        }
    }


    var format =  (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
    document.getElementById('counter').innerText = format;
}