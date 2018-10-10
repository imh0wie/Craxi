class Car {
  constructor(options) {
    this.lane = options.lane;
    this.posXs = [142.5, 235, 327.5, 420, 512.5];
    this.posX = this.posXs[this.lane];
    this.posY = options.posY; // 560
    this.colors = ["#b9281f", "#f24d13", "#45e68f"];
    // this.start = null;
    // this.width = 70; // regular cars & taxi
    // this.height = 110; // regular cars & taxi
    // this.width = 85; // SUV
    // this.height = 120; // SUV
  }


}

export default Car;
