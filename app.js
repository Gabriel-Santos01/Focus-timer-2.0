const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')

play.addEventListener('click', () => {
  playPause()
  countdown()
})

stop.addEventListener('click', () => {
  reset()
  clearTimeout(timerTimeOut)
  clearDisplay()
})

pause.addEventListener('click', () => {
  playPause()
  clearTimeout(timerTimeOut)
})

plus.addEventListener('click', () => {
  timeSeted += 5
  min.innerHTML = String(timeSeted).padStart(2, '0')
})

minus.addEventListener('click', () => {
  timeSeted -= 5
  min.innerHTML = String(timeSeted).padStart(2, '0')
})

let timeSeted = 0
let timerTimeOut

function countdown() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(min.innerHTML)
    let seconds = Number(sec.innerHTML)

    sec.textContent = String(seconds - 1).padStart(2, '0')

    if (minutes <= 0 && seconds == 1) {
      playPause()

      return
    }

    if (seconds <= 0) {
      seconds = 59

      min.textContent = String(minutes - 1).padStart(2, '0')
    }

    sec.textContent = String(seconds - 1).padStart(2, '0')

    countdown()
  }, 10)
}

function playPause() {
  play.classList.toggle('hidden')
  stop.classList.toggle('hidden')
}

function reset() {
  play.classList.toggle('hidden')
  stop.classList.toggle('hidden')
}

function clearDisplay() {
  min.innerHTML = String(timeSeted).padStart(2, '0')
  sec.innerHTML = '00'
}
