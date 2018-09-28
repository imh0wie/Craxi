class Car {
  constructor(posX, posY, width, height, velocityX, velocityY) {
    this.posX = posX;
    this.posY = posY; // 560
    this.width = width;
    this.height = height;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.colors = ["#b9281f", "#f24d13", "#45e68f"]
    // this.width = 70; // regular cars & taxi
    // this.height = 110; // regular cars & taxi
    // this.width = 85; // SUV
    // this.height = 120; // SUV
  }

  move() {
    this.posY += this.velocityY; // depending on building's velocity
  }
}

export default Car;
