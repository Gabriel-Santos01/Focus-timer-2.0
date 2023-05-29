import { min, sec } from "./selectors.js"
import { playPause, clearDisplay, timeEnd } from "./utilities.js"

export let timerTimeOut
export function countdown() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(min.innerHTML)
    let seconds = Number(sec.innerHTML)

    sec.textContent = String(seconds - 1).padStart(2, "0")

    if (minutes == 0 && seconds <= 1) {
      playPause()
      clearDisplay()
      timeEnd()
      document.title = "Focus timer"

      return
    }

    if (seconds <= 0) {
      seconds = 59

      min.textContent = String(minutes - 1).padStart(2, "0")
    }

    sec.textContent = String(seconds - 1).padStart(2, "0")

    document.title = `Focus timer ${String(minutes).padStart(2, "0")}:${String(
      seconds - 1
    ).padStart(2, "0")} `

    countdown()
  }, 1000)
}
