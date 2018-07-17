/* Get all  elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */

function togglePlay () {
  
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

function skip () {
  
  // dataset comes from the data-set html element attribute
  // data is a made up html element attribute followed by a 
  // dash with the name of the data element
  console.log('this.dataset: ', this.dataset); 
  // parseFloat converts string into a number;
  video.currentTime += parseFloat(this.dataset.skip);
  
}

function handleRangeUpdate () {
  
  // video[property of the video object] that you want to update.
  video[this.name] = this.value;
  
  console.log('handleRangeUpdate: ', video[this.name]);
  console.log('handleRangeUpdate: ', this.name);
  console.log('handleRangeUpdate: ', this.value);
}

function handleProgress () {
  // currentTime and duration are properties of the video object
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub (e) {
  
  // what is the width of the progressbar * the video.duration property
  let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

/* Hook up the event listeners */

// togglePlay triggers the video player
video.addEventListener('click', togglePlay); 
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// We want the handleProgress to run as often 
// as possible so we listen for the video to
// emit a timeupdate event and when it happens we run handleProgress
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay); // togglePlay triggers the video player
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// use mousemove for realtime update of the handleRangeUpdate method.
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;

progress.addEventListener('click', scrub);
// when user moves their mouse, check the 
// mouseDown variable, if it is true do the scrub
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDOwn = true);
progress.addEventListener('mouseup', () => mouseDOwn = false);