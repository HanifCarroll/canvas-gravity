import Ball from "./Ball";
import { canvas, c, randomIntFromRange } from "./utils";

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravitySlider = document.getElementById("gravity");
const friction = 0.95;
const ballSlider = document.getElementById("balls");

// Event Listeners
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

addEventListener("click", () => init());

ballSlider.addEventListener("input", () => init());

// Implementation
let balls;

function init() {
  balls = [];

  for (let i = 0; i < ballSlider.valueAsNumber; i++) {
    const radius = randomIntFromRange(5, 50);
    const x = randomIntFromRange(radius, canvas.width - radius);
    const y = randomIntFromRange(radius, canvas.height - radius);
    const dx = randomIntFromRange(-2, 2);
    const dy = randomIntFromRange(-5, 5);
    const gravity = gravitySlider.valueAsNumber;

    balls.push(new Ball(x, y, dx, dy, radius, gravity, friction));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
  balls.forEach(ball => {
    ball.update();
  });
}

init();
animate();
