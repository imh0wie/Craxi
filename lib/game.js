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
    this.collided = false;
    this.background = new Background(this.ctx);
    this.score = new Score(this);
    this.buildings = Util.generateBuildings("left", ctx).concat(Util.generateBuildings("right", ctx));
    this.laneLines = [].concat(Util.generateLaneLine(1, ctx)).concat(Util.generateLaneLine(2, ctx)).concat(Util.generateLaneLine(3, ctx)).concat(Util.generateLaneLine(4, ctx));
    this.steadyObjects = [].concat(this.buildings).concat(this.laneLines); // steady in reality
    this.randomCars = [];
    this.taxi = new Taxi({ 
      lane: 2,
    });
    this.levels = ["I", "II", "III", "IV", "V"];
    this.inGame = false;
    this.paused = false;
    this.pauses = 0;
    this.velocity = 92.5;
    this.controllers = {
      left: false,
      right: false,
      p: false,
    };
    this.keyDownHandler = this.keyDownHandler.bind(this);
    // this.keyUpHandler = this.keyUpHandler.bind(this);
    this.keyHandlers();
    // this.keyActions = this.keyActions.bind(this);
    // this.moveTaxi = this.moveTaxi.bind(this);
    // debugger
    this.animate = this.animate.bind(this);
    this.drawStartScreen = this.drawStartScreen.bind(this);
    this.drawPauseScreen = this.drawPauseScreen.bind(this);
    this.drawOverScreen = this.drawOverScreen.bind(this);
    this.draw = this.draw.bind(this);
    this.run = this.run.bind(this);
  }

  keyHandlers() {
    document.addEventListener('keydown', this.keyDownHandler, false);
    // document.addEventListener('keyup', this.keyUpHandler, false);
  }

  keyDownHandler(e) {
    debugger
    switch (e.keyCode) {
      case 80:
        if (!this.inGame && !this.paused) {
          this.inGame = true;
        } else if (this.inGame && !this.paused) {
          this.paused = true;
        } else if (this.inGame && this.paused) {
          this.paused = false;
          this.animate();
        } else if (!this.inGame && this.paused){
          this.inGame = false;
          this.paused = false;
          const game = new Game(this.ctx);
          game.animate();
        }
        break;
      case 82:
        if (this.inGame && this.paused) {
          this.ctx.clearRect(0, 0, 725, 600);
          const game = new Game(this.ctx);
          game.animate();
        }
      case 37:
        if (this.inGame && !this.paused) {
          if (this.taxi.posX > 142.5) {
            window.requestAnimationFrame(this.taxi.move(92.5 * -1));
          }
        }
      break;
      case 39:
        if (this.inGame && !this.paused) {
          if (this.taxi.posX < 512.5) {
            window.requestAnimationFrame(this.taxi.move(92.5));
          }
        }
        break;
      default:
        break;
    }
  }
  
  // keyDownHandler(e) {
  //   switch (e.keyCode) {
  //     case 80:
  //     debugger
  //       // this.pauses += 1;
  //       this.controllers.p = true;
  //       debugger
  //       break;
  //     case 37:
  //       this.controllers.left = true;
  //     break;
  //     case 39:
  //       this.controllers.right = true;
  //     break;
  //     default:
  //       break;
  //   }
  // }

  // keyUpHandler(e) {
  //   switch (e.keyCode) {
  //     // case 80:
  //     //   // this.pauses += 1;
  //     //   this.controllers.p = false;
  //     //   break;
  //     case 37:
  //       this.controllers.left = false;
  //     break;
  //     case 39:
  //       this.controllers.right = false;
  //     break;
  //     default:
  //       break;
  //   }
  // }

  // keyActions() {
  //   debugger
  //   if (!this.inGame && !this.paused && this.controllers.p) {
  //     this.inGame = true;
  //     debugger
  //   } else if (this.inGame && !this.paused) {
  //     if (this.controllers.p) {
  //       this.paused = true;
  //     } else if (this.controllers.left) {
  //       this.taxi.move(this.velocity * -1);
  //     } else if (this.controllers.right) {
  //       this.taxi.move(this.velocity);
  //     }
  //     this.velocity *= 0.9;
  //   } else if (this.inGame && this.paused) {
  //     if (this.controllers.p) {
  //       this.paused = false;
  //     } 
  //   } else if (!this.inGame && this.paused && e.keyCode === 80) {
  //     this.inGame = true;
  //   }
  // }

  animateKeyActions() {
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.myRequestAnimationFrame;
                            debugger
    requestAnimationFrame(this.keyActions);
  }

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

  // restart() {
  //   // this.score = new Score();
  //   this.inGame = true;
  //   this.paused = false;
  // }

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
    this.randomCars.forEach((car) => {
        car.move(velocity);
    });
  }

  step(velocity) {
    // this.keyActions();
    // if (!this.inGame && this.pauses === 0) this.inGame = false;
    this.collisionDetector();
    // this.score.startIncrement(this);
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
    // this.ctx.clearRect(0, 0, 725, 600);
    if (!this.inGame && !this.paused) {
      velocity = 12.5;
      this.step(velocity);
      // this.generateCars(this.level);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && !this.paused) {
      velocity = 12.5;
      this.step(velocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
      console.log("Started!")
    } else if (this.inGame && this.paused) {
      velocity = 12.5;
      this.step(velocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      window.cancelAnimationFrame(this.animate);
      this.pauses += 1;
      console.log("Paused");
    } else if (!this.inGame && this.paused) {
      window.cancelAnimationFrame(this.animate);
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

  drawStartScreen() {
    // const img = document.getElementById("road");
    this.ctx.fillRect(0, 0, 700, 600);
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("Press P to start the game", 362.5, 300);
  }

  drawPauseScreen() {
    this.ctx.fillRect(0, 0, 700, 600);
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("Press P to resume the game", 362.5, 250);
    this.ctx.strokeText("Press R to restart the game", 362.5, 350);
  }

  drawOverScreen() {
    this.ctx.fillRect(0, 0, 700, 600);
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("GAME OVER", 362.5, 250);
    this.ctx.strokeText("Press P to return to menu", 362.5, 350);
  }

  draw() {
    if (!this.inGame && !this.paused) {
      this.drawStartScreen();
    } else if (this.inGame && this.paused) {
      this.drawPauseScreen();
    } else if (!this.inGame && this.paused) {
      this.drawOverScreen();
    }
    this.background.draw(this.ctx, this);
    this.buildings.forEach((building, i) => {
      building.draw(i % building.colors.length);
    })
    this.score.draw(this.ctx, this);
    this.laneLines.forEach((grid) => {
      grid.draw();
    })
    
    this.randomCars.forEach((car, i) => {
      car.draw(this.ctx, i);
    })
    this.taxi.draw(this.ctx);
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