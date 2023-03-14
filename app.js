const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')

play.addEventListener('click', () => {
  play.classList.toggle('hidden')
  stop.classList.toggle('hidden')
})

stop.addEventListener('click', () => {
  play.classList.toggle('hidden')
  stop.classList.toggle('hidden')
})

plus.addEventListener('click', () => {
  min.innerHTML = parseInt(min.innerHTML) + 5
})

minus.addEventListener('click', () => {
  min.innerHTML = parseInt(min.innerHTML) - 5
})
