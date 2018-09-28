import Building from "./building";

class Church < Building {
    constructor(posX, posY, width, height, velocity, upperCurveWidth, lowerCurveWidth, curveDiff, lowerTopHeight) {
        super(posX, posY, width, height, velocity); // 7.5, _ , 90, 45
        this.upperCurveWidth = upperCurveWidth; // 80
        this.lowerCurveWidth = lowerCurveWidth; // 100
        this.curveDiff = curveDiff;
        this.lowerTopHeight = lowerTopHeight; // 100
    }

    move(velocity) {
        this.posY += velocity
    }

    draw(ctx) {
        let churchPosX = 200
        let churchPosY = 200;
        let churchUpperCurveWidth = 80;
        let churchLowerCurveWidth = 100;
        let churchTopHeight = 60;
        let churchWidth = 90;
        let churchHeight = 45;
        let churchCurveDiff = 30;
        
        ctx.beginPath();
        ctx.rect(churchPosX - (churchLowerCurveWidth - churchUpperCurveWidth) / 4, churchPosY + 2 * churchTopHeight / 3 , churchWidth, churchHeight);
        ctx.fillStyle = "#ffdeaf";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(churchPosX, churchPosY);
        ctx.quadraticCurveTo(churchPosX + churchUpperCurveWidth / 2, churchPosY - churchCurveDiff, churchPosX + churchUpperCurveWidth, churchPosY);
        ctx.lineTo(churchPosX + churchUpperCurveWidth + (churchLowerCurveWidth - churchUpperCurveWidth) / 2, churchPosY + churchTopHeight);
        ctx.quadraticCurveTo(
        churchPosX - (churchLowerCurveWidth - churchUpperCurveWidth) / 2 + churchLowerCurveWidth / 2,       churchPosY + churchTopHeight - churchCurveDiff, 
        churchPosX - (churchLowerCurveWidth - churchUpperCurveWidth) / 2, 
        churchPosY + churchTopHeight); 
        ctx.lineTo(churchPosX, churchPosY);
        ctx.fillStyle = "#B74949";
        ctx.fill();
        ctx.stroke();
    }
}

default export Building;