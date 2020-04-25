const display = document.querySelector(".display");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const session = document.querySelector("#session");
const breakSession = document.querySelector("#break");
const times = document.querySelectorAll("#time");
let result = session.value;
let sessionTime;
let isBreak = false;

resetTimer();
session.addEventListener('change', function(){
    result = session.value;
});

play.addEventListener('click', function () {
    session.disabled = true;
    breakSession.disabled = true;
    countdown();
});

pause.addEventListener('click', function () {
    console.log("Pause");
    clearInterval(sessionTime);
});

stopBtn.addEventListener('click', stopTimer);

resetBtn.addEventListener('click', resetTimer);


function countdown(){
    sessionTime = setInterval(function(){

        result -= 1;
        
        display.textContent =  (!isBreak) ? `Session: ${result}`
                                          : `Break: ${result}`;

        console.log(`session: ${result}`);
        if (result == 0){
            isBreak = !isBreak;
            if(!isBreak){
                result = session.value;
                console.log("Session Start");
            } else {
                result = breakSession.value;
                console.log('Break Start');
            }
        }
    },1000);
}

function resetTimer(){
    session.disabled = false;
    breakSession.disabled = false;
    session.value = 25;
    breakSession.value = 5;
    clearInterval(sessionTime);
}

function stopTimer(){
    session.disabled = false;
    breakSession.disabled = false;
    clearInterval(sessionTime);
    display.textContent = `Session: ${session.value}`;
}












