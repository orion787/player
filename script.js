const audio = document.querySelector('.audio')
const playPauseBtn = document.querySelector('.play-pause-btn')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const autoplayBtn = document.querySelector('.autoplay-btn')
const progressBar = document.querySelector('.progress-bar')
const volumeBar = document.querySelector('.volume-bar')
const playPauseIcon = playPauseBtn.querySelector('i')
const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('.fa-ellipsis-h')
const modalClose = document.querySelector('.modal__close')

let isAutoplay = false

playPauseBtn.addEventListener('click', () => {
	if (audio.paused || audio.ended) {
		audio.play()
	} else {
		audio.pause()
	}
})

audio.addEventListener('play', () => {
	playPauseIcon.classList.remove('fa-play')
	playPauseIcon.classList.add('fa-pause')
})

audio.addEventListener('pause', () => {
	playPauseIcon.classList.remove('fa-pause')
	playPauseIcon.classList.add('fa-play')
})

audio.addEventListener('timeupdate', () => {
	progressBar.value = (audio.currentTime / audio.duration) * 100
})

audio.addEventListener('ended', () => {
	if (isAutoplay) {
		audio.play() // Повторно проигрывает трек, если включен автоплей
	}
})

progressBar.addEventListener('input', () => {
	audio.currentTime = (progressBar.value / 100) * audio.duration
})

volumeBar.addEventListener('input', () => {
	audio.volume = volumeBar.value / 100
})

autoplayBtn.addEventListener('click', () => {
	isAutoplay = !isAutoplay
	autoplayBtn.classList.toggle('active')

	// Изменение цвета кнопки в зависимости от состояния
	if (isAutoplay) {
		autoplayBtn.style.backgroundColor = '#137A7F' // Синий цвет для включенного состояния
	} else {
		autoplayBtn.style.backgroundColor = '#808080' // Серый цвет для выключенного состояния
	}
})

prevBtn.addEventListener('click', () => {
	let songId = 1
	window.location.pathname = `audio/all/`
})

nextBtn.addEventListener('click', () => {
	let songId = 1
	window.location.pathname = `audio/all/`
})

modalOpen.addEventListener('click', () => {
	modal.classList.add('modal_active')
})

modalClose.addEventListener('click', () => {
	modal.classList.remove('modal_active')
})
