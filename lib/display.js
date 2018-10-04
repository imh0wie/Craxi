import Background from "./background";
import Game from "./game";


class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
    // this.game.draw(ctx);
    this.inGame = this.game.inGame;
    this.paused = this.game.paused;
    debugger
  }

  // keyHandlers() {
  //   let pPressed = false;
  //   if (this.game.inGame) {
  //     let leftPressed = false;
  //   }
  //   if (this.game.inGame) {
  //     let rightPressed = false;
  //   }
  //   document.addEventListener('keydown', keyDownHandler, false);
  //   document.addEventListener('keyup', keyUpHandler, false);
  // }

  // keyDownHandler(e) {
  //   switch (e.keyCode) {
  //     case 37:
  //       if (this.game.inGame) leftPressed = true;
  //     case 39:
  //       if (this.game.inGame) rightPressed = true;
  //     case 80:
  //       pPressed = true;
  //   }
  // }

  // keyUpHandler(e) {
  //   switch (e.keyCode) {
  //     case 37:
  //       if (this.inGame) leftPressed = false;
  //     case 39:
  //       if (this.inGame) rightPressed = false;
  //     case 80:
  //       pPressed = false;
  //   }
  // }

  drawMenuScreen() {
    // const img = document.getElementById("road");
    // this.ctx.fillRect(10, 10, 100, 100);
    // this.ctx.fillStyle = "black";
    // this.ctx.fill();
    // this.ctx.drawImage(img, 132.5, 0);
  }

  draw(ctx) {
    // ctx.fillRect(0, 0, 10, 500);
    // ctx.fillStyle = "black";
    // ctx.fill();
    this.game.draw(ctx);
  }
}

export default Display;