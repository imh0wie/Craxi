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
    this.steadyObjects = [].concat(this.buildings).concat(this.laneLines); // steady in reality
    this.randomCars = [];
    this.taxi = new Taxi({ 
      lane: 2,
    });
    this.inGame = false;
    this.paused = false;
    this.collided = false;
    this.velocity = 12.5;
    this.time = 0;
    this.animate = this.animate.bind(this);
    // this.drawLogo = this.drawLogo.bind(this);
    this.draw = this.draw.bind(this);
    this.run = this.run.bind(this);
  }

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
    if (this.score.time <= 20) {
      this.level = "I";
      this.velocity = 12.5;
    } else if (this.score.time <= 40) {
      this.level = "II";
      this.velocity = 15;
    } else if (this.score.time <= 90) {
      this.level = "III";
      this.velocity = 17.5;
    } else if (this.score.time <= 120) {
      this.level = "IV";
      this.velocity = 20;
    } else if (this.score.time <= 160) {
      this.level = "V";
      this.velocity = 22.5;
    } else {
      this.level = "VI";
      this.velocity = 25;
    }
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
    // debugger
    if (this.randomCars.length === 0) {
      this.randomCars.push(Util.generateCar());
    } else if (this.randomCars[this.randomCars.length - 1].posY >= scoreCheckpoints[level]) {
      this.randomCars.push(Util.generateCar());
    } else if (this.randomCars[this.randomCars.length - 1].posY >= scoreCheckpoints[level] / 2 && scoreCheckpoints[level] < 0) {
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
    this.updateLevel();
    this.moveSteadyObjects(velocity);
    this.moveRandomCars(velocity);
    // this.generateCars(this.level);
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
      this.step(this.velocity);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && !this.paused) {
      this.step(this.velocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
      console.log("Started!")
    } else if (this.inGame && this.paused) {
      this.step(this.velocity);
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

  drawStartScreen() {
    this.logo = new Image();
    this.logo.onload = () => {
      this.ctx.drawImage(this.logo, 0, 0);
    }
    this.logo.src = './assets/images/logo.png'; 
    debugger
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
    this.ctx.font = "24px Verdana";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("LEVEL " + this.level, 75, 40);
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
      this.score.draw(this.ctx, this);
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