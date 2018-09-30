import Building from "./building";

class Commercial extends Building {
    constructor(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight) {
        super(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight); // 7.5, _ , 110, 40
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.posX, this.posY);
        ctx.lineTo(this.posX + this.topUpperSide, this.posY);
        ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight + this.bodyHeight);
        ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight + this.bodyHeight);
        ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight)
        ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        ctx.lineTo(this.posX, this.posY);
        ctx.fillStyle = "#c9c9c9";
        ctx.fill();
        ctx.stroke();
    }
}
export default Building;

