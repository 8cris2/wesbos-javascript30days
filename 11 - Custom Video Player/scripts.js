/* Get all  elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */

function togglePlay() {
  
  // when this function is called it will 
  // trigger a play or pause method that 
  // is linked to the video element
  
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  
}

function updateButton () {
  const icon = this.paused ? '►' : '❚ ❚';
  // change the text displayed on the screen
  // when the play/pause button is clicked.
  toggle.textContent = icon;
  console.log('Update button clicked');
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay); // togglePlay triggers the video player
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay); // togglePlay triggers the video player