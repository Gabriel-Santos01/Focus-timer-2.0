import {
  play,
  pause,
  stop,
  plus,
  minus,
  min,
  sec,
  btnRain,
  btnTree,
  btnThemes,
  btnStore,
  btnFire,
  rainRage,
  treeRage,
  storeRage,
  fireRage,
  fireRangeValue,
  rainRangeValue,
  treeRangeValue,
  storeRangeValue,
} from "./assets/js-modules/selectors.js"
import { countdown, timerTimeOut } from "./assets/js-modules/countdown.js"
import {
  clearDisplay,
  reset,
  playPause,
} from "./assets/js-modules/utilities.js"

pause.disabled = true
export let timeSeted = String(min.textContent).padStart(2, "0")

play.addEventListener("click", () => {
  if (sec.textContent == "00" && min.textContent == "00") {
    sec.textContent = "00"
    min.textContent = "00"
  } else {
    playPause()
    countdown()
    plus.disabled = true
    minus.disabled = true
    pause.disabled = false
  }
})

stop.addEventListener("click", () => {
  reset()
  clearTimeout(timerTimeOut)
  clearDisplay()
})

pause.addEventListener("click", () => {
  playPause()
  clearTimeout(timerTimeOut)
})

plus.addEventListener("click", () => {
  if (min.textContent >= "95") {
    min.textContent = "95"
  } else {
    timeSeted = Number(timeSeted) + 5
    min.innerHTML = String(timeSeted).padStart(2, "0")
  }
})

minus.addEventListener("click", () => {
  min.innerHTML = String(timeSeted).padStart(2, "0")
  if (min.textContent == "00" && sec.textContent == "00") {
    min.textContent = "05"
    sec.textContent = "00"
  } else {
    timeSeted -= 5
  }
})

const rainSound = new Audio("./assets/sounds/rain.mp3")
const treeSound = new Audio("./assets/sounds/forest.mp3")
const storeSound = new Audio("./assets/sounds/coffeeShop.mp3")
const fireSound = new Audio("./assets/sounds/fire.mp3")

fireRage.addEventListener("input", function () {
  let value = fireRage.value
  fireSound.volume = (value / 100).toFixed(1)
  fireRangeValue.textContent = value + "%"
})

treeRage.addEventListener("input", function () {
  let value = treeRage.value
  treeSound.volume = (value / 100).toFixed(1)
  treeRangeValue.textContent = value + "%"
})

storeRage.addEventListener("input", function () {
  let value = storeRage.value
  storeSound.volume = (value / 100).toFixed(1)
  storeRangeValue.textContent = value + "%"
})

rainRage.addEventListener("input", function () {
  let value = rainRage.value
  rainSound.volume = (value / 100).toFixed(1)
  rainRangeValue.textContent = value + "%"
})

btnThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    if (theme.querySelector("input").dataset.theme == "rain") {
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
    }
    if (theme.querySelector("input").dataset.theme == "coffeeStore") {
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
    }
    if (theme.querySelector("input").dataset.theme == "tree") {
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
    }
    if (theme.querySelector("input").dataset.theme == "fire") {
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
    }
  })
})
