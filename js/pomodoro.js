const display = document.querySelector(".display");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
let session = 5;
let sessionTime;
let breakSession = 2;
let isBreak = false;

play.addEventListener('click', function () {
    countdown();
});

pause.addEventListener('click', function () {
    console.log("Pause");
    clearInterval(sessionTime);
});

function countdown(){
    sessionTime = setInterval(function(){
        session -= 1;
        console.log(`session: ${session}`);
        if (session == 0){
            // clearInterval(sessionTime);
            isBreak = !isBreak;
            if(!isBreak){
                session = 5;
                console.log("Session Start");
            } else {
                session = 2;
                console.log('Break Start');
            }
        }
    },1000);
}












