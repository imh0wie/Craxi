class Building {
    constructor(posX, posY, width, height, velocity) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
    }

    move(velocity) {
        this.posY += velocity
    }
}

default export Building;