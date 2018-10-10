import Background from "./background";
import Game from "./game";


class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
    // this.game.draw(ctx);
    // this.inGame = this.game.inGame;
    // this.paused = this.game.paused;
    this.status = this.game.status;
    debugger
  }

  keyHandlers() {
    if (this.status === "ready") {
      if (e.keycode === 80) {
        this.game.inGame = true;
      }
    } else if (this.status === "playing") {
      if (e.keycode === 80) {
        this.game.paused = true;
      } else if (e.keycode === 37) {
        this.taxi.move(-10);
      } else if (e.keycode === 39) {
        this.game.move(10);
      }
    } else if (this.status === "paused") {
      if (e.keycode === 80) {
        this.game.paused = false;;
      }
    } else if (this.status === "over") {
      if (e.keycode === 80) {
        this.game.restart();
      }
    }

    let pPressed = false;
    if (this.game.inGame) {
      let leftPressed = false;
      let rightPressed = false;
    }
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
  }

  keyDownHandler(e) {
    switch (e.keyCode) {
      case 37:
        if (this.status === "playing") leftPressed = true;
      case 39:
        if (this.status === "playing") rightPressed = true;
      case 80:
        pPressed = true;
    }
  }

  keyUpHandler(e) {
    switch (e.keyCode) {
      case 37:
        if (this.status === "playing") leftPressed = false;
      case 39:
        if (this.status === "playing") rightPressed = false;
      case 80:
        pPressed = false;
    }
  }

  drawMenuScreen() {
    // const img = document.getElementById("road");
    // this.ctx.fillRect(10, 10, 100, 100);
    // this.ctx.fillStyle = "black";
    // this.ctx.fill();
    // this.ctx.drawImage(img, 132.5, 0);
  }

  draw() {
    // ctx.fillRect(0, 0, 10, 500);
    // ctx.fillStyle = "black";
    // ctx.fill();
    if (!this.game.inGame && !this.game.paused) {

    } else if (this.game.inGame && !this.game.paused) {

    } else if (this.game.inGame && this.game.paused) {

    } else if (!this.game.inGame && !this.game.paused) {

    }
    this.game.run();
  }
}

export default Display;