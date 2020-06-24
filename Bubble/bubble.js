class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    if (this.x <= 900 && this.x >= 20 && this.y >= 20 && this.y <= 360) {
      this.x ++;
      this.y ++;
    }
  }
  show() {
    stroke(220,250,140);
    strokeWeight(7);
    fill(220, 250, 140, 50);
    ellipse(this.x, this.y, this.r*2);
  }
}