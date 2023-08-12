// Global variables
let mediaStream;
let mediaRecorder;
let recordedChunks = [];
let recordedBlob = null;

// Elements
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const saveButton = document.getElementById('saveButton');
const recordedVideo = document.getElementById('recordedVideo');

// Event listeners
startButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);
saveButton.addEventListener('click', saveRecording);

// Start recording function
async function startRecording() {
  try {
    // Request screen recording permission
    mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true
    });

    // Disable start button and enable stop button
    startButton.disabled = true;
    stopButton.disabled = false;
    saveButton.disabled = true;

    // Create MediaRecorder instance
    mediaRecorder = new MediaRecorder(mediaStream);

    // Add data available event listener
    mediaRecorder.addEventListener('dataavailable', handleDataAvailable);

    // Start recording
    mediaRecorder.start();
  } catch (error) {
    console.error('Error accessing media devices:', error);
  }
}

// Stop recording function
function stopRecording() {
  // Enable start button and disable stop button
  startButton.disabled = false;
  stopButton.disabled = true;
  saveButton.disabled = false;

  // Stop recording
  mediaRecorder.stop();

  // Stop screen capture
  mediaStream.getVideoTracks()[0].stop();
  mediaStream.getAudioTracks()[0].stop();
}

// Handle data available event
function handleDataAvailable(event) {
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
  }
}

// Save recording function
function saveRecording() {
  if (recordedBlob !== null) {
    // Create a temporary <a> element
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(recordedBlob);
    downloadLink.download = 'recording.webm';

    // Append the <a> element to the DOM and simulate click to trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up the <a> element
    document.body.removeChild(downloadLink);

    // Save recording to local storage
    const videoData = {
      name: 'recording.webm',
      data: recordedBlob
    };
    localStorage.setItem('recordedVideo', JSON.stringify(videoData));
  }
}

// Handle stop event
mediaRecorder.addEventListener('stop', () => {
  // Create a Blob from recorded chunks
  recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });

  // Set the recorded video source
  recordedVideo.src = URL.createObjectURL(recordedBlob);

  // Clear recorded chunks
  recordedChunks = [];
});
