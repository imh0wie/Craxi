import Car from "./car/car";
import Taxi from "./car/taxi";
import Sedan from "./car/sedan";
import Suv from "./suv";
import Building from "./building";
import Commercial from "./commercial";
import Church from "./church";
import LaneLines from "./lane_lines";


class Game {
  constructor() {
    this.taxi = new Taxi(315, 470, 70, 110, 90, 0, 70); // <-90->
    this.buildings = []
    this.collided = false;
    this.velocity = 2;
    this.score = 0;
    this.inGame = false;
    this.paused = false;
  }

  scoreIncrementation() {
    const timeCheckpointI = 15;
    const timePeriodI = 500;
    const timeCheckpointII = 35; 
    const timePeriodII = 400;
    const timeCheckpointIII = 60; 
    const timePeriodIII = 300;
    const timeCheckpointIV = 90;
    const timePeriodIV = 200; 
    // const timeCheckpointV = 125;
    const timePeriodV = 100;

    while (inGame) {
      if (this.score <= timeCheckpointI * 1000 / timePeriodI) {
        startIncrement(timePeriodI);
      } else if (this.score <= timeCheckpointII * 1000 / timePeriodII) {
        startIncrement(timePeriodII);
      } else if (this.score <= timeCheckpointII * 1000 / timePeriodIII) {
        startIncrement(timePeriodIII);
      } else if (this.score <= timeCheckpointIV * 1000 / timePeriodIV) {
        startIncrement(timePeriodIV);
      } else {
        startIncrement(timePeriodV);
      }
    }
  }

  startIncrement(millisecs) {
    setTimeout(incrementScore, millisecs);
  }

  incrementScore(millisecs) {
    this.score++;
    this.startIncrement(millisecs);
  }

  moveTaxi(direction) {
    if (this.taxi.posX > 135 && direction === "left") {
      this.taxi.posX -= this.taxi.velocityX;
    } else if (this.taxi.posX < 495 && direction === "right") {
      this.taxi.posX += this.taxi.velocityX;
    }
  }



  collided?() {
    if (this.collided) {
      this.blocks.forEach(block => {
        if (this.snake.tail[0].positionX - block.positionX >= 0 && (this.snake.tail[0].positionX - block.positionX) <= block.width) {
          stillColliding = true;
        }
      });
      this.inCollision = stillColliding;
    }

    this.checkPoints();
    this.checkBlocks();
  }
  
  



}
