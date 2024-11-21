// Control background music
const audio = document.getElementById('background-music');
audio.volume = 0.4;

// Stop music after 25 seconds
setTimeout(() => {
  audio.pause();
}, 25000);