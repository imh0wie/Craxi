import Background from "./background";
import Game from "./game";
import * as Util from "./util";


class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new Game(ctx);
    this.status = Util.setStatus(this.inGame, this.paused);
  }
  
  draw() {
    this.game.run();
  }
}

export default Display;