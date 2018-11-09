import { canvas, c, getRandomColor } from "./utils";

export default class Ball {
  constructor(x, y, dx, dy, radius, gravity, friction) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.gravity = gravity;
    this.friction = friction;
    this.color = getRandomColor();
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  addGravity() {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * this.friction;
    } else {
      this.dy += this.gravity;
    }

    if (
      this.x + this.radius + this.dx > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.dx = -this.dx * this.friction;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  update() {
    this.addGravity();
    this.draw();
  }
}
