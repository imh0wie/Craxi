import Background from "./background";
import Taxi from "./car/taxi";
import Score from "./score";
import * as Util from "./util";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.options = {
      game: this,
    };
    this.background = new Background(this.ctx);
    this.score = new Score(this);
    this.buildings = Util.generateBuildings("left", ctx).concat(Util.generateBuildings("right", ctx));
    this.laneLines = [].concat(Util.generateLaneLine(1, ctx)).concat(Util.generateLaneLine(2, ctx)).concat(Util.generateLaneLine(3, ctx)).concat(Util.generateLaneLine(4, ctx));
    // this.steadyObjects = [].concat(this.buildings).concat(this.laneLines); // steady in reality (.concat(this.buildings))
    this.randomCars = [];
    this.taxi = new Taxi({ 
      lane: 3,
    });
    this.inGame = false;
    this.paused = false;
    this.collided = false;
    this.steadyVelocity = 9;
    this.randomVelocity = 7;
    this.time = 0;
    this.fontSize = 36;
    this.animate = this.animate.bind(this);
    // this.drawLogo = this.drawLogo.bind(this);
    this.draw = this.draw.bind(this);
    this.run = this.run.bind(this);
  }

  // animateKeyActions() {
  //   requestAnimationFrame = window.requestAnimationFrame ||
  //                           window.mozRequestAnimationFrame || 
  //                           window.webkitRequestAnimationFrame ||
  //                           window.myRequestAnimationFrame;
  //   requestAnimationFrame(this.keyActions);
  // }

  collisionDetector() {
    this.randomCars.forEach((car) => {
      const xRange = [car.posX, car.posX + car.width];
      const yRange = [car.posY, car.posY + car.height];
      if (Util.inRange(this.taxi.posX, xRange) && Util.inRange(this.taxi.posY, yRange) ||
          Util.inRange(this.taxi.posX + this.taxi.width, xRange) && Util.inRange(this.taxi.posY + this.taxi.height, yRange) ) {
          this.collided = true;
          this.inGame = false;
          this.paused = true;
      }
    })
  }

  updateLevel() {
    if (this.score.time <= 20) {
      this.level = "I";
      // this.steadyVelocity = 12.5;
      // this.randomVelocity = 10;
    } else if (this.score.time <= 40) {
      this.level = "II";
      // this.steadyVelocity = 15;
      // this.randomVelocity = 12.5;
    } else if (this.score.time <= 60) {
      this.level = "III";
      // this.steadyVelocity = 17.5;
      // this.randomVelocity = 15;
    } else if (this.score.time <= 100) {
      this.level = "IV";
      // this.steadyVelocity = 20;
      // this.randomVelocity = 17.5;
      
    } else if (this.score.time <= 160) {
      this.level = "V";
      // this.steadyVelocity = 22.5;
      // this.randomVelocity = 20;
    } else {
      this.level = "VI";
      // this.steadyVelocity = 25;
      // this.randomVelocity = 22.5;
    }
  }

  moveBuildings(velocity) {
    this.buildings.forEach((building) => {
      building.move(velocity)
      if (building.posY >= 1425) {
        building.posY = -600;
        // this.buildings.unshift();
      }
    })
  }

  moveLaneLines(velocity) {
    this.laneLines.forEach((grid) => {
      grid.move(velocity)
      if (grid.posY >= 1050) {
        grid.posY = -355;
      }
    })
  }

  moveSteadyObjects(velocity) {
    // this.steadyObjects.forEach((object) => {
    //     // debugger
    //     object.move(velocity);
    //     if (typeof object === "Building") {
    //       if (building.posY >= 1425) {
    //         object.posY = -1050;

    //       }
    //     } else { 
    //       if (object.posY >= 1050) {
    //         object.posY = -425;
    //       }
    //     }
    //     // if(object.posY >= 1050 ) {
    //     //   debugger
    //     //   object.posY = -425;
    //     //   // this.steadyObjects.unshift(this.steadyObjects.pop());
    //     // }
    // });
    this.moveBuildings(velocity);
    this.moveLaneLines(velocity);
  }

  generateCars(level) {
    const scoreCheckpoints = {
      I: 50,
      II: 25,
      III: 0,
      IV: -25,
      V: -50,
      VI: -75,
    };
    if (this.randomCars.length === 0) {
      this.randomCars.push(Util.generateCar(this.taxi.lane, this.level, false));
    } else if (this.randomCars[this.randomCars.length - 1].posY >= scoreCheckpoints[level]) {
      this.randomCars.push(Util.generateCar(this.taxi.lane, this.level, true));
    }
  }


  moveRandomCars(velocity) {
    this.randomCars.forEach((car) => {
        car.move(velocity);
    });
  }

  step(steadyVelocity, randomVelocity) {
    this.collisionDetector();
    this.updateLevel();
    if (this.inGame && !this.paused) {
      switch (this.level) {
        case "I":
          this.steadyVelocity *= Math.pow(1.05, 1/600);
          this.randomVelocity *= Math.pow(1.05, 1/600);
          break;
        case "II":
          this.steadyVelocity *= Math.pow(1.05, 1/600);
          this.randomVelocity *= Math.pow(1.05, 1/600);
          break;
        case "III":
          this.steadyVelocity *= Math.pow(1.1, 1/600);
          this.randomVelocity *= Math.pow(1.1, 1/600);
          break;
        case "IV":
          this.steadyVelocity *= Math.pow(1.1, 1/600);
          this.randomVelocity *= Math.pow(1.1, 1/600);
          break;
        case "V":
          this.steadyVelocity *= Math.pow(1.15, 1/600);
          this.randomVelocity *= Math.pow(1.15, 1/600);
          break;
      }
    }
    this.moveSteadyObjects(steadyVelocity);
    this.moveRandomCars(randomVelocity);
  }

  animate() {
    let velocity;
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.myRequestAnimationFrame;
    // this.ctx.clearRect(0, 0, 725, 600);
    if (!this.inGame && !this.paused) {
      this.time += 1;
      this.step(this.steadyVelocity, this.randomVelocity);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && !this.paused) {
      this.step(this.steadyVelocity, this.randomVelocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && this.paused) {
      this.step(this.steadyVelocity, this.randomVelocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      window.cancelAnimationFrame(this.animate);
      this.pauses += 1;
    } else if (!this.inGame && this.paused) {
      window.cancelAnimationFrame(this.animate);
    }
  }

  drawStartScreen() {
    this.logo = new Image();
    this.logo.onload = () => {
      this.ctx.drawImage(this.logo, 0, 0);
    }
    this.logo.src = './assets/images/logo.png'; 
    const time = this.time % 120;
    if (Util.inRange(time, [0, 59])) {
      // this.ctx.fill();
      this.ctx.fillStyle = "white";
      this.ctx.font = "36px Verdana";
      this.ctx.strokeStyle = "";
      this.ctx.textAlign = "center";
      this.ctx.fillText("Press P to start the game", 362.5, 450);  
    }
  }

  drawPauseScreen() {
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.font = "30px Verdana";
    this.ctx.fillText("Press P to resume the game", 362.5, 250);
    this.ctx.fillText("Press Q to quit the game", 362.5, 350);
  }

  drawOverScreen() {
    this.ctx.fill();
    this.ctx.font = "36px Verdana";
    this.ctx.textAlign = "center";
    this.ctx.fillText("GAME OVER", 362.5, 250);
    this.ctx.fillText("Press M to return to menu", 362.5, 350);
  }

  drawLevel() {
    this.ctx.fillStyle = "black";
    this.ctx.fillText("LEVEL " + this.level, 75, 40);
    if (this.fontSize >= 24) {
      this.fontSize *= Math.pow(2/3, 1/60);
    }
    switch (this.score.time) {
      case 20:
        this.fontSize = 36;
        break;
      case 40:
        this.fontSize = 36;
        break;
      case 60:
        this.fontSize = 36;
        break;
      case 100:
        this.fontSize = 36;
        break;
      case 160:
        this.fontSize = 36;
        break;
    }
  }
  
  draw() {
    this.background.draw(this.ctx, this);
    this.buildings.forEach((building, i) => {
      building.draw(i % building.colors.length);
    })
    this.laneLines.forEach((grid) => {
      grid.draw();
    })
    if (!(!this.inGame && !this.paused)) {
      this.drawLevel();
      this.score.draw(this.ctx);
    }
    
    this.randomCars.forEach((car, i) => {
      car.draw(this.ctx, i);
    })
    this.taxi.draw(this.ctx);
    if (!this.inGame && !this.paused) {
      // this.drawLogo();
      this.drawStartScreen();
    } else if (this.inGame && this.paused) {
      this.drawPauseScreen();
    } else if (!this.inGame && this.paused) {
      this.drawOverScreen();
    }
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