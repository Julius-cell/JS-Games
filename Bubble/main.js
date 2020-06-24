let bubble1;
let bubble2;

function setup() {
  createCanvas(1280, 400);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 50, 20);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
