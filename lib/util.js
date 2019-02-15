import Commercial from "./building/commercial";
import Grid from "./grid";
import Sedan from "./car/sedan";


export const generateBuildings = (side, ctx) => {
    let buildings = [];
    let initPosX = side === "left" ? -50 : 675;
    let initPosY = -1050;
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
        initPosY += 225;
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
        initPosY += 85;
    }
    return laneLineGrids;
}

export const generateCar = (currentLane, level, checker = true) => {
    if (!checker) return new Sedan({lane: 3, posY: -500});
    const arrayLengths = {
        "I": 15,
        "II": 15,
        "III": 22,
        "IV": 22,
        "V": 35,
        "VI": 35, 
    }
    const currentLanes = Array.apply(null, Array(arrayLengths[level])).map(function (el) { return currentLane; })
    const lanes = [1, 2, 3, 4, 5].concat(currentLanes); // 327.5
    const lane = lanes[Math.floor(Math.random() * lanes.length)];
    const types = ["sedan"];
    const type = types[0];
    const options = {
        lane: lane,
        posY: -500,
    }
    const car = (type === "sedan") ? new Sedan(options) : null;
    return car;
}

export const setStatus = (inGame, paused) => {
    if (!inGame && !paused) {
        return "ready";
    } else if (inGame && !paused) {
        return "playing";
    } else if (inGame && paused) {
        return "paused";
    } else if (!inGame && paused) {
        return "over";
    }
}

export const inRange = (pos, posRange) => {
    return pos >= posRange[0] && pos <= posRange[1];
}

export const exRange = (pos, posRange) => {
    return pos > posRange[0] && pos < posRange[1];
}
