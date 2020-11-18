let hours         = document.getElementById('hours'),
    minutes       = document.getElementById('minutes'),
    seconds       = document.getElementById('seconds'),
    milliseconds  = document.getElementById('milliseconds'),
    setTime,
    currentTime,
    difference,
    timer         = 0,
    interval;

const startButton = document.getElementById('start-button'),
      pauseButton = document.getElementById('pause-button'),
      stopButton  = document.getElementById('stop-button'),
      resetButton = document.getElementById('reset-button');

const start = function() {
  setTime = Date.now();
  interval = setInterval(update, 10);
}

const pause = function() {
  clearInterval(interval);
}

const stop = function() {
  clearInterval(interval);
  timer = 0;
}

const reset = function() {
  timer = 0;
  updateScreen();
}

const update = function() {
  currentTime = Date.now();
  difference = currentTime - setTime;

  timer += difference;
  updateScreen();
  setTime = currentTime;
}

const updateScreen = function() {
  let timeRaw           = timer/1000,
      timeMilliseconds  = parseInt((timeRaw % 1) * 100),
      timeSeconds       = Math.floor(timeRaw),
      timeMinutes       = Math.floor(timeSeconds/60),
      timeHours         = Math.floor(timeMinutes/60);
  
  milliseconds.innerText = twoDigits(timeMilliseconds);
  seconds.innerText = twoDigits(timeSeconds);
  minutes.innerText = twoDigits(timeMinutes);
  hours.innerText = twoDigits(timeHours);
}

const twoDigits = function(number) {
  let numString = number.toString();
  if (numString.length < 2) {
    return '0' + numString;
  } else {
    return numString;
  }
}

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);