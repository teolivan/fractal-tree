

let angle;
let slider;

function setup() {
  createCanvas(900, 800);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(50);
  angle = slider.value();
  stroke(100,220,70);
  strokeWeight(0.5);
  translate(width * 0.5, height);
  branch(250);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  
  if (len > PI) {
    push();
    rotate(angle);
    branch(len * (2/3));
    pop();
    push();
    rotate(-angle);
    branch(len * (2/3));
    pop();
  }
}
