const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const autoplayBtn = document.getElementById('autoplay-btn');
const progressBar = document.getElementById('progress-bar');
const volumeBar = document.getElementById('volume-bar');
const playPauseIcon = playPauseBtn.querySelector('i');

let isAutoplay = false;

playPauseBtn.addEventListener('click', () => {
    if (audio.paused || audio.ended) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', () => {
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
});

audio.addEventListener('pause', () => {
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
});

audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
});

audio.addEventListener('ended', () => {
    if (isAutoplay) {
        audio.play(); // Повторно проигрывает трек, если включен автоплей
    }
});

progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value / 100;
});

autoplayBtn.addEventListener('click', () => {
    isAutoplay = !isAutoplay;
    autoplayBtn.classList.toggle('active');
    
    // Изменение цвета кнопки в зависимости от состояния
    if (isAutoplay) {
        autoplayBtn.style.backgroundColor = '#137A7F'; // Синий цвет для включенного состояния
    } else {
        autoplayBtn.style.backgroundColor = '#808080'; // Серый цвет для выключенного состояния
    }
});

prevBtn.addEventListener('click', () => {
    let songId = 1;
    window.location.pathname = `audio/all/`;
});

nextBtn.addEventListener('click', () => {
    let songId = 1;
    window.location.pathname = `audio/all/`;
});
