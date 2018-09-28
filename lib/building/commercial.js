import Building from "./building";

class Commercial extends Building {
    constructor(posX, posY, width, height, velocity, upperSide, topHeight, lowerSide) {
        super(posX, posY, width, height, velocity); // 7.5, _ , 110, 40
        this.upperSide = upperSide;
        this.topHeight = topHeight;
    }

    move(velocity) {
        this.posY += velocity
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(commercialPosX, commercialPosY);
        ctx.lineTo(commercialPosX + commercialUpperSide, commercialPosY);
        ctx.lineTo(commercialPosX + commercialUpperSide + (commercialLowerSide - commercialUpperSide) / 2, commercialPosY + commercialTopHeight);
        ctx.lineTo(commercialPosX + commercialUpperSide + (commercialLowerSide - commercialUpperSide) / 2, commercialPosY + commercialTopHeight + commercialHeight);
        ctx.lineTo(commercialPosX - (commercialLowerSide - commercialUpperSide) / 2, commercialPosY + commercialTopHeight + commercialHeight);
        ctx.lineTo(commercialPosX - (commercialLowerSide - commercialUpperSide) / 2, commercialPosY + commercialTopHeight)
        ctx.lineTo(commercialPosX + commercialUpperSide + (commercialLowerSide - commercialUpperSide) / 2, commercialPosY + commercialTopHeight);
        ctx.lineTo(commercialPosX - (commercialLowerSide - commercialUpperSide) / 2, commercialPosY + commercialTopHeight);
        ctx.lineTo(commercialPosX, commercialPosY);
        ctx.fillStyle = "#c9c9c9";
        ctx.fill();
        ctx.stroke();
    }
}

default export Building;