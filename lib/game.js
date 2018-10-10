import * as Util from "./util";
import Background from "./background";
// import Grid from "./grid";
// import Car from "./car/car";
import Taxi from "./car/taxi";
import car from "./car/car";
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
    this.laneLines = [].concat(Util.generateLaneLine(1, ctx)).concat(Util.generateLaneLine(2, ctx)).concat(Util.generateLaneLine(3, ctx)).concat(Util.generateLaneLine(4, ctx));
    // options[posX], options[posY], options[width], options[height], options[velocityX], options[velocityY], options[wheelDist]
    this.steadyObjects = [].concat(this.buildings).concat(this.laneLines); // steady in reality
    this.randomCars = [];
    this.taxi = new Taxi({ 
      lane: 2,
    });
    this.levels = ["I", "II", "III", "IV", "V"];
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
        // debugger
        if (object.posY >= 1050) {
          object.posY = -425;
          //   // this.steadyObjects.unshift(this.steadyObjects.pop());
        }
        // if(object.posY >= 1050 ) {
        //   debugger
        //   object.posY = -425;
        //   // this.steadyObjects.unshift(this.steadyObjects.pop());
        // }
        object.move(velocity);
    });
  }

  updateLevel() {
    this.level = this.levels[0];
  //   if (this.score.score < 30) {
  //     this.level = this.levels[0];
  //   } else if (this.score.score < 80) {
  //     this.level = this.levels[1];
  //   } else if (this.score.score < 80 + 25 * 1000 / 300) {
  //     this.level = this.levels[2];
  //   } else if (this.score.score < 80 + 25 * 1000 / 300 + 150) {
  //     this.level = this.levels[3];
  //   } else {
  //     this.level = this.levels[4]
  //   }
  }

  generateCars(level) {
    const scoreCheckpoints = {
      I: 50,
      II: 25,
      III: 0,
      IV: -25,
      V: -50,
    }
    // debugger
    if (this.randomCars.length === 0) {
      this.randomCars.push(Util.generateCar());
    // } else if (this.randomCars.length === 10) {
    //   this.randomCars.shift();
    //   // debugger
    //   this.randomCars.push(Util.generateCar());
    } else if (this.randomCars[this.randomCars.length - 1].posY >= scoreCheckpoints[level]) {
      this.randomCars.push(Util.generateCar());
    }
  }


  moveRandomCars(velocity) {
    debugger
    this.randomCars.forEach((car) => {
        car.move(velocity);
    });
  }

  step(velocity) {
    this.moveSteadyObjects(velocity);
    this.updateLevel();
    // this.generateCars(this.level);
    this.moveRandomCars(velocity);
  }

  animate() {
    let velocity;
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.myRequestAnimationFrame;
    if (!this.inGame && !this.paused) {
      velocity = 10;
      this.step(velocity);
      this.generateCars(this.level);
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
    this.laneLines.forEach((grid) => {
      grid.draw();
    })
    this.taxi.draw(this.ctx);
    this.randomCars.forEach((car, i) => {
      car.draw(this.ctx, i);
    })
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
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.myRequestAnimationFrame;
    requestAnimationFrame(this.animate);
  }
}

export default Game;