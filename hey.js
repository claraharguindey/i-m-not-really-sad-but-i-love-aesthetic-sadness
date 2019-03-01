function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
    stroke(0); // <-- this code draw 
  } else {
    fill(0);
    stroke(255);
  }
  ellipse(mouseX, mouseY, 200, 200);
  fill(0);
  noStroke();


}

