const display = document.querySelector(".display");
const btns = document.querySelector(".btn");
const session = document.querySelector("#session");
const breakSession = document.querySelector("#break");
let timeLeft = session.value * 60;
let sessionTime;
let isBreak = false;

resetTimer();
display.textContent = `Session: ${convertToTime(timeLeft)}`;

session.addEventListener('change', function () {
  timeLeft = session.value * 60;
  display.textContent = `Session: ${convertToTime(timeLeft)}`;
});

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


