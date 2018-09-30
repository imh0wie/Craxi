import Building from "./building";

class Church extends Building {
    constructor(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight, bodyWidth, upperCurveWidth, lowerCurveWidth, curveDiff) {
        super(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight); // 7.5, _ , 90, 45
        this.bodyWidth = bodyWidth;
        this.upperCurveWidth = upperCurveWidth; // 80
        this.lowerCurveWidth = lowerCurveWidth; // 100
        this.curveDiff = curveDiff;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.posX - (this.lowerCurveWidth - this.upperCurveWidth) / 4, this.posY + 2 * this.topHeight / 3 , this.bodyWidth,this.bodyHeight);
        ctx.fillStyle = "#ffdeaf";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX, this.posY);
        ctx.quadraticCurveTo(this.posX + this.upperCurveWidth / 2, this.posY - this.curveDiff, this.posX + this.upperCurveWidth, this.posY);
        ctx.lineTo(this.posX + this.upperCurveWidth + (this.lowerCurveWidth - this.upperCurveWidth) / 2, this.posY + this.topHeight);
        ctx.quadraticCurveTo(
            this.posX - (this.lowerCurveWidth - this.upperCurveWidth) / 2 + this.lowerCurveWidth / 2, 
            this.posY + this.topHeight - this.curveDiff, 
            this.posX - (this.lowerCurveWidth - this.upperCurveWidth) / 2, 
            this.posY + this.topHeight
        ); 
        ctx.lineTo(this.posX, this.posY);
        ctx.fillStyle = "#B74949";
        ctx.fill();
        ctx.stroke();
    }
    // let churchPosX = 200
    // let churchPosY = 200;
    // let churchUpperCurveWidth = 80;
    // let churchLowerCurveWidth = 100;
    // let churchTopHeight = 60;
    // let churchWidth = 90;
    // let churchHeight = 45;
    // let churchCurveDiff = 30;
}

export default Building;