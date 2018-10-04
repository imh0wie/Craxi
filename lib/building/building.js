class Building {
    constructor(options, game) {
        this.posX = options.posX;
        this.posY = options.posY;
        this.topUpperSide = options.topUpperSide;
        this.topLowerSide = options.topLowerSide;
        this.topHeight = options.topHeight;
        this.bodyHeight = options.bodyHeight;
        this.game = game;
        // this.prev = options.prev;
        // this.next = options.next;
    }

    // remove() {
    //     if (this.prev.next) {
    //         this.prev.next = this.next;
    //     }
    //     if (this.next.prev) {
    //         this.next.prev = this.prev;
    //     }
    //     this.next = null;
    //     this.prev = null;
    //     this
    // }

    move(velocity) {
        this.posY += velocity;
    }

    animateBuilding(velocity) {
        let requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame ||
                                    window.myRequestAnimationFrame;
        if (this.posY >= -300 && this.posY <= 825) {
            this.move(velocity);
            requestAnimationFrame(animateBuilding);
        } else {
            this.posY = -300;
            requestAnimationFrame(animateBuilding);
        }
    }

    startAnimation(velocity) {
        let requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame ||
                                    window.myRequestAnimationFrame;
        if (this.game.inGame === false && this.game.paused === false) {
            requestAnimationFrame(animateBuilding);
        }
    }

}

export default Building;