export function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let collisionDetected = false;

export function mouseCollision(firstRect, secondRect, rectArray) {
  if (
    firstRect.x + firstRect.width >= secondRect.x &&
    firstRect.x <= secondRect.x + secondRect.width &&
    firstRect.y + firstRect.height >= secondRect.y &&
    firstRect.y <= secondRect.y + secondRect.height
  ) {
    secondRect.color = "rgba(255, 0, 0, 1)";
    secondRect.velocity.x = -secondRect.velocity.x;
    secondRect.velocity.y = -secondRect.velocity.y;
    // collisionDetected = true;
  } else {
    secondRect.color = secondRect.originalColor;
    // collisionDetected = false;
  }
}

// export function mouseCollision(firstRect, secondRect) {
//   if (firstRect.x + firstRect.width >= secondRect.x && )
//   if (
//     firstRect.x <= secondRect.x + secondRect.width &&
//     firstRect.y + firstRect.height >= secondRect.y &&
//     firstRect.y <= secondRect.y + secondRect.height
//   )
// }




// export function changeDirection() {
//   if (secondRect.velocity.x > 0 && secondRect.velocity.y > 0) {
//     secondRect.velocity.x = -secondRect.velocity.x;
//     return;
//   } else if (secondRect.velocity.x < 0 && secondRect.velocity.y > 0) {
//     secondRect.velocity.y = -secondRect.velocity.y;
//     return;
//   } else if (secondRect.velocity.x < 0 && secondRect.velocity.y < 0) {
//     secondRect.velocity.x = secondRect.velocity.x;
//     return;
//   } else if (secondRect.velocity.x > 0 && secondRect.velocity.y < 0) {
//     secondRect.velocity.y = secondRect.velocity.y;
//     return;
//   }
// }
