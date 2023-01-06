import { randomNumber as randomIntFromRange, mouseCollision } from "./helper.js";
const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
const c = canvas.getContext("2d");

let mouseRect;
let rectArray = [];
const mouse = {
  x: undefined,
  y: undefined,
};

addEventListener("resize", () => {
  init();
});

addEventListener("click", () => {
  rectArray = [];
  init();
});

addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Rect {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.width = randomIntFromRange(80, 150);
    this.height = this.width;
    this.color = color;
    this.originalColor = `hsl(${Math.random() * 360}, 40%, 50%)`;
    this.mouseColor = `hsl(${Math.random() * 360}, 40%, 50%)`;
    this.velocity = {
      x: randomIntFromRange(-2, 2),
      y: randomIntFromRange(-2, 2),
    };
  }

  draw() {
    c.beginPath();
    c.rect(this.x, this.y, this.width, this.height);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x + this.width > innerWidth || this.x < 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y + this.width > innerHeight || this.y < 0) {
      this.velocity.y = -this.velocity.y;
    }
  }
}

function init() {
  const numberOfRects = 20;

  mouseRect = new Rect(
    mouse.x,
    mouse.y,
    `hsl(${Math.random() * 360}, 100%, 50%)`
  );
  for (let i = 0; i < numberOfRects; i++) {
    rectArray.push(
      new Rect(
        randomIntFromRange(0, innerWidth - 150),
        randomIntFromRange(0, innerHeight - 150),
      )
    );
  }
}
init();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  mouseRect.x = mouse.x - mouseRect.width / 2;
  mouseRect.y = mouse.y - mouseRect.height / 2;
  mouseRect.update();

  for (let i = 0; i < rectArray.length; i++) {
    rectArray[i].update();
    mouseCollision(mouseRect, rectArray[i]);
  }
}
animate();

console.log(mouseCollision(mouseRect, rectArray[i]));
