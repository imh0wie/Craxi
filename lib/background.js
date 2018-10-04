import * as Util from "./util";
import Sidewalk from "./sidewalk";


class Background {
    constuctor(ctx, game) {
        this.ctx = ctx;
        this.game = game;
        // this.road = document.getElementById("road");
        // this.leftSidewalk = new Sidewalk(ctx, this.game, "left");
        // debugger
        // this.rightSidewalk = new Sidewalk(ctx, this.game, "right");
        // debugger
        // this.road.src = "assets/images/road.jpeg";
        // this.leftBuildings = Util.generateBuildings("left");
        // this.rightBuildings = Util.generateBuildings("right");
    }

    // animateBuildings(ctx) {
    //     let requestAnimationFrame = window.requestAnimationFrame ||
    //                                 window.mozRequestAnimationFrame || 
    //                                 window.webkitRequestAnimationFrame ||
    //                                 window.myRequestAnimationFrame;
    //     for (let i = 0; i < 9; i++) {
    //         this.leftBuildings[i % 9].draw(this.ctx, i % 9);
    //         this.rightBuildings[i % 9].draw(this.ctx, (i + 2) % 9);
    //     }
    //     for (let i = 0; i < 9; i++) {
    //         this.leftBuildings[i % 9].animateBuilding;
    //         this.rightBuildings[i % 9].animateBuilding;
    //         requestAnimatinoFrame(leftBuildings);
    //     }

    // }
    draw(ctx) {
        const sidewalkPosXs = [0, 600]
        const sidewalks = [new Sidewalk(ctx, this.game, "left"), new Sidewalk(ctx, this.game, "right")];
        const sides = ["left", "right"];
        sidewalkPosXs.forEach((pos, i) => {
                ctx.rect(pos, 0, 125, 600);
                ctx.fillStyle = "#ededed";
                ctx.fill();
                ctx.stroke();

                const sidewalk = sidewalks[i];
                const side = sides[i];
                debugger
                sidewalk.draw(ctx, side);
            }
        )

        // ctx.drawImage(this.road, 132.5, 0, 460, 600);
    }
}

export default Background;