class Car {
  constructor(options) {
    this.lane = options.lane;
    this.posY = options.posY; // 560;
    this.posXs = [142.5, 235, 327.5, 420, 512.5];
    this.posX = this.posXs[this.lane - 1];
    this.width = 70;
    this.height = 110;
    this.wheelDist = 70;
    this.colors = ["#b9281f", "#f24d13", "#45e68f"];
    // this.width = 85; // SUV
    // this.height = 120; // SUV
  }

  move(velocity) {
    this.posY += velocity;
  }
}

export default Car;
