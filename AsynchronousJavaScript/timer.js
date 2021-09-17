let time = 0;
let timerIdRef = null;

function prependZero(time, lowerEnd){
    return time < lowerEnd ? `0${time}`: time;
}

function transformToStringFormat(timeInSeconds){
    const seconds = timeInSeconds%60;
    const minutes = Math.floor(timeInSeconds/60)%60;
    const hrs = Math.floor(timeInSeconds/(60*60))%24;
    return `${prependZero(hrs,10)} : ${prependZero(minutes,10)} : ${prependZero(seconds,10)}`;
}

function startTimer(){
    if(timerIdRef!==null){
        return;
    }
    timerIdRef = setInterval(function(){
        time++;
        handleUpdateTime(time);
    },1000)
}

function stopTimer(){
    clearInterval(timerIdRef);
    timerIdRef = null;
}

function resetTimer(){
    stopTimer();
    time=0;
    handleUpdateTime(0);
}

function handleUpdateTime(){
    const timeElement = document.getElementById("timer");
    const timeInString = transformToStringFormat(time);
    timeElement.textContent = timeInString;
}

window.addEventListener("load",function(){
    const startElement = document.getElementById("start");
    startElement.style.backgroundColor = "yellow";
    const stopElement = document.getElementById("stop");
    stopElement.style.backgroundColor = "red";
    stopElement.style.color = "white";
    const resetElement = document.getElementById("reset");
    resetElement.style.backgroundColor = "turquoise"

    startElement.addEventListener("click",startTimer);
    stopElement.addEventListener("click",stopTimer);
    resetElement.addEventListener("click",resetTimer);
})