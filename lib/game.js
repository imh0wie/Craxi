import * as Util from "./util";
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
  constructor(ctx) {
    this.ctx = ctx;
    this.options = {
      game: this,
    };
    // debugger
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
    this.background = new Background(this.ctx);
    this.buildings = Util.generateBuildings("left", ctx).concat(Util.generateBuildings("right", ctx));
    this.hehe = [1];
    this.steadyObjects = [].concat(this.buildings); // steady in reality
    this.inGame = false;
    this.paused = false;
    this.lastTime = 0;
    this.animate = this.animate.bind(this);
  }

  keyHandlers() {
    let leftPressed = false;
    let rightPressed = false;
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
  }

  keyDownHandler(e) {
    if(e.keyCode == 37) {
      leftPressed = true;
    }
    else if(e.keyCode == 39) {
      rightPressed = true;
    }
  }

  keyUpHandler() {
    if(e.keyCode == 37) {
      leftPressed = false;
    }
    else if(e.keyCode == 39) {
      rightPressed = false;
    }
  }

  moveSteadyObjects(velocity) {
    this.steadyObjects.forEach((object) => {
        debugger
        if(object.posY >= 825) {
          debugger
          object.posY = 17.5;
          this.steadyObjects.unshift(this.steadyObjects.pop());
        }
        object.move(velocity);
    });
}

  moveMovingObjects(velocity) {
      this.steadyObjects.forEach((object) => {
          object.move(velocity);
      });
  }

  step(velocity) {
    this.moveSteadyObjects(velocity);
  }

  animate() {
    let velocity;
    if (!this.inGame && !this.paused) {
      velocity = 4;
      this.step(velocity);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && !this.paused) {
      this.step(velocity);
      this.draw(this.ctx);
      console.log("Started!")
    } else if (this.inGame && this.paused) {
      this.step(velocity);
      this.draw(this.ctx);
      console.log("Paused");
    } else if (!this.inGame && !this.paused) {
      this.step(velocity);
      this.draw(this.ctx);
      console.log("Game Over");
    }
  }

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
  draw() {
    this.background.draw(this.ctx);
    this.buildings.forEach((building, i) => {
      building.draw(i % building.colors.length);
    })
    debugger
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
  }

  run() {
    requestAnimationFrame(this.animate);
  }
}

export default Game;