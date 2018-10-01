import * as Util from "./utils";

class Background {
    constuctor(ctx) {
        this.ctx = ctx;
        this.road = new Image();
        this.road.src = "assts/images/road.jpeg";
        this.road.onload = () => {
            ctx.drawImage(this.road,)
        }
        this.leftBuildings = Util.generateBuildings("left");
        this.rightBuildings = Util.generateBuildings("right");
    }

    animateBuildings(ctx) {
        let requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame ||
                                    window.myRequestAnimationFrame;
        for (let i = 0; i < 9; i++) {
            this.leftBuildings[i % 9].draw(this.ctx, i % 9);
            this.rightBuildings[i % 9].draw(this.ctx, (i + 2) % 9);
        }
        for (let i = 0; i < 9; i++) {
            this.leftBuildings[i % 9].animateBuilding;
            this.rightBuildings[i % 9].animateBuilding;
            requestAnimatinoFrame(leftBuildings);
        }

    }



}