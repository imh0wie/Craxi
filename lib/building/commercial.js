import Building from "./building";

class Commercial extends Building {
    constructor(options) {
        super(options); //, option[prev], option[next]); // 7.5, _ , 110, 40
        this.colors = ["#DAA520", "#66CDAA", "#FFF5EE", "#1E90FF", "#FFA07A", "#DC143C", "#448444", "#9356A5", "#93d7ff"];
    }

    draw(i) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.posX + this.topUpperSide, this.posY);
        this.ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        this.ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight + this.bodyHeight);
        this.ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight + this.bodyHeight);
        this.ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight)
        this.ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        this.ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        this.ctx.lineTo(this.posX, this.posY);
        this.ctx.fillStyle = this.colors[i];
        this.ctx.fill();
        this.ctx.stroke();
    }
}
export default Commercial;

