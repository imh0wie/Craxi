class Score {
  constructor() {
    this.dt = 0;
    this.time = 0;
    this.points = 0;
    // this.incrementScore = this.incrementScore.bind(this);
    // this.increment = this.increment.bind(this);
    // this.incrementScore = this.incrementScore.bind(this);
    this.startIncrement = this.startIncrement.bind(this);
  }

  // incrementScore() {
  //     this.score++;
  //     this.increment(millisecs);
  // }
        
  // increment(millisecs) {
  //     setInterval(this.incrementScore(), millisecs);
  // }

  
  // startIncrement(game) {
  //     const timePeriodI = 500;
  //     const timeCheckpointI = 15;
  //     const scoreCheckpointI = timeCheckpointI * 1000 / timePeriodI;
  //     const timePeriodII = 400;
  //     const timeCheckpointII = 35; 
  //     const scoreCheckpointII = scoreCheckpointI + (timeCheckpointII - timeCheckpointI) * 1000 / timePeriodII;
  //     const timePeriodIII = 300;
  //     const timeCheckpointIII = 60; 
  //     const scoreCheckpointIII = scoreCheckpointII + (timeCheckpointIII - timeCheckpointII) * 1000 / timePeriodIII;
  //     const timePeriodIV = 200; 
  //     const timeCheckpointIV = 90;
  //     const scoreCheckpointIV = scoreCheckpointIII + (timeCheckpointIV - timeCheckpointIII) * 1000 / timePeriodIV;
  //     const timePeriodV = 100;
  //     debugger
  //     while (game.inGame && !game.paused) {
  //       if (this.score <= scoreCheckpointI) {
  //         this.score += this.scoreIncrementor;
  //         // this.increment(timePeriodI);
  //       } else if (this.score <= scoreCheckpointII) {
  //         this.score += this.scoreIncrementor;
  //         // this.increment(timePeriodII);
  //      } else if (this.score <= scoreCheckpointIII) {
  //         this.score += this.scoreIncrementor;
  //         // this.increment(timePeriodIII);
  //       } else if (this.score <= scoreCheckpointIV) {
  //         this.score += this.scoreIncrementor;
  //         // this.increment(timePeriodIV);
  //       } else {
  //         this.score += this.scoreIncrementor;
  //         // this.increment(timePeriodV);
  //       }
  //     }
  // }

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
  