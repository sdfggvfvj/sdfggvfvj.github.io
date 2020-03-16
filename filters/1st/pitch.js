let mic;
let audioContext;
let pitch;

let crepe;
const voiceLow = 100;
const voiceHigh = 500;
let audioStream;

// Circle variables
let circleSize = 42;
const scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Text variables
let goalNote = 0;
let currentNote = '';
let currentText = '';
let textCoordinates;

function setup() {
  createCanvas(410, 320);
  background(240 ,0 ,0);
  textCoordinates = [width / 2, 30];
  gameReset();
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
}

function startPitch() {
    pitch = ml5.pitchDetection('http://localhost:8080/libs/pitch.model/', audioContext , mic.stream, modelLoaded);

}

function modelLoaded() {
  select('#status').html('Model Loaded');
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      let midiNum = freqToMidi(frequency);
      currentNote = scale[midiNum % 12];
      select('#currentNote').html(currentNote);
    }
    getPitch();
  })
}

function draw() {
  // Goal Circle is Blue
  noStroke();
  fill(0, 0, 255);
  goalHeight = map(goalNote, 0, scale.length - 1, 0, height);
  ellipse(width / 2, goalHeight, circleSize, circleSize);
  fill(255);
  text(scale[goalNote], (width / 2) - 5, goalHeight + (circleSize / 6));
  // Current Pitch Circle is Pink
  if (currentNote) {
    currentHeight = map(scale.indexOf(currentNote), 0, scale.length - 1, 0, height);
    fill(255, 0, 255);
    ellipse(width / 2, currentHeight, circleSize, circleSize);
    fill(255);
    text(scale[scale.indexOf(currentNote)], (width / 2) - 5, currentHeight + (circleSize / 6));
    // If target is hit
    if (dist(width / 2, currentHeight, width / 2, goalHeight) < circleSize / 2) {
      hit(goalHeight, scale[goalNote]);
    }
  }
}

function gameReset() {
  goalNote = round(random(0, scale.length - 1));
  select('#target').html(scale[goalNote])
}

function hit(goalHeight, note) {
  noLoop();
  background(240);
  fill(138, 43, 226);
  ellipse(width / 2, goalHeight, circleSize, circleSize);
  fill(255);
  text(note, width / 2, goalHeight + (circleSize / 6));
  fill(50);
  select('#hit').html('Nice!')
  gameReset();
}
