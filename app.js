let timeNow;
let finalTime;
let setIntervalForShowTimer;

let stopBtn = document.getElementById("stopBtn");
stopBtn.setAttribute("disabled", "");

let resetBtn = document.getElementById("resetBtn");
resetBtn.setAttribute("disabled", "");

function start() {
    timeNow = Date.now();
    //  console.log(timeNow);
    let timeWithGMT = new Date(timeNow);
    let timeWithoutGMT = timeWithGMT.toLocaleTimeString();
    // console.log(timeWithoutGMT);

    let timeStarted = document.getElementById("timeStarted");

    let alert = document.querySelector(".alert");
    alert.innerHTML = ` <div class="rrr alert alert alert-dismissible fade show" role="alert">
    <strong>Timer Started!</strong> Your timer is started at exact time ${timeWithoutGMT} 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    // timeStarted.value = timeWithoutGMT;

    let stopBtn = document.getElementById("stopBtn");
    stopBtn.removeAttribute("disabled", "");

    setIntervalForShowTimer = setInterval(() => {
        let timeForPass = Date.now() - timeNow;
        let showTimer = document.getElementById("showTimer");
        showTimer.innerHTML = showTime(timeForPass);
    }, 1000);
}

function stop() {
    let stopBtn = document.getElementById("stopBtn");
    stopBtn.setAttribute("disabled", "");

    let resetBtn = document.getElementById("resetBtn");
    resetBtn.removeAttribute("disabled", "");

    clearInterval(setIntervalForShowTimer);

    if (timeNow !== 0) {
        let timeStop = Date.now();
        let timeWithGMT = new Date(timeStop);
        let timeWithoutGMT = timeWithGMT.toLocaleTimeString();
        // console.log(timeStop);

        finalTime = timeStop - timeNow;
        //    console.log(finalTime/1000);

        let alert = document.querySelector(".alert");
        alert.innerHTML = ` <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Timer Stopped! </strong> Your timer has exactly turned off at ${timeWithoutGMT} 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;

        let showTimer = document.querySelector("#showTimer");
        showTimer.setAttribute("class", "highlight");
    } else {
        console.log("nannnaa");
    }
}

function reset() {
    let showTimer = document.getElementById("showTimer");
    showTimer.innerText = "00:00:00";

    timeNow = 0;

    let resetBtn = document.getElementById("resetBtn");
    resetBtn.setAttribute("disabled", "");

    let alert = document.querySelector(".alert");
    alert.innerHTML = ``;

    // let showTimer = document.querySelector('#showTimer');
    showTimer.removeAttribute("class", "highlight");
}

function showTime(finalTime) {
    let timeInMilliSec = finalTime;

    let timeInSec = timeInMilliSec / 1000;
    timeInSecFloor = Math.floor(timeInSec);
    let ss = timeInSecFloor.toString().padStart(2, "0");

    let timeInMin = timeInSec / 60;
    timeInMinFloor = Math.floor(timeInMin);
    let mm = timeInMinFloor.toString().padStart(2, "0");

    let timeInHr = timeInMin / 60;
    timeInHrFloor = Math.floor(timeInHr);
    let hh = timeInHrFloor.toString().padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
}
