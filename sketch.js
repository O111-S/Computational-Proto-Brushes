var song; // for song
let img; //to declare code for image
var mode1,         // screen1
    mode2 = false; //screen 2
var brushcode = 0;
var brushcounter = 1;
var brushcounterlimit = 4;

// to load media before starting the application

function preload() {
  song = loadSound("welcome.mp3");
  img = loadImage("paint.jpg");

  brushimages = [
    loadImage("smiley.png"),
    loadImage("console.png"),
    loadImage("wifi.png"),
    loadImage("keyboardimg.png"),
  ];
}

// to setup the application specific functions

function setup() {
  mode1 = true;              // initially the game has not started
  createCanvas(2000, 1000);

  textSize(49);
  fill(255, 0, 0);
  stroke(0, 0, 255);
}

// to setup welcome sound

function playsong() {
  if (song.isLoaded()) {
    song.play();
    song.noLoop();
  }
}

// to start the application

function draw() {
  clear();
  if (mode1 == true) {
    text("Press enter to start", 750, 700);     // to display "press enter to start"
    image(img, 400, 100);                       // to display welcome image
  }
  if (mode2 == true) {
    clear();
    background(255, 255, 0);
    playsong();                                 // command to play welcome song
  }
}

function keyPressed() {                        // command for mouse controls, key controls, toggle brushed 
  if (keyCode === ENTER) {
    mode2 = true;
  }

  brushcode = brushcode + 1;
  if (brushcode > 3) brushcode = 0;
}

function mousePressed() {
  image(smiley, mouseX, mouseY, 50, 50);
}

function mouseDragged() {
  incrementbrushcounter();
  if (brushcounter == 0) {
    image(brushimages[brushcode], mouseX, mouseY, 50, 50);
  }
}

function incrementbrushcounter() {
  brushcounter++;
  if (brushcounter > brushcounterlimit) {
    brushcounter = 0;
  }
}