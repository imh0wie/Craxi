import Background from "./background";
import Game from "./game";


class Display {
  constructor(ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.background = new Background(ctx);
    this.game = Game.new(ctx);
  }

  keyHandlers() {
    let pPressed = false;
    if (this.game.inGame) {
      let leftPressed = false;
    }
    if (this.game.inGame) {
      let rightPressed = false;
    }
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
  }

  keyDownHandler(e) {
    switch (e.keyCode) {
      case 37:
        if (this.game.inGame) leftPressed = true;
      case 39:
        if (this.game.inGame) rightPressed = true;
      case 80:
        pPressed = true;
    }
  }

  keyUpHandler(e) {
    switch (e.keyCode) {
      case 37:
        if (this.inGame) leftPressed = false;
      case 39:
        if (this.inGame) rightPressed = false;
      case 80:
        pPressed = false;
    }
  }

  drawMenuScreen() {
    // const img = document.getElementById("road");
    this.ctx.fillStyle = "#ededed";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.drawImage(img, 132.5, 0);
  }

  drawInitial() {
    this.ctx.fillStyle = "#ededed";
    this.ctx.fillRect(0, 0, 455, 700);
    this.ctx.fill();
    this.ctx.font = "30px Do Hyeon";
    this.ctx.strokeStyle = "cyan";
    this.ctx.textAlign = "center";
    this.ctx.strokeText(`Hit Space Bar to begin the game`, 225, 350);
  }

  draw(ctx) {
    if ()
      this.background.draw(ctx);
  }
}

export default Display;