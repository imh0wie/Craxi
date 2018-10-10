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

/***/ "./lib/car/car.js":
/*!************************!*\
  !*** ./lib/car/car.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Car {
  constructor(options) {
    this.lane = options.lane;
    this.posY = options.posY; // 560;
    this.posXs = [142.5, 235, 327.5, 420, 512.5];
    this.posX = this.posXs[this.lane - 1];
    this.width = 70;
    this.height = 110;
    this.wheelDist = 70;
    this.colors = ["#b9281f", "#f24d13", "#45e68f"];
    // this.width = 85; // SUV
    // this.height = 120; // SUV
  }

  move(velocity) {
    this.posY += velocity;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Car);


/***/ }),

/***/ "./lib/car/sedan.js":
/*!**************************!*\
  !*** ./lib/car/sedan.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ "./lib/car/car.js");


class Sedan extends _car__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options); 
        // Refactor: 
        // [canvas]wheelDist should depend on height
    }

    draw(ctx, i) { // definitely needs to be refactored with n loops
        ctx.beginPath();
        ctx.moveTo(this.posX, this.posY);
        ctx.quadraticCurveTo(this.posX + this.width / 2, this.posY - 15, this.posX + this.width, this.posY);
        ctx.quadraticCurveTo(this.posX + this.width + 8, this.posY + (this.height / 2), this.posX + this.width, this.posY + this.height);
        ctx.quadraticCurveTo(this.posX + this.width / 2, this.posY + this.height + 15, this.posX, this.posY + this.height);
        ctx.quadraticCurveTo(this.posX - 8, this.posY + (this.height / 2), this.posX, this.posY);
        ctx.fillStyle = this.colors[i % this.colors.length];
        // ctx.fillStyle = this.colors[Math.floor((Math.random() * 3)];
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX - 7, this.posY + 10);
        ctx.lineTo(this.posX, this.posY + 10);
        ctx.lineTo(this.posX, this.posY + 30);
        ctx.lineTo(this.posX - 7, this.posY + 30);
        ctx.lineTo(this.posX - 7, this.posY + 10);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX + this.width + 7, this.posY + 10);
        ctx.lineTo(this.posX + this.width, this.posY + 10);
        ctx.lineTo(this.posX + this.width, this.posY + 30);
        ctx.lineTo(this.posX + this.width + 7, this.posY + 30);
        ctx.lineTo(this.posX + this.width + 7, this.posY + 10);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX - 7, this.posY + this.wheelDist + 10);
        ctx.lineTo(this.posX, this.posY + this.wheelDist + 10);
        ctx.lineTo(this.posX, this.posY + this.wheelDist + 30);
        ctx.lineTo(this.posX - 7, this.posY + this.wheelDist + 30);
        ctx.lineTo(this.posX - 7, this.posY + this.wheelDist + 10);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX + this.width + 7, this.posY + this.wheelDist + 10);
        ctx.lineTo(this.posX + this.width, this.posY + this.wheelDist + 10);
        ctx.lineTo(this.posX + this.width, this.posY + this.wheelDist + 30);
        ctx.lineTo(this.posX + this.width + 7, this.posY + this.wheelDist + 30);
        ctx.lineTo(this.posX + this.width + 7, this.posY + this.wheelDist + 10);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX + this.width / 2 - 15, this.posY + 102);
        ctx.lineTo(this.posX + this.width / 2 + 15, this.posY + 102)
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.posX + this.width / 2, this.posY + this.height / 2 + 25, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.posX + this.width / 2, this.posY + this.height / 2 + 27.5, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.posX + this.width / 2, this.posY + this.height / 2 + 30, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
        ctx.stroke();
        // ctx.beginPath();
        // ctx.ellipse(this.posX + 15, this.posY + 2.5, 3, 10, 75 * Math.PI/180, 0, 2 * Math.PI);
        // ctx.fillStyle = "white";
        // ctx.fill();
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.ellipse(this.posX + this.width - 15, this.posY + 2.5, 3, 10, 105 * Math.PI/180, 0, 2 * Math.PI);
        // ctx.fillStyle = "white";
        // ctx.fill();
        // ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX + 5, this.posY + 10);
        ctx.lineTo(this.posX + 10, this.posY + 25)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX + this.width - 5, this.posY + 10);
        ctx.lineTo(this.posX + this.width - 10, this.posY + 25)
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.posX + 10, this.posY + this.height - 2.5, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.posX + 15, this.posY + this.height - 2, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.posX + this.width - 10, this.posY + this.height - 2.5, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.posX + this.width - 15, this.posY + this.height - 2, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        // front window
        ctx.beginPath();
        ctx.moveTo(this.posX + 10, this.posY + 30);
        ctx.lineTo(this.posX + 60, this.posY + 30);
        ctx.lineTo(this.posX + 60 - 10, this.posY + 30 + 15);
        ctx.lineTo(this.posX + 20, this.posY + 30 + 15);
        ctx.lineTo(this.posX + 10, this.posY + 30);
        ctx.fillStyle = "#83cef4";
        ctx.fill();
        ctx.stroke();

        // left window
        ctx.beginPath();
        ctx.moveTo(this.posX + 5, this.posY + 30);
        ctx.lineTo(this.posX + 5, this.posY + 30 + 60);
        ctx.lineTo(this.posX + 5 + 10, this.posY + 30 + 60 - 20);
        ctx.lineTo(this.posX + 5 + 10, this.posY + 30 + 60 - 20 - 20);
        ctx.lineTo(this.posX + 5, this.posY + 30);
        ctx.fillStyle = "#83cef4";
        ctx.fill();
        ctx.stroke();

        // right window
        ctx.beginPath();
        ctx.moveTo(this.posX + 5 + 60, this.posY + 30);
        ctx.lineTo(this.posX + 5 + 60, this.posY + 30 + 60);
        ctx.lineTo(this.posX + 5 + 60 - 10, this.posY + 30 + 60 - 20);
        ctx.lineTo(this.posX + 5 + 60 - 10, this.posY + 30 + 60 - 20 - 20);
        ctx.lineTo(this.posX + 5 + 60, this.posY + 30);
        ctx.fillStyle = "#83cef4";
        ctx.fill();
        ctx.stroke();

        // rear window
        ctx.beginPath();
        ctx.moveTo(this.posX + 10, this.posY + 95);
        ctx.lineTo(this.posX + 10 + 50, this.posY + 95);
        ctx.lineTo(this.posX + 10 + 50 - 10, this.posY + 95 - 20);
        ctx.lineTo(this.posX + 10 + 10, this.posY + 95 - 20);
        ctx.lineTo(this.posX + 10, this.posY + 95);
        ctx.fillStyle = "#83cef4";
        ctx.fill();
        ctx.stroke();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Sedan);

/***/ }),

/***/ "./lib/car/taxi.js":
/*!*************************!*\
  !*** ./lib/car/taxi.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ "./lib/car/car.js");


class Taxi extends _car__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(options); // 315, 470, 70, 110, variable, 0, 70
    this.posX = 327.5;
    this.posY = 470;
    // Refactor: 
    // [canvas]wheelDist should depend on height
  }


  move(velocity) {
    this.posX += velocity;
  }

  draw(ctx) {
    // Refactoring: n for-loops

    // car body
    debugger
    ctx.beginPath();
    ctx.moveTo(this.posX, this.posY);
    ctx.quadraticCurveTo(this.posX + this.width / 2, this.posY - 15, this.posX + this.width, this.posY);
    ctx.quadraticCurveTo(this.posX + this.width + 8, this.posY + (this.height / 2), this.posX + this.width, this.posY + this.height);
    ctx.quadraticCurveTo(this.posX + this.width / 2, this.posY + this.height + 15, this.posX, this.posY + this.height);
    ctx.quadraticCurveTo(this.posX - 8, this.posY + (this.height / 2), this.posX, this.posY);
    ctx.fillStyle = "#EBC72B";
    ctx.fill();
    ctx.stroke();

    // wheels
    ctx.beginPath();
    ctx.moveTo(this.posX - 7, this.posY + 10);
    ctx.lineTo(this.posX, this.posY + 10);
    ctx.lineTo(this.posX, this.posY + 30);
    ctx.lineTo(this.posX - 7, this.posY + 30);
    ctx.lineTo(this.posX - 7, this.posY + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX + this.width + 7, this.posY + 10);
    ctx.lineTo(this.posX + this.width, this.posY + 10);
    ctx.lineTo(this.posX + this.width, this.posY + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX - 7, this.posY + this.wheelDist + 10);
    ctx.lineTo(this.posX, this.posY + this.wheelDist + 10);
    ctx.lineTo(this.posX, this.posY + this.wheelDist + 30);
    ctx.lineTo(this.posX - 7, this.posY + this.wheelDist + 30);
    ctx.lineTo(this.posX - 7, this.posY + this.wheelDist + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX + this.width + 7, this.posY + this.wheelDist + 10);
    ctx.lineTo(this.posX + this.width, this.posY + this.wheelDist + 10);
    ctx.lineTo(this.posX + this.width, this.posY + this.wheelDist + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + this.wheelDist + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + this.wheelDist + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    // trunk
    ctx.beginPath();
    ctx.moveTo(this.posX + this.width / 2 - 15, this.posY + 102);
    ctx.lineTo(this.posX + this.width / 2 + 15, this.posY + 102)
    ctx.stroke();

    // headlights
    ctx.beginPath();
    ctx.ellipse(this.posX + 15, this.posY + 2.5, 3, 10, 75 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(this.posX + this.width - 15, this.posY + 2.5, 3, 10, 105 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

    // hood shades
    ctx.beginPath();
    ctx.moveTo(this.posX + 5, this.posY + 10);
    ctx.lineTo(this.posX + 10, this.posY + 25)
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX + this.width - 5, this.posY + 10);
    ctx.lineTo(this.posX + this.width - 10, this.posY + 25)
    ctx.stroke();

    //brake lights
    ctx.beginPath();
    ctx.arc(this.posX + 10, this.posY + this.height - 2.5, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.posX + 15, this.posY + this.height - 2, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.posX + this.width - 10, this.posY + this.height - 2.5, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.posX + this.width - 15, this.posY + this.height - 2, 3, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    // front window
    ctx.beginPath();
    ctx.moveTo(this.posX + 10, this.posY + 30);
    ctx.lineTo(this.posX + 60, this.posY + 30);
    ctx.lineTo(this.posX + 60 - 10, this.posY + 30 + 15);
    ctx.lineTo(this.posX + 20, this.posY + 30 + 15);
    ctx.lineTo(this.posX + 10, this.posY + 30);
    ctx.fillStyle = "#83cef4";
    ctx.fill();
    ctx.stroke();

    // left window
    ctx.beginPath();
    ctx.moveTo(this.posX + 5, this.posY + 30);
    ctx.lineTo(this.posX + 5, this.posY + 30 + 60);
    ctx.lineTo(this.posX + 5 + 10, this.posY + 30 + 60 - 20);
    ctx.lineTo(this.posX + 5 + 10, this.posY + 30 + 60 - 20 - 20);
    ctx.lineTo(this.posX + 5, this.posY + 30);
    ctx.fillStyle = "#83cef4";
    ctx.fill();
    ctx.stroke();

    // right window
    ctx.beginPath();
    ctx.moveTo(this.posX + 5 + 60, this.posY + 30);
    ctx.lineTo(this.posX + 5 + 60, this.posY + 30 + 60);
    ctx.lineTo(this.posX + 5 + 60 - 10, this.posY + 30 + 60 - 20);
    ctx.lineTo(this.posX + 5 + 60 - 10, this.posY + 30 + 60 - 20 - 20);
    ctx.lineTo(this.posX + 5 + 60, this.posY + 30);
    ctx.fillStyle = "#83cef4";
    ctx.fill();
    ctx.stroke();

    // rear window
    ctx.beginPath();
    ctx.moveTo(this.posX + 10, this.posY + 95);
    ctx.lineTo(this.posX + 10 + 50, this.posY + 95);
    ctx.lineTo(this.posX + 10 + 50 - 10, this.posY + 95 - 20);
    ctx.lineTo(this.posX + 10 + 10, this.posY + 95 - 20);
    ctx.lineTo(this.posX + 10, this.posY + 95);
    ctx.fillStyle = "#83cef4";
    ctx.fill();
    ctx.stroke();

    // taxi top
    ctx.beginPath();
    ctx.moveTo(this.posX + 30, this.posY + 55);
    ctx.lineTo(this.posX + 30 + 10, this.posY + 55);
    ctx.lineTo(this.posX + 30 + 10, this.posY +  55 + 15);
    ctx.lineTo(this.posX + 30, this.posY +  55 + 15);
    ctx.lineTo(this.posX + 30, this.posY + 55);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    debugger
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Taxi);

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
    // this.inGame = this.game.inGame;
    // this.paused = this.game.paused;
    this.status = this.game.status;
    debugger
  }

  keyHandlers() {
    if (this.status === "ready") {
      if (e.keycode === 80) {
        this.game.inGame = true;
      }
    } else if (this.status === "playing") {
      if (e.keycode === 80) {
        this.game.paused = true;
      } else if (e.keycode === 37) {
        this.taxi.move(-10);
      } else if (e.keycode === 39) {
        this.game.move(10);
      }
    } else if (this.status === "paused") {
      if (e.keycode === 80) {
        this.game.paused = false;;
      }
    } else if (this.status === "over") {
      if (e.keycode === 80) {
        this.game.restart();
      }
    }

    let pPressed = false;
    if (this.game.inGame) {
      let leftPressed = false;
      let rightPressed = false;
    }
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
  }

  keyDownHandler(e) {
    switch (e.keyCode) {
      case 37:
        if (this.status === "playing") leftPressed = true;
      case 39:
        if (this.status === "playing") rightPressed = true;
      case 80:
        pPressed = true;
    }
  }

  keyUpHandler(e) {
    switch (e.keyCode) {
      case 37:
        if (this.status === "playing") leftPressed = false;
      case 39:
        if (this.status === "playing") rightPressed = false;
      case 80:
        pPressed = false;
    }
  }

  drawMenuScreen() {
    // const img = document.getElementById("road");
    // this.ctx.fillRect(10, 10, 100, 100);
    // this.ctx.fillStyle = "black";
    // this.ctx.fill();
    // this.ctx.drawImage(img, 132.5, 0);
  }

  draw() {
    if (this.status === "ready") {

    } else if (this.status === "playing") {

    } else if (this.status === "paused") {

    } else if (this.status === "over") {

    }
    this.game.run();
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
/* harmony import */ var _car_taxi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car/taxi */ "./lib/car/taxi.js");
/* harmony import */ var _car_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car/car */ "./lib/car/car.js");


// import Grid from "./grid";
// import Car from "./car/car";


// import Score from "./score";
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
    // this.buildings = [];
    // this.collided = false;
    // this.velocity = 2;
    // this.score = 0;
    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
    this.buildings = _util__WEBPACK_IMPORTED_MODULE_0__["generateBuildings"]("left", ctx).concat(_util__WEBPACK_IMPORTED_MODULE_0__["generateBuildings"]("right", ctx));
    this.laneLines = [].concat(_util__WEBPACK_IMPORTED_MODULE_0__["generateLaneLine"](1, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_0__["generateLaneLine"](2, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_0__["generateLaneLine"](3, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_0__["generateLaneLine"](4, ctx));
    // options[posX], options[posY], options[width], options[height], options[velocityX], options[velocityY], options[wheelDist]
    this.steadyObjects = [].concat(this.buildings).concat(this.laneLines); // steady in reality
    this.randomCars = [];
    this.taxi = new _car_taxi__WEBPACK_IMPORTED_MODULE_2__["default"]({ 
      lane: 2,
    });
    this.levels = ["I", "II", "III", "IV", "V"];
    this.inGame = false;
    this.paused = false;
    // this.gameStatus = {
    //   ready: 0,
    //   playing: 1,
    //   paused: 2,
    //   over: 3
    // }
    this.status = _util__WEBPACK_IMPORTED_MODULE_0__["setStatus"](this);
    debugger
    this.lastTime = 0;
    this.animate = this.animate.bind(this);
  }

  collisionDetector() {
    this.randomCars.forEach((car) => {
      const xRange = [car.posX, car.posX + car.width];
      const yRange = [car.posY, car.posY + car.height];
      if (_util__WEBPACK_IMPORTED_MODULE_0__["inRange"](this.taxi.posX, xRange), _util__WEBPACK_IMPORTED_MODULE_0__["inRange"](this.taxi.posX, xRange)) {
        console.log("shit");
        debugger
      }
    })
  }

  restart() {
    // this.score = new Score();
    this.inGame = true;
    this.paused = false;
  }

  // keyHandlers() {
  //   let leftPressed = false;
  //   let rightPressed = false;
  //   document.addEventListener('keydown', keyDownHandler, false);
  //   document.addEventListener('keyup', keyUpHandler, false);
  // }

  // keyDownHandler(e) {
  //   if(e.keyCode == 37) {
  //     leftPressed = true;
  //   }
  //   else if(e.keyCode == 39) {
  //     rightPressed = true;
  //   }
  // }

  // keyUpHandler() {
  //   if(e.keyCode == 37) {
  //     leftPressed = false;
  //   }
  //   else if(e.keyCode == 39) {
  //     rightPressed = false;
  //   }
  // }

  moveSteadyObjects(velocity) {
    this.steadyObjects.forEach((object) => {
        // debugger
        if (object.posY >= 1050) {
          object.posY = -425;
          //   // this.steadyObjects.unshift(this.steadyObjects.pop());
        }
        // if(object.posY >= 1050 ) {
        //   debugger
        //   object.posY = -425;
        //   // this.steadyObjects.unshift(this.steadyObjects.pop());
        // }
        object.move(velocity);
    });
  }

  updateLevel() {
    this.level = this.levels[0];
  //   if (this.score.score < 30) {
  //     this.level = this.levels[0];
  //   } else if (this.score.score < 80) {
  //     this.level = this.levels[1];
  //   } else if (this.score.score < 80 + 25 * 1000 / 300) {
  //     this.level = this.levels[2];
  //   } else if (this.score.score < 80 + 25 * 1000 / 300 + 150) {
  //     this.level = this.levels[3];
  //   } else {
  //     this.level = this.levels[4]
  //   }
  }

  generateCars(level) {
    const scoreCheckpoints = {
      I: 50,
      II: 25,
      III: 0,
      IV: -25,
      V: -50,
    }
    // debugger
    if (this.randomCars.length === 0) {
      this.randomCars.push(_util__WEBPACK_IMPORTED_MODULE_0__["generateCar"]());
    // } else if (this.randomCars.length === 10) {
    //   this.randomCars.shift();
    //   // debugger
    //   this.randomCars.push(Util.generateCar());
    } else if (this.randomCars[this.randomCars.length - 1].posY >= scoreCheckpoints[level]) {
      this.randomCars.push(_util__WEBPACK_IMPORTED_MODULE_0__["generateCar"]());
    }
  }


  moveRandomCars(velocity) {
    debugger
    this.randomCars.forEach((car) => {
        car.move(velocity);
    });
  }

  step(velocity) {
    this.collisionDetector();
    this.moveSteadyObjects(velocity);
    this.updateLevel();
    // this.generateCars(this.level);
    this.moveRandomCars(velocity);
  }

  animate() {
    let velocity;
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.myRequestAnimationFrame;
    if (!this.inGame && !this.paused) {
      velocity = 10;
      this.step(velocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && !this.paused) {
      this.step(velocity);
      this.draw(this.ctx);
      console.log("Started!")
    } else if (this.inGame && this.paused) {
      this.step(velocity);
      this.draw(this.ctx);
      console.log("Paused");
    } else if (!this.inGame && !this.paused) {
      this.step(velocity);
      this.draw(this.ctx);
      console.log("Game Over");
    }
  }

  // moveTaxi(direction) {
  //   if (this.taxi.posX > 135 && direction === "left") {
  //     this.taxi.posX -= this.taxi.velocityX;
  //   } else if (this.taxi.posX < 495 && direction === "right") {
  //     this.taxi.posX += this.taxi.velocityX;
  //   }
  // }

  draw() {
    this.background.draw(this.ctx);
    this.buildings.forEach((building, i) => {
      building.draw(i % building.colors.length);
    })
    this.laneLines.forEach((grid) => {
      grid.draw();
    })
    this.taxi.draw(this.ctx);
    this.randomCars.forEach((car, i) => {
      car.draw(this.ctx, i);
    })
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

  run() {
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.myRequestAnimationFrame;
    requestAnimationFrame(this.animate);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./lib/grid.js":
/*!*********************!*\
  !*** ./lib/grid.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Grid {
    constructor(options) {
        this.ctx = options.ctx;
        this.posX = options.posX;
        this.posY = options.posY;
    }

    move(velocity) {
        this.posY += velocity;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.posX, this.posY, 2.5, 10);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.stroke();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: generateBuildings, generateLaneLine, generateCar, setStatus, inRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBuildings", function() { return generateBuildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLaneLine", function() { return generateLaneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCar", function() { return generateCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatus", function() { return setStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inRange", function() { return inRange; });
/* harmony import */ var _building_commercial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building/commercial */ "./lib/building/commercial.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./lib/grid.js");
/* harmony import */ var _car_sedan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car/sedan */ "./lib/car/sedan.js");



// import Sedan from "./car/sedan";
// import Church from "./building/church";


const generateBuildings = (side, ctx) => {
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
        let commercial = new _building_commercial__WEBPACK_IMPORTED_MODULE_0__["default"](options);

        buildings.push(commercial);
        initPosY += 175;
    }
    return buildings;
}

const generateLaneLine = (n, ctx) => {
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
        let grid = new _grid__WEBPACK_IMPORTED_MODULE_1__["default"](options);

        laneLineGrids.push(grid);
        initPosY += 30;
    }
    return laneLineGrids;
}

// export const generateCars = () => {
//     let cars = [];
//     for (let i = 0; i < 9; i++) {
//         let options = {
//             ctx: ctx,
//             posX: initPosX,
//             posY: initPosY,
//             topUpperSide: 90,
//             topLowerSide: 100,
//             topHeight: 100,
//             bodyHeight: 50,
//         };
//         let commercial = new Commercial(options);

//         buildings.push(commercial);
//         initPosY += 175;
//     }
//     return buildings;
// }

const generateCar = () => {
    const lanes = [1, 2, 4, 5]; // 327.5
    // const suvPosXs = [130, 220, 310, 400, 490]; // suv: 80 * 120;
    const lane = lanes[Math.floor(Math.random() * 4)];
    const types = ["sedan"];
    const type = types[0];
    const options = {
        lane: 3,
        posY: -500,
    }
    // const type = types[Math.floor(Math.random() * 2)];
    const car = (type === "sedan") ? new _car_sedan__WEBPACK_IMPORTED_MODULE_2__["default"](options) : null;
    return car;
}

const setStatus = (game) => {
    if (!game.inGame && !game.paused) {
        return "ready";
    } else if (game.inGame && !game.paused) {
        return "playing";
    } else if (game.inGame && game.paused) {
        return "paused";
    } else if (!game.inGame && game.paused) {
        return "over";
    }
}

const inRange = (pos, posRange) => {
    return pos >= posRange[0] && pos <= posRange[1];
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map