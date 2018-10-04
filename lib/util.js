import Commercial from "./building/commercial";
// import Sedan from "./car/sedan";
// import Church from "./building/church";


export const generateBuildings = (side) => {
    let buildings = [];
    let initPosX = side === "left" ? 17.5 : 617.5;
    let initPosY = -300;
    debugger
    for (let i = 0; i < 9; i++) {
        let options = {
            posX: initPosX,
            posY: initPosY,
            topUpperSide: 90,
            topLowerSide: 100,
            topHeight: 100,
            bodyHeight: 50,
        };
        let commercial = new Commercial(options);
        debugger
        buildings.push(commercial);
        initPosY += 125;
    }
    debugger
    return buildings;
}

// export const generateCar = () => {
//     const cars = [new Sedan()];
//     const carPosXs = [135, 225, 315, 405, 495];
//     const suvPosXs = [130, 220, 310, 400, 490]; // suv: 80 * 120;


    
// } 