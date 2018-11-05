class Score {
  constructor() {
    this.dt = 0;
    this.time = 0;
    this.points = 0;
    this.fontSize = 36;
    this.startIncrement = this.startIncrement.bind(this);
  }

  startIncrement() {
    this.oldTime = this.time;
    this.dt += 1;
    this.time = this.dt / 30;
    if (Math.floor(this.time) !== Math.floor(this.oldTime)) {
      if (this.time <= 20) { // 10s
        this.points += 1;
      } else if (this.time <= 40) { // 20s
        this.points += 1.2;
      } else if (this.time <= 60) { // 30s
        this.points += 1.4;
      } else if (this.time <= 100) { // 50s
        this.points += 1.6;
      } else if (this.time <= 160) { // 80s
        this.points += 1.8;
      } else {
        this.points += 2;
      }
    }    
  }

  draw(ctx) {
    ctx.font = "24px Verdana";
    ctx.fillStyle = "black";
    ctx.fillText("SCORE " + Math.round(this.points), 650, 40);
    this.startIncrement();
  }
}
  
  export default Score;
  