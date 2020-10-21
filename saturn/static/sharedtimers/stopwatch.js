var startTime = {};
var updatedTime = {};
var difference = {};
var tInterval = {};
var savedTime = {};
var paused = {};
var running = {};

function startTimer(timerId){
  if(!running[timerId]){
    startTime[timerId] = new Date().getTime();
    tInterval[timerId] = setInterval(function() { getShowTime(timerId); }, 1000);
    paused[timerId] = false;
    running[timerId] = true;
    getShowTime(timerId)
  }
}

function pauseTimer(timerId){
  if (!difference[timerId]){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused[timerId]) {
    clearInterval(tInterval[timerId]);
    savedTime[timerId] = difference[timerId];
    paused[timerId] = true;
    running[timerId] = false;
  } else {
    startTimer(timerId);
  }
}

function resetTimer(timerId){
  clearInterval(tInterval[timerId]);
  savedTime[timerId] = 0;
  difference[timerId] = 0;
  paused[timerId] = false;
  running[timerId] = false;
  $('#' + timerId + ' .timer')[0].innerHTML = '00:00:00.00';

}

function getShowTime(timerId){

  var timerDisplay = $('#' + timerId + ' .timer')[0];  

  updatedTime = new Date().getTime();
  if (savedTime[timerId]){
    difference[timerId] = (updatedTime - startTime[timerId]) + savedTime[timerId];
  } else {
    difference[timerId] =  updatedTime - startTime[timerId];
  }

  var d = difference[timerId]
  var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((d % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((d % (1000 * 60)));

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  ////milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  // milliseconds = "000" + milliseconds
  //milliseconds = milliseconds.substr(milliseconds.length - 3, 2)
  //timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;
}