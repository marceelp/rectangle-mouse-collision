export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function mouseCollision(firstRect, secondRect) {
  if (
    firstRect.x + firstRect.width >= secondRect.x &&
    firstRect.x <= secondRect.x + secondRect.width &&
    firstRect.y + firstRect.height >= secondRect.y &&
    firstRect.y <= secondRect.y + secondRect.height
  ) {
    secondRect.color = "rgba(255, 255, 255, 0.2)";
    secondRect.velocity.x = -secondRect.velocity.x;
    secondRect.velocity.y = -secondRect.velocity.y;
  } else {
    secondRect.color = secondRect.originalColor;
  }
}
