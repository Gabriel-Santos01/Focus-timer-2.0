import { play, pause, stop, plus, minus, min, sec} from './selectors.js'
import { timeSeted } from '../../app.js'

export function playPause() {
  if (sec.textContent != '00') {
    play.classList.toggle('hidden')
    pause.classList.toggle('hidden')
    stop.classList.remove('hidden')
  } else {
    play.classList.toggle('hidden')
    stop.classList.toggle('hidden')
  }
}

export function reset() {
  play.classList.remove('hidden')
  pause.classList.remove('hidden')
  stop.classList.add('hidden')
}

export function clearDisplay() {
  min.innerHTML = String(timeSeted).padStart(2, '0')
  sec.innerHTML = '00'

  plus.disabled = false
  minus.disabled = false
  pause.disabled = true
}

export function timeEnd() {
  timeFinish.play()
}

const timeFinish = new Audio(
  'https://pomofocus.io/audios/alarms/alarm-wood.mp3'
)