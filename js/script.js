stopwatch = document.querySelector("#stopwatch");
reset_button = document.querySelector("#reset-button");
stop_button = document.querySelector("#stop-button");
start_button = document.querySelector("#start-button");

let hours = 0, minutes = 0, seconds = 0;
let pause = false;
let interval;
let click = 0;
stopwatch.innerText = "00 : 00 : 00";

start_button.addEventListener("click", function()
{
    click++;
    pause = false;

    if(click < 2){
        interval = setInterval(stopwatch_system, 1000);
    }
});

stop_button.addEventListener("click",function()
{
    pause = true;
    click = 0;
});

reset_button.addEventListener("click",function()
{
    pause = true;
    click = 0;
    hours = 0, minutes = 0, seconds = 0;
    stopwatch.innerText = "00 : 00 : 00";
})
function stopwatch_system()
{
    if(pause === true)
    {
        clearInterval(interval);
    }

    seconds++;

    if(seconds === 60)
    {
        seconds = 0;
        minutes++;
    }

    if(minutes === 60)
    {
        minutes = 0;
        hours++;
    }

    stopwatch.innerText = 
        (hours < 10 ? "0" + hours : hours) + " : " +    
        (minutes < 10 ? "0" + minutes : minutes) + " : " + 
        (seconds < 10 ? "0" + seconds : seconds);
}