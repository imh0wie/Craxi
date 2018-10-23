import Background from "./background";
import Game from "./game";
import * as Util from "./util";


class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
    this.status = Util.setStatus(this.inGame, this.paused);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyHandlers();
  }

  keyHandlers() {
    document.addEventListener('keydown', this.keyDownHandler, false);
  }

  keyDownHandler(e) {
    debugger
    switch (e.keyCode) {
      case 81:
        if (this.game.inGame && this.game.paused) {
          this.ctx.clearRect(0, 0, 725, 600);
          debugger
          this.game = new Game(this.ctx);
          this.game.animate();
        }
      case 77:
        if (!this.game.inGame && this.game.paused) {
          this.ctx.clearRect(0, 0, 725, 600);
          this.game = new Game(this.ctx);
          this.game.animate();
        }
      break;
      case 80:
        if (!this.game.inGame && !this.game.paused) {
          this.game.inGame = true;
        } else if (this.game.inGame && !this.game.paused) {
          this.game.paused = true;
        } else if (this.game.inGame && this.game.paused) {
          this.game.paused = false;
          this.game.animate();
        }
        break;
      case 37:
        if (this.game.inGame && !this.game.paused) {
          if (this.game.taxi.posX > 142.5) {
            window.requestAnimationFrame(this.game.taxi.move(92.5 * -1));
          }
        }
      break;
      case 39:
        if (this.game.inGame && !this.game.paused) {
          if (this.game.taxi.posX < 512.5) {
            window.requestAnimationFrame(this.game.taxi.move(92.5));
          }
        }
        break;
      default:
        break;
    }
  }
  
  draw() {
    this.game.run();
  }
}

export default Display;