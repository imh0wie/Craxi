import Commercial from "./building/commercial";
import Grid from "./grid";
// import Sedan from "./car/sedan";
// import Church from "./building/church";


export const generateBuildings = (side, ctx) => {
    let buildings = [];
    let initPosX = side === "left" ? 17.5 : 617.5;
    let initPosY = -300;
    for (let i = 0; i < 9; i++) {
        let options = {
            ctx: ctx,
            posX: initPosX,
            posY: initPosY,
            topUpperSide: 90,
            topLowerSide: 100,
            topHeight: 100,
            bodyHeight: 50,
        };
        let commercial = new Commercial(options);

        buildings.push(commercial);
        initPosY += 175;
    }
    return buildings;
}

export const generateLaneLine = (n, ctx) => {
    const posArr = [222.5, 315, 407.5, 500]
    let laneLineGrids = [];
    let initPosX = posArr[n - 1];
    let initPosY = -300;
    for (let i = 0; i < 45; i++) {
        let options = {
            ctx: ctx,
            posX: initPosX,
            posY: initPosY,
        };
        let grid = new Grid(options);

        laneLineGrids.push(grid);
        initPosY += 30;
    }
    return laneLineGrids;
}

// export const generateCar = () => {
//     const cars = [new Sedan()];
//     const carPosXs = [135, 225, 315, 405, 495];
//     const suvPosXs = [130, 220, 310, 400, 490]; // suv: 80 * 120;


    
// } 