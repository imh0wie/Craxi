import Background from "./background";
import Game from "./game";
import * as Util from "./util";


class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
    this.status = Util.setStatus(this.inGame, this.paused);
  }

  drawStartScreen() {
    // const img = document.getElementById("road");
    this.ctx.fillRect(0, 0, 700, 600);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("Press P to start the game", 225, 350);
  }

  drawPauseScreen() {
    this.ctx.fillRect(0, 0, 700, 600);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("Press P to resume the game", 225, 350);
    this.ctx.strokeText("Press R to restart the game", 225, 350);
  }

  drawOverScreen() {
    this.ctx.fillRect(0, 0, 700, 600);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("GAME OVER", 225, 350);
    this.ctx.strokeText("Press P to start a new game", 225, 350);
  }

  draw() {
    // if (this.status === "ready") {
      
    // } else if (this.status === "playing") {

    // } else if (this.status === "paused") {

    // } else if (this.status === "over") {

    // }
    this.game.run();
  }
}

export default Display;