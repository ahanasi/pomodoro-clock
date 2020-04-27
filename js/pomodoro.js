const display = document.querySelector(".display");
const btns = document.querySelector(".btn");
const seshControl = document.querySelector(".input-session");
const breakControl = document.querySelector(".input-break"); 
const session = document.querySelector("#session");
const breakSession = document.querySelector("#break");
let timeLeft;
let sessionTime;
let isBreak = false;

resetTimer();
display.textContent = `Session: ${convertToTime(session.value*60)}`;

btns.addEventListener('click', (e) => {

  const { target } = e;

  if (target.matches("#stop")) {
    stopTimer();
    display.textContent = `Session: ${convertToTime(session.value * 60)}`;
  }

  if (target.matches("#reset")) {
    resetTimer();
    display.textContent = `Session: ${convertToTime(session.value * 60)}`;
  }

  if (target.matches("#play")) {
    session.disabled = true;
    breakSession.disabled = true;
    countdown();
  }

  if (target.matches("#pause")) {
    console.log("Pause");
    clearInterval(sessionTime);
  }

});

seshControl.addEventListener('click', (e) => {

  const {target} = e;

  if(target.matches("#inc-session")){
    session.stepUp();
    timeLeft = session.value * 60;
    display.textContent = `Session: ${convertToTime(session.value*60)}` ;
  }

  if(target.matches("#dec-session")){
    session.stepDown();
    timeLeft = session.value * 60;
    display.textContent = `Session: ${convertToTime(session.value*60)}` ;
  }

});

breakControl.addEventListener('click', (e) => {
  const {target} = e;

  if(target.matches("#inc-break")){
    breakSession.stepUp();
    timeLeft = session.value * 60;
    display.textContent = `Session: ${convertToTime(session.value*60)}` ;
  }

  if(target.matches("#dec-break")){
    breakSession.stepDown();
    timeLeft = session.value * 60;
    display.textContent = `Session: ${convertToTime(session.value*60)}` ;
  }

});

function countdown() {

  sessionTime = setInterval(function () {

    timeLeft--;

    display.textContent = (!isBreak) ? `Session: ${convertToTime(timeLeft)}`
      : `Break: ${convertToTime(timeLeft)}`;

    console.log(`session: ${convertToTime(timeLeft)}`);
    if (timeLeft == 0) {
      isBreak = !isBreak;
      if (!isBreak) {
        timeLeft = session.value * 60;
        console.log("Session Start");
      } else {
        timeLeft = breakSession.value * 60;
        console.log('Break Start');
      }
    }
  }, 1000);
}

function stopTimer() {
  session.disabled = false;
  breakSession.disabled = false;
  timeLeft = session.value * 60;
  isBreak = false;
  clearInterval(sessionTime);
}

function resetTimer() {
  breakSession.value = 5;
  session.value = 25;
  stopTimer();
}

function convertToTime(sec) {
  let timeInMins = Math.floor(sec / 60);
  let timeInSec = sec % 60;
  return `${timeInMins.toString().padStart(2, '0')}:${timeInSec.toString().padStart(2, '0')}`
}


