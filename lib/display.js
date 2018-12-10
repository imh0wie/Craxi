import Game from "./game";
import * as Util from "./util";


class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
    this.status = Util.setStatus(this.inGame, this.paused);
    this.bg = new Audio();
    this.bg.src = "./assets/audio/tracks/1.mp3";
    this.turning = new Audio();
    this.turning.src = "./assets/audio/sounds/skrt.mp3";
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyHandlers();
  }

  keyHandlers() {
    document.addEventListener('keydown', this.keyDownHandler, false);
  }

  keyDownHandler(e) {
    const nameInput = document.getElementById("name-input");
    if (this.game.name) {
      switch (e.keyCode) {
        case 81:
          if (this.game.inGame && this.game.paused) {
            this.bg.play();
            this.ctx.clearRect(0, 0, 725, 600);
            this.game = new Game(this.ctx);
            this.game.animate();
          }
          break;
        case 77:
          if (!this.game.inGame && this.game.paused) {
            this.ctx.clearRect(0, 0, 725, 600);
            this.game = new Game(this.ctx);
            this.game.resetInput(nameInput);
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
              this.game.taxi.lane -= 1;
              this.turning.play();
              window.requestAnimationFrame(this.game.taxi.move(92.5 * -1));
            }
          }
          break;
        case 39:
          if (this.game.inGame && !this.game.paused) {
            if (this.game.taxi.posX < 512.5) {
              this.game.taxi.lane += 1;
              this.turning.play();
              window.requestAnimationFrame(this.game.taxi.move(92.5));
            }
          }
          break;
        default:
          break;
      }
    } else {
      switch (e.keyCode) {
        case 13:
          this.game.setName(nameInput);
          break;
        default:
          break;
      }
    }
  }
  
  draw() {
    this.game.run();
  }
}

export default Display;