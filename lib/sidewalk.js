import * as Util from "./util";
import Commercial from "./building/commercial";

class Sidewalk {
    constructor(ctx, game, side) {
        this.ctx = ctx;
        this.game = game;
        // this.buildings = Util.generateBuildings(side, this.game);
    }

    moveBuildings(velocity) {
        this.buildings.forEach((building) => {
            building.move(velocity);
        });
    }

    // animate() {

    // }

    draw(ctx, side) {
        let buildings = Util.generateBuildings(side, this.game);
        debugger
        buildings.forEach ((building, i) => {
            debugger
            building.draw(ctx, i);
        })
    }
}

export default Sidewalk;