class Score {
  constructor() {
    this.dt = 0;
    this.time = 0;
    this.points = 0;
    this.startIncrement = this.startIncrement.bind(this);
  }

  startIncrement(game) {
    this.oldTime = this.time;
    this.dt += 1;
    this.time = this.dt / 30;
    debugger
    if (Math.floor(this.time) !== Math.floor(this.oldTime)) {
      if (this.time <= 20) {
        this.points += 1;
      } else if (this.time <= 40) {
        this.points += 1.2;
      } else if (this.time <= 90) {
        this.points += 1.4;
      } else if (this.time <= 120) {
        this.points += 1.6;
      } else if (this.time <= 160) {
        this.points += 1.8;
      } else {
        this.points += 2;
      }
    }

    
  }

  draw(ctx, game) {
    ctx.font = "24px Verdana";
    ctx.fillStyle = "black";
    ctx.fillText("SCORE " + Math.round(this.points), 650, 40);
    this.startIncrement(game);
    console.log(this.dt);
    console.log(this.time);
  }
}
  
  export default Score;
  