class Score {
    constructor() {
        this.score = 0;
        this.scoreIncrementor = 1;
        // this.incrementScore = this.incrementScore.bind(this);
        // this.increment = this.increment.bind(this);
        // this.incrementScore = this.incrementScore.bind(this);
    }

    // incrementScore() {
    //     this.score++;
    //     this.increment(millisecs);
    // }
          
    // increment(millisecs) {
    //     setInterval(this.incrementScore(), millisecs);
    // }

    
    startIncrement(game) {
        const timePeriodI = 500;
        const timeCheckpointI = 15;
        const scoreCheckpointI = timeCheckpointI * 1000 / timePeriodI;
        const timePeriodII = 400;
        const timeCheckpointII = 35; 
        const scoreCheckpointII = scoreCheckpointI + (timeCheckpointII - timeCheckpointI) * 1000 / timePeriodII;
        const timePeriodIII = 300;
        const timeCheckpointIII = 60; 
        const scoreCheckpointIII = scoreCheckpointII + (timeCheckpointIII - timeCheckpointII) * 1000 / timePeriodIII;
        const timePeriodIV = 200; 
        const timeCheckpointIV = 90;
        const scoreCheckpointIV = scoreCheckpointIII + (timeCheckpointIV - timeCheckpointIII) * 1000 / timePeriodIV;
        const timePeriodV = 100;
        while (game.inGame === "playing") {
          if (this.score <= scoreCheckpointI) {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodI);
          } else if (this.score <= scoreCheckpointII) {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodII);
         } else if (this.score <= scoreCheckpointIII) {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodIII);
          } else if (this.score <= scoreCheckpointIV) {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodIV);
          } else {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodV);
          }
        }
    }


    draw(ctx, game) {
        ctx.font = "24px Serif";
        ctx.fillStyle = "white";
        ctx.strokeText("SCORE " + this.score, 600, 20);
        this.startIncrement(game);
        console.log(this.score);
    }
  }
  
  export default Score;
  