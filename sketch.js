var snowflakes =[];

function preload(){
  bgImage = loadImage("snow1.jpg");

}
function setup() {
  createCanvas(800, 400);
   for (var i = 0; i < 15; i++) {
     snowflakes.push(new SnowFlakes());
   }

}

function draw() {
  background(bgImage);
   for (var i = 0; i < snowflakes.length; i++) {
     snowflakes[i].display();
     snowflakes[i].update();
   }

}