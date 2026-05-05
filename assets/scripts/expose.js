// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // select all the elements from the HTML
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  // initialize the confetti library
  const jsConfetti = new JSConfetti();


  // dropdown menu event listener
  hornSelect.addEventListener('change', function() {
    // get the value of the selected option (air-horn, car-horn, or party-horn)
    let selectedHorn = hornSelect.value;

    // update the image and audio values
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });


  // volume slider event listener
  volumeSlider.addEventListener('input', function() {
    let volumeValue = volumeSlider.value;

    // set the actual audio volume of the slider
    audioElement.volume = volumeValue / 100;

    // update the volume icon based on the range
    if (volumeValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else if (volumeValue >= 67) {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });


  // play button event listener
  playButton.addEventListener('click', function() {
    // play the audio
    audioElement.play();

    // if the Party Horn is currently selected, shoot confetti
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}