import * as Util from "./util";
import Commercial from "./building/commercial";

class Sidewalk {
    constructor(ctx, side) {
        this.ctx = ctx;
        debugger
        this.buildings = Util.generateBuildings(side);
        // this.animateBuildings = this.animateBuildings.bind(this);
    }

    animateBuildings(velocity) {
        let requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame ||
                                    window.myRequestAnimationFrame;
        this.buildings.forEach((building, i) => {
            building.startAnimation(velocity);
        })
        requestAnimationFrame(animateBuildings);
    }

    // moveBuildings(velocity) {
    //     this.buildings.forEach((building) => {
    //         building.move(velocity);
    //     });
    // }

    // animate() {

    // }

    draw(ctx, side) {
        let buildings = this.buildings;
        debugger
        buildings.forEach ((building, i) => {
            debugger
            building.draw(ctx, i);
        })
        // this.animateBuildings(200);
    }
}

export default Sidewalk;