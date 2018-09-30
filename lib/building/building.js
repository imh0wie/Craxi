class Building {
    constructor(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight) {
        this.posX = posX;
        this.posY = posY;
        this.topUpperSide = topUpperSide;
        this.topLowerSide = topLowerSide;
        this.topHeight = topHeight;
        this.bodyHeight = bodyHeight;
    }

    move(velocity) {
        this.posY += velocity
    }
}

export default Building;