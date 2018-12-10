class Car {
  constructor(options) {
    this.lane = options.lane;
    this.posY = options.posY; // 560;
    this.posXs = [142.5, 235, 327.5, 420, 512.5];
    this.posX = this.posXs[this.lane - 1];
    this.width = 70; // suv: 85
    this.height = 110; // suv: 120
    this.wheelDist = 70;
    this.colors = ["#b9281f", "#f24d13", "#45e68f"];
  }

  move(velocity) {
    this.posY += velocity;
  }
}

export default Car;
