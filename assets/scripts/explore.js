// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // select all the elements from the HTML
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');
  const synth = window.speechSynthesis;

  // populate the voice dropdown with all available voices
  function loadVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // voices load asynchronously in some browsers, so call on both load and change
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;

  // talk button event listener
  talkButton.addEventListener('click', function() {
    const text = textArea.value;
    const selectedIndex = voiceSelect.value;

    // do nothing if there is no text or no voice selected
    if (!text || selectedIndex === 'select') return;

    // create the utterance with the selected voice
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices()[selectedIndex];

    // swap to open-mouthed face while speaking
    faceImage.src = 'assets/images/smiling-open.png';

    // swap back to smiling face when done speaking
    utterance.onend = function() {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}
