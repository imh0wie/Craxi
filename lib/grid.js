class Grid {
    constructor(options) {
        this.ctx = options.ctx;
        this.posX = options.posX;
        this.posY = options.posY;
    }

    move(velocity) {
        this.posY += velocity;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.posX, this.posY, 2.5, 10);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.stroke();
    }
}

export default Grid;