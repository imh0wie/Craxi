import Sedan from "./car/sedan";
import Commercial from "./building/commercial";
import Church from "./building/church";

export const generateBuildings = (side) => {
    let buildings = [];
    let initPosX = side === "left" ? 17.5 : 617.5
    let initPosY = -300;
    for (let i = 0; i < 9; i++) {
        let commercial = new Commercial(initPosX, initPosY, 90, 100, 100, 50);
        buildings << commercial;
        initPosY += 125;
    }
    return buildings;
}

export const generateCar = () => {
    const cars = [new Sedan()];
    const carPosXs = [135, 225, 315, 405, 495];
    const suvPosXs = [130, 220, 310, 400, 490]; // suv: 80 * 120;


    
} 