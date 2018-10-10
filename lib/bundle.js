/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/craxi.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/background.js":
/*!***************************!*\
  !*** ./lib/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Background {
    constuctor(ctx) {
        this.ctx = ctx;
    }

    draw(ctx) {
        ctx.fillStyle = "#55595e";
        ctx.fillRect(0, 0, 700, 600);

        ctx.beginPath();
        ctx.rect(125, -1 , 5, 702);
        ctx.fillStyle = "#bababa";
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.rect(130, -1 , 2.5, 702);
        ctx.fillStyle = "#bababa";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(592.5, -1 , 2.5, 702);
        ctx.fillStyle = "#bababa";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(595, -1 , 5, 702);
        ctx.fillStyle = "#bababa";
        ctx.fill();
        ctx.stroke();

        const sidewalkPosXs = [-1, 600];
        sidewalkPosXs.forEach((pos) => {
        ctx.beginPath();
        ctx.rect(pos, -1, 126, 602);
        ctx.fillStyle = "#ededed";
        ctx.fill();
        ctx.stroke();
        });
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./lib/building/building.js":
/*!**********************************!*\
  !*** ./lib/building/building.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Building {
    constructor(options) {
        this.ctx = options.ctx;
        this.posX = options.posX;
        this.posY = options.posY;
        this.topUpperSide = options.topUpperSide;
        this.topLowerSide = options.topLowerSide;
        this.topHeight = options.topHeight;
        this.bodyHeight = options.bodyHeight;
        // this.prev = options.prev;
        // this.next = options.next;
        this.animateBuilding = this.animateBuilding.bind(this);
    }

    // remove() {
    //     if (this.prev.next) {
    //         this.prev.next = this.next;
    //     }
    //     if (this.next.prev) {
    //         this.next.prev = this.prev;
    //     }
    //     this.next = null;
    //     this.prev = null;
    //     this
    // }

    move(velocity) {
        this.posY += velocity;
    }

    animateBuilding(velocity) {
        let requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame ||
                                    window.myRequestAnimationFrame;
        if (this.posY >= -300 && this.posY <= 825) {
            this.move(velocity);
            requestAnimationFrame(animateBuilding);
        } else {
            this.posY = -300;
            requestAnimationFrame(animateBuilding);
        }
    }

    startAnimation(velocity) {
        let requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame ||
                                    window.myRequestAnimationFrame;
        // if (this.game.inGame === false && this.game.paused === false) {
            requestAnimationFrame(animateBuilding(velocity));
        // }
    }

}

/* harmony default export */ __webpack_exports__["default"] = (Building);

/***/ }),

/***/ "./lib/building/commercial.js":
/*!************************************!*\
  !*** ./lib/building/commercial.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building */ "./lib/building/building.js");


class Commercial extends _building__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/* harmony default export */ __webpack_exports__["default"] = (Commercial);



/***/ }),

/***/ "./lib/craxi.js":
/*!**********************!*\
  !*** ./lib/craxi.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./lib/game.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./lib/display.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./lib/background.js");





document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("display");
    canvas.width = 725;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    const display = new _display__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    display.draw();
})

/***/ }),

/***/ "./lib/display.js":
/*!************************!*\
  !*** ./lib/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./lib/background.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./lib/game.js");




class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    // this.game.draw(ctx);
    this.inGame = this.game.inGame;
    this.paused = this.game.paused;
  }

  // keyHandlers() {
  //   let pPressed = false;
  //   if (this.game.inGame) {
  //     let leftPressed = false;
  //   }
  //   if (this.game.inGame) {
  //     let rightPressed = false;
  //   }
  //   document.addEventListener('keydown', keyDownHandler, false);
  //   document.addEventListener('keyup', keyUpHandler, false);
  // }

  // keyDownHandler(e) {
  //   switch (e.keyCode) {
  //     case 37:
  //       if (this.game.inGame) leftPressed = true;
  //     case 39:
  //       if (this.game.inGame) rightPressed = true;
  //     case 80:
  //       pPressed = true;
  //   }
  // }

  // keyUpHandler(e) {
  //   switch (e.keyCode) {
  //     case 37:
  //       if (this.inGame) leftPressed = false;
  //     case 39:
  //       if (this.inGame) rightPressed = false;
  //     case 80:
  //       pPressed = false;
  //   }
  // }

  drawMenuScreen() {
    // const img = document.getElementById("road");
    // this.ctx.fillRect(10, 10, 100, 100);
    // this.ctx.fillStyle = "black";
    // this.ctx.fill();
    // this.ctx.drawImage(img, 132.5, 0);
  }

  draw() {
    // ctx.fillRect(0, 0, 10, 500);
    // ctx.fillStyle = "black";
    // ctx.fill();
    if (!this.game.inGame && !this.game.paused) {

    } else if (this.game.inGame && !this.game.paused) {

    } else if (this.game.inGame && this.game.paused) {

    } else if (!this.game.inGame && !this.game.paused) {

    }
    this.game.draw();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./lib/util.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./lib/background.js");


// import Car from "./car/car";
// import Taxi from "./car/taxi";
// import Sedan from "./car/sedan";
// import Suv from "./suv";
// import Building from "./building/building";
// import Commercial from "./building/commercial";
// import Church from "./building/church";
// import LaneLines from "./lane_lines";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.options = {
      game: this,
    };
    // debugger
    // debugger
    // this.taxi = new Taxi(315, 470, 70, 110, 90, 0, 70); // <-90->
    // this.buildingsHash = {
    //   commericial: 50,
    //   church: 50,
    // };
    // this.buildings = [];
    // this.collided = false;
    // this.velocity = 2;
    // this.score = 0;
    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
    this.buildings = _util__WEBPACK_IMPORTED_MODULE_0__["generateBuildings"]("left", ctx).concat(_util__WEBPACK_IMPORTED_MODULE_0__["generateBuildings"]("right", ctx));
    this.hehe = [1];
    this.steadyObjects = [].concat(this.buildings); // steady in reality
    debugger
    this.inGame = false;
    this.paused = false;
    this.lastTime = 0;
    this.animate = this.animate.bind(this);
  }

  keyHandlers() {
    let leftPressed = false;
    let rightPressed = false;
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
  }

  keyDownHandler(e) {
    if(e.keyCode == 37) {
      leftPressed = true;
    }
    else if(e.keyCode == 39) {
      rightPressed = true;
    }
  }

  keyUpHandler() {
    if(e.keyCode == 37) {
      leftPressed = false;
    }
    else if(e.keyCode == 39) {
      rightPressed = false;
    }
  }

  moveSteadyObjects(velocity) {
    this.steadyObjects.forEach((object) => {
        object.move(velocity);
    });
}

  moveMovingObjects(velocity) {
      this.steadyObjects.forEach((object) => {
          object.move(velocity);
      });
  }

  step(elapsed) {
    this.moveSteadyObjects(elapsed);

  }

  animate(time) {
    const elapsed = time - this.lastTime;
    if (!this.inGame && !this.paused) {
      this.step(elpased);
      this.draw(this.ctx);
      this.lastTime = time;
      requestAnimationFrame(this.animate.bind(this));
    } else if (this.inGame && !this.paused) {
      this.step(elpased);
      this.draw(this.ctx);
      this.lastTime = time;
      console.log("Started!")
    } else if (this.inGame && this.paused) {
      this.step(elpased);
      this.draw(this.ctx);
      this.lastTime = time;
      console.log("Paused");
    } else if (!this.inGame && !this.paused) {
      this.step(elpased);
      this.draw(this.ctx);
      this.lastTime = time;
      console.log("Game Over");
    }
    if (!this.gameOver) {
      this.step(timeDelta);
      this.draw(this.ctx);
      this.lastTime = time;
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.gameOver = new GameOver(this);
      this.gameOver.draw(this.ctx);
    }
  }

  // scoreIncrementation() {
  //   const timeCheckpointI = 15;
  //   const timePeriodI = 500;
  //   const timeCheckpointII = 35; 
  //   const timePeriodII = 400;
  //   const timeCheckpointIII = 60; 
  //   const timePeriodIII = 300;
  //   const timeCheckpointIV = 90;
  //   const timePeriodIV = 200; 
  //   // const timeCheckpointV = 125;
  //   const timePeriodV = 100;

  //   while (inGame) {
  //     if (this.score <= timeCheckpointI * 1000 / timePeriodI) {
  //       startIncrement(timePeriodI);
  //     } else if (this.score <= timeCheckpointII * 1000 / timePeriodII) {
  //       startIncrement(timePeriodII);
  //     } else if (this.score <= timeCheckpointII * 1000 / timePeriodIII) {
  //       startIncrement(timePeriodIII);
  //     } else if (this.score <= timeCheckpointIV * 1000 / timePeriodIV) {
  //       startIncrement(timePeriodIV);
  //     } else {
  //       startIncrement(timePeriodV);
  //     }
  //   }
  // }

  // startIncrement(millisecs) {
  //   setTimeout(incrementScore, millisecs);
  // }

  // incrementScore(millisecs) {
  //   this.score++;
  //   this.startIncrement(millisecs);
  // }

  // moveTaxi(direction) {
  //   if (this.taxi.posX > 135 && direction === "left") {
  //     this.taxi.posX -= this.taxi.velocityX;
  //   } else if (this.taxi.posX < 495 && direction === "right") {
  //     this.taxi.posX += this.taxi.velocityX;
  //   }
  // }

  // collided?() {
  //   if (this.collided) {
      
  //   }

  // }
  draw() {
    this.background.draw(this.ctx);
    this.buildings.forEach((building, i) => {
      building.draw(i % building.colors.length);
    })
    debugger
    // if (this.inGame === false && this.paused === false) {
    //   this.ctx.globalAlpha = 0.4;
    // } else if (this.paused) {
    //   this.ctx.globalAlpha = 0.6;
    // } else if (this.inGame && this.paused) {
    //   this.ctx.globalAlpha = 0.6;
    // } else if (this.inGame === false && this.paused) {
    //   this.ctx.globalAlpha = 0.6;
    // } else {
    //   this.ctx.globalAlpha = 1;
    // }

  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: generateBuildings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBuildings", function() { return generateBuildings; });
/* harmony import */ var _building_commercial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building/commercial */ "./lib/building/commercial.js");

// import Sedan from "./car/sedan";
// import Church from "./building/church";


const generateBuildings = (side, ctx) => {
    let buildings = [];
    let initPosX = side === "left" ? 17.5 : 617.5;
    let initPosY = -300;
    debugger
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
        let commercial = new _building_commercial__WEBPACK_IMPORTED_MODULE_0__["default"](options);
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map