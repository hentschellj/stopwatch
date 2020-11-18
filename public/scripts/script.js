let hours         = document.getElementById('hours'),
    minutes       = document.getElementById('minutes'),
    seconds       = document.getElementById('seconds'),
    milliseconds  = document.getElementById('milliseconds'),
    setTime,
    currentTime,
    difference,
    timer         = 0

const startButton = document.getElementById('start-button'),
      pauseButton = document.getElementById('pause-button'),
      stopButton  = document.getElementById('stop-button'),
      resetButton = document.getElementById('reset-button')

const start = function() {
  setTime = Date.now()
  setInterval(update, 100)
}

const pause = function() {
  console.log('Pausing')
}

const stop = function() {
  console.log('Stopping')
}

const reset = function() {
  console.log('Resetting')
}

const update = function() {
  currentTime = Date.now()
  difference = currentTime - setTime

  timer += difference
  updateScreen()
  setTime = currentTime
}

const updateScreen = function() {
  milliseconds.innerText = timer/1000
}

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', stop)
resetButton.addEventListener('click', reset)