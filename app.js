const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')

const btnThemes = document.querySelectorAll('.button')

const btnRain = document.querySelector('#rain')
const btnTree = document.querySelector('#tree')
const btnStore = document.querySelector('#store')
const btnFire = document.querySelector('#fire')

pause.disabled = true

play.addEventListener('click', () => {
  if (sec.textContent == '00' && min.textContent == '00') {
    sec.textContent = '00'
    min.textContent = '00'
  } else {
    playPause()
    countdown()
    plus.disabled = true
    minus.disabled = true
    pause.disabled = false
  }
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
  min.innerHTML = String(timeSeted).padStart(2, '0')
  if (min.textContent == '00' && sec.textContent == '00') {
    min.textContent = '00'
    sec.textContent = '00'
  } else {
    timeSeted -= 5
  }
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
      clearDisplay()
      timeAnd()

      return
    }

    if (seconds <= 0) {
      seconds = 59

      min.textContent = String(minutes - 1).padStart(2, '0')
    }

    sec.textContent = String(seconds - 1).padStart(2, '0')

    countdown()
  }, 1000)
}

function playPause() {
  if (sec.textContent != '00') {
    play.classList.toggle('hidden')
    pause.classList.toggle('hidden')
    stop.classList.remove('hidden')
  } else {
    play.classList.toggle('hidden')
    stop.classList.toggle('hidden')
  }
}

function reset() {
  play.classList.remove('hidden')
  pause.classList.remove('hidden')
  stop.classList.add('hidden')
}

function clearDisplay() {
  min.innerHTML = String(timeSeted).padStart(2, '0')
  sec.innerHTML = '00'

  plus.disabled = false
  minus.disabled = false
  pause.disabled = true
}

const resetTheme = () => {
  if (btnRain.checked == true) {
    btnFire.checked = false
    btnTree.checked = false
    btnStore.checked = false
  }
}

// btnThemes.forEach(elemento => {
//   elemento.checked = false
// })

btnFire.addEventListener('click', () => {
  btnRain.checked = false
  btnTree.checked = false
  btnStore.checked = false
  storeSound.pause()
  rainSound.pause()
  treeSound.pause()
  if (btnFire.checked == true) {
    fireSound.play()
    fireSound.loop = true
  } else {
    fireSound.pause()
  }
})

btnRain.addEventListener('click', () => {
  btnFire.checked = false
  btnTree.checked = false
  btnStore.checked = false
  storeSound.pause()
  fireSound.pause()
  treeSound.pause()
  if (btnRain.checked == true) {
    rainSound.play()
    rainSound.loop = true
  } else {
    rainSound.pause()
  }
})

btnStore.addEventListener('click', () => {
  btnFire.checked = false
  btnRain.checked = false
  btnTree.checked = false
  fireSound.pause()
  rainSound.pause()
  treeSound.pause()
  if (btnStore.checked == true) {
    storeSound.play()
    storeSound.loop = true
  } else {
    storeSound.pause()
  }
})

btnTree.addEventListener('click', () => {
  btnFire.checked = false
  btnRain.checked = false
  btnStore.checked = false
  storeSound.pause()
  rainSound.pause()
  fireSound.pause()
  if (btnTree.checked == true) {
    treeSound.play()
    treeSound.loop = true
  } else {
    treeSound.pause()
  }
})

const rainSound = new Audio('./assets/sounds/rain.mp3')
const treeSound = new Audio('./assets/sounds/forest.mp3')
const storeSound = new Audio('./assets/sounds/coffeeShop.mp3')
const fireSound = new Audio('./assets/sounds/fire.mp3')
const timeFinish = new Audio(
  'https://pomofocus.io/audios/alarms/alarm-wood.mp3'
)

function timeAnd() {
  timeFinish.play()
}

const rainRage = document.querySelector('#rainSound')
const treeRage = document.querySelector('#treeSound')
const storeRage = document.querySelector('#storeSound')
const fireRage = document.querySelector('#fireSound')

const fireRangeValue = document.querySelector('#fireRangeValue')
const rainRangeValue = document.querySelector('#rainRangeValue')
const treeRangeValue = document.querySelector('#treeRangeValue')
const storeRangeValue = document.querySelector('#storeRangeValue')

fireRage.addEventListener('input', function () {
  let value = fireRage.value
  fireSound.volume = (value / 100).toFixed(1)
  fireRangeValue.textContent = value + '%'
})

treeRage.addEventListener('input', function () {
  let value = treeRage.value
  treeSound.volume = (value / 100).toFixed(1)
  treeRangeValue.textContent = value + '%'
})

storeRage.addEventListener('input', function () {
  let value = storeRage.value
  storeSound.volume = (value / 100).toFixed(1)
  storeRangeValue.textContent = value + '%'
})

rainRage.addEventListener('input', function () {
  let value = rainRage.value
  rainSound.volume = (value / 100).toFixed(1)
  rainRangeValue.textContent = value + '%'
})
