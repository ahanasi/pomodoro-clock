const display = document.querySelector(".display");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
let session = 2;
let countdown;

play.addEventListener('click', function () {

    countdown = setInterval(function () {
        session -= 1;
        console.log(session);
        if(session == 0){
            resetTimer();
        }
    }, 1000);
});

pause.addEventListener('click', function () {
    console.log("Pause");
    clearInterval(countdown);
});

function resetTimer(){
    clearInterval(countdown);
    session = 25;
}
