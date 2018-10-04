import Background from "./background";
// import Car from "./car/car";
// import Taxi from "./car/taxi";
// import Sedan from "./car/sedan";
// import Suv from "./suv";
// import Building from "./building/building";
// import Commercial from "./building/commercial";
// import Church from "./building/church";
// import LaneLines from "./lane_lines";

class Game {
  // new Commercial(17.5, -50, 90, 100, 100, 50)
  constructor(ctx) {
    this.ctx = ctx;
    // debugger
    this.background = new Background(ctx, this);
    // debugger
    // this.taxi = new Taxi(315, 470, 70, 110, 90, 0, 70); // <-90->
    // this.buildingsHash = {
    //   commericial: 50,
    //   church: 50,
    // };
    // this.buildings = [];
    // this.collided = false;
    // this.velocity = 2;
    // this.score = 0;
    this.inGame = false;
    this.paused = false;
  }

  // keyHandlers() {
  //   let leftPressed = false;
  //   let rightPressed = false;
  //   document.addEventListener('keydown', keyDownHandler, false);
  //   document.addEventListener('keyup', keyUpHandler, false);
  // }

  // keyDownHandler(e) {
  //   if(e.keyCode == 37) {
  //     leftPressed = true;
  //   }
  //   else if(e.keyCode == 39) {
  //     rightPressed = true;
  //   }
  // }

  // keyUpHandler() {
  //   if(e.keyCode == 37) {
  //     leftPressed = false;
  //   }
  //   else if(e.keyCode == 39) {
  //     rightPressed = false;
  //   }
  // }

  // animateBeforeStart() {

  // }

  // scoreIncrementation() {
  //   const timeCheckpointI = 15;
  //   const timePeriodI = 500;
  //   const timeCheckpointII = 35; 
  //   const timePeriodII = 400;
  //   const timeCheckpointIII = 60; 
  //   const timePeriodIII = 300;
  //   const timeCheckpointIV = 90;
  //   const timePeriodIV = 200; 
  //   // const timeCheckpointV = 125;
  //   const timePeriodV = 100;

  //   while (inGame) {
  //     if (this.score <= timeCheckpointI * 1000 / timePeriodI) {
  //       startIncrement(timePeriodI);
  //     } else if (this.score <= timeCheckpointII * 1000 / timePeriodII) {
  //       startIncrement(timePeriodII);
  //     } else if (this.score <= timeCheckpointII * 1000 / timePeriodIII) {
  //       startIncrement(timePeriodIII);
  //     } else if (this.score <= timeCheckpointIV * 1000 / timePeriodIV) {
  //       startIncrement(timePeriodIV);
  //     } else {
  //       startIncrement(timePeriodV);
  //     }
  //   }
  // }

  // startIncrement(millisecs) {
  //   setTimeout(incrementScore, millisecs);
  // }

  // incrementScore(millisecs) {
  //   this.score++;
  //   this.startIncrement(millisecs);
  // }

  // moveTaxi(direction) {
  //   if (this.taxi.posX > 135 && direction === "left") {
  //     this.taxi.posX -= this.taxi.velocityX;
  //   } else if (this.taxi.posX < 495 && direction === "right") {
  //     this.taxi.posX += this.taxi.velocityX;
  //   }
  // }

  // collided?() {
  //   if (this.collided) {
      
  //   }

  // }
  draw(ctx) {
    debugger
    this.background.draw(ctx);
    // if (this.inGame === false && this.paused === false) {
    //   this.ctx.globalAlpha = 0.4;
    // } else if (this.paused) {
    //   this.ctx.globalAlpha = 0.6;
    // } else if (this.inGame && this.paused) {
    //   this.ctx.globalAlpha = 0.6;
    // } else if (this.inGame === false && this.paused) {
    //   this.ctx.globalAlpha = 0.6;
    // } else {
    //   this.ctx.globalAlpha = 1;
    // }

    // this.ctx.fillStyle = "#ededed";
    // this.ctx.fillRect(0, 0, 725, 600);
    // this.ctx.fill();
    // this.background.draw(ctx);
  }
}

export default Game;