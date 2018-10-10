class Score {
    constructor() {
      this.score = 0;
      this.incrementScore = this.incrementScore.bind(this);
      this.increment = this.increment.bind(this);
    }

    incrementScore(millisecs) {
        this.score++;
        this.increment(millisecs);
    }
          
    increment(millisecs) {
        setTimeout(this.incrementScore, millisecs);
    }

    
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
    
        while (game.inGame) {
          if (this.score <= scoreCheckpointI) {
            this.increment(timePeriodI);
          } else if (this.score <= scoreCheckpointII) {
            this.incrementincrement(timePeriodII);
         } else if (this.score <= scoreCheckpointIII) {
            this.increment(timePeriodIII);
          } else if (this.score <= scoreCheckpointIV) {
            this.increment(timePeriodIV);
          } else {
            this.increment(timePeriodV);
          }
        }
    }


    draw(ctx) {
      ctx.font = "24px Serif";
      ctx.fillStyle = "white";
      ctx.strokeText("SCORE " + this.score, 600, 20);

    }
  }
  
  export default Score;
  