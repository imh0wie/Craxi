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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");


class Background {
    constuctor(ctx) {
        this.ctx = ctx;
        this.road = new Image();
        this.road.src = "assts/images/road.jpeg";
        this.road.onload = () => {
            ctx.drawImage(this.road,)
        }
        this.leftBuildings = _utils__WEBPACK_IMPORTED_MODULE_0__["generateBuildings"]("left");
        this.rightBuildings = _utils__WEBPACK_IMPORTED_MODULE_0__["generateBuildings"]("right");
    }

    animateBuildings(ctx) {
        let requestAnimationFrame = window.requestAnimationFrame ||
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame ||
                                    window.myRequestAnimationFrame;
        for (let i = 0; i < 9; i++) {
            this.leftBuildings[i % 9].draw(this.ctx, i % 9);
            this.rightBuildings[i % 9].draw(this.ctx, (i + 2) % 9);
        }
        for (let i = 0; i < 9; i++) {
            this.leftBuildings[i % 9].animateBuilding;
            this.rightBuildings[i % 9].animateBuilding;
            requestAnimatinoFrame(leftBuildings);
        }

    }



}

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
        this.posX = options.posX;
        this.posY = options.posY;
        this.topUpperSide = options.topUpperSide;
        this.topLowerSide = options.topLowerSide;
        this.topHeight = options.topHeight;
        this.bodyHeight = options.bodyHeight;
    }

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
}

/* harmony default export */ __webpack_exports__["default"] = (Building);

/***/ }),

/***/ "./lib/building/church.js":
/*!********************************!*\
  !*** ./lib/building/church.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./building */ "./lib/building/building.js");


class Church extends _building__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight, bodyWidth, upperCurveWidth, lowerCurveWidth, curveDiff) {
        super(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight); // 7.5, _ , 90, 45
        this.bodyWidth = bodyWidth;
        this.upperCurveWidth = upperCurveWidth; // 80
        this.lowerCurveWidth = lowerCurveWidth; // 100
        this.curveDiff = curveDiff;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.posX - (this.lowerCurveWidth - this.upperCurveWidth) / 4, this.posY + 2 * this.topHeight / 3 , this.bodyWidth,this.bodyHeight);
        ctx.fillStyle = "#ffdeaf";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.posX, this.posY);
        ctx.quadraticCurveTo(this.posX + this.upperCurveWidth / 2, this.posY - this.curveDiff, this.posX + this.upperCurveWidth, this.posY);
        ctx.lineTo(this.posX + this.upperCurveWidth + (this.lowerCurveWidth - this.upperCurveWidth) / 2, this.posY + this.topHeight);
        ctx.quadraticCurveTo(
            this.posX - (this.lowerCurveWidth - this.upperCurveWidth) / 2 + this.lowerCurveWidth / 2, 
            this.posY + this.topHeight - this.curveDiff, 
            this.posX - (this.lowerCurveWidth - this.upperCurveWidth) / 2, 
            this.posY + this.topHeight
        ); 
        ctx.lineTo(this.posX, this.posY);
        ctx.fillStyle = "#B74949";
        ctx.fill();
        ctx.stroke();
    }
    // let churchPosX = 200
    // let churchPosY = 200;
    // let churchUpperCurveWidth = 80;
    // let churchLowerCurveWidth = 100;
    // let churchTopHeight = 60;
    // let churchWidth = 90;
    // let churchHeight = 45;
    // let churchCurveDiff = 30;
}

/* harmony default export */ __webpack_exports__["default"] = (_building__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
    constructor(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight) {
        super(posX, posY, topUpperSide, topLowerSide, topHeight, bodyHeight); // 7.5, _ , 110, 40
        this.colors = ["#DAA520", "#66CDAA", "#FFF5EE", "#1E90FF", "#FFA07A", "#DC143C", "#448444", "#9356A5", "#93d7ff"];
    }

    draw(ctx, i) {
        ctx.beginPath();
        ctx.moveTo(this.posX, this.posY);
        ctx.lineTo(this.posX + this.topUpperSide, this.posY);
        ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight + this.bodyHeight);
        ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight + this.bodyHeight);
        ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight)
        ctx.lineTo(this.posX + this.topUpperSide + (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        ctx.lineTo(this.posX - (this.topLowerSide - this.topUpperSide) / 2, this.posY + this.topHeight);
        ctx.lineTo(this.posX, this.posY);
        ctx.fillStyle = this.colors[i];
        ctx.fill();
        ctx.stroke();
    }
}
/* harmony default export */ __webpack_exports__["default"] = (_building__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
  constructor(posX, posY, width, height, velocityX, velocityY) {
    this.posX = posX;
    this.posY = posY; // 560
    this.width = width;
    this.height = height;
    this.velocityX = velocityX;
    // this.velocityX = this.width + 2 * (90 - this.posX) / 2;
    this.velocityY = velocityY;
    this.colors = ["#b9281f", "#f24d13", "#45e68f"]
    this.start = null;
    // this.width = 70; // regular cars & taxi
    // this.height = 110; // regular cars & taxi
    // this.width = 85; // SUV
    // this.height = 120; // SUV
  }

  // move(timestamp) {
  //   let requestAnimationFrame = window.requestAnimationFrame ||
  //                                   window.mozRequestAnimationFrame || 
  //                                   window.webkitRequestAnimationFrame ||
  //                                   window.myRequestAnimationFrame
  //   this.posY += this.velocityY; // depending on building's velocity
  // }
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
    constructor(posX, posY, width, height, velocityX, velocityY, wheelDist) {
        super(posX, posY, width, height, velocityX, velocityY, wheelDist, colors); // 315, 375, 70, 110, variable, 0, 70
        // Refactor: 
        // [canvas]wheelDist should depend on height
    }

    draw(ctx) { // definitely needs to be refactored with n loops
        ctx.beginPath();
        ctx.moveTo(sedanPosX, sedanPosY);
        ctx.quadraticCurveTo(sedanPosX + sedanWidth / 2, sedanPosY - 15, sedanPosX + sedanWidth, sedanPosY);
        ctx.quadraticCurveTo(sedanPosX + sedanWidth + 8, sedanPosY + (sedanHeight / 2), sedanPosX + sedanWidth, sedanPosY + sedanHeight);
        ctx.quadraticCurveTo(sedanPosX + sedanWidth / 2, sedanPosY + sedanHeight + 15, sedanPosX, sedanPosY + sedanHeight);
        ctx.quadraticCurveTo(sedanPosX - 8, sedanPosY + (sedanHeight / 2), sedanPosX, sedanPosY);
        ctx.fillStyle = this.colors[Math.floor((Math.random() * 3) + 1) - 1];
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sedanPosX - 7, sedanPosY + 10);
        ctx.lineTo(sedanPosX, sedanPosY + 10);
        ctx.lineTo(sedanPosX, sedanPosY + 30);
        ctx.lineTo(sedanPosX - 7, sedanPosY + 30);
        ctx.lineTo(sedanPosX - 7, sedanPosY + 10);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sedanPosX + sedanWidth + 7, sedanPosY + 10);
        ctx.lineTo(sedanPosX + sedanWidth, sedanPosY + 10);
        ctx.lineTo(sedanPosX + sedanWidth, sedanPosY + 30);
        ctx.lineTo(sedanPosX + sedanWidth + 7, sedanPosY + 30);
        ctx.lineTo(sedanPosX + sedanWidth + 7, sedanPosY + 10);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sedanPosX - 7, sedanPosY + sedanWheelDist + 10);
        ctx.lineTo(sedanPosX, sedanPosY + sedanWheelDist + 10);
        ctx.lineTo(sedanPosX, sedanPosY + sedanWheelDist + 30);
        ctx.lineTo(sedanPosX - 7, sedanPosY + sedanWheelDist + 30);
        ctx.lineTo(sedanPosX - 7, sedanPosY + sedanWheelDist + 10);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sedanPosX + sedanWidth + 7, sedanPosY + sedanWheelDist + 10);
        ctx.lineTo(sedanPosX + sedanWidth, sedanPosY + sedanWheelDist + 10);
        ctx.lineTo(sedanPosX + sedanWidth, sedanPosY + sedanWheelDist + 30);
        ctx.lineTo(sedanPosX + sedanWidth + 7, sedanPosY + sedanWheelDist + 30);
        ctx.lineTo(sedanPosX + sedanWidth + 7, sedanPosY + sedanWheelDist + 10);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sedanPosX + sedanWidth / 2 - 15, sedanPosY + 102);
        ctx.lineTo(sedanPosX + sedanWidth / 2 + 15, sedanPosY + 102)
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sedanPosX + sedanWidth / 2, sedanPosY + sedanHeight / 2 + 25, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sedanPosX + sedanWidth / 2, sedanPosY + sedanHeight / 2 + 27.5, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sedanPosX + sedanWidth / 2, sedanPosY + sedanHeight / 2 + 30, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
        ctx.stroke();
        // ctx.beginPath();
        // ctx.ellipse(sedanPosX + 15, sedanPosY + 2.5, 3, 10, 75 * Math.PI/180, 0, 2 * Math.PI);
        // ctx.fillStyle = "white";
        // ctx.fill();
        // ctx.stroke();

        // ctx.beginPath();
        // ctx.ellipse(sedanPosX + sedanWidth - 15, sedanPosY + 2.5, 3, 10, 105 * Math.PI/180, 0, 2 * Math.PI);
        // ctx.fillStyle = "white";
        // ctx.fill();
        // ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sedanPosX + 5, sedanPosY + 10);
        ctx.lineTo(sedanPosX + 10, sedanPosY + 25)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(sedanPosX + sedanWidth - 5, sedanPosY + 10);
        ctx.lineTo(sedanPosX + sedanWidth - 10, sedanPosY + 25)
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sedanPosX + 10, sedanPosY + sedanHeight - 2.5, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sedanPosX + 15, sedanPosY + sedanHeight - 2, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sedanPosX + sedanWidth - 10, sedanPosY + sedanHeight - 2.5, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sedanPosX + sedanWidth - 15, sedanPosY + sedanHeight - 2, 3, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        // front window
        ctx.beginPath();
        ctx.moveTo(sedanPosX + 10, sedanPosY + 30);
        ctx.lineTo(sedanPosX + 60, sedanPosY + 30);
        ctx.lineTo(sedanPosX + 60 - 10, sedanPosY + 30 + 15);
        ctx.lineTo(sedanPosX + 20, sedanPosY + 30 + 15);
        ctx.lineTo(sedanPosX + 10, sedanPosY + 30);
        ctx.fillStyle = "#83cef4";
        ctx.fill();
        ctx.stroke();

        // left window
        ctx.beginPath();
        ctx.moveTo(sedanPosX + 5, sedanPosY + 30);
        ctx.lineTo(sedanPosX + 5, sedanPosY + 30 + 60);
        ctx.lineTo(sedanPosX + 5 + 10, sedanPosY + 30 + 60 - 20);
        ctx.lineTo(sedanPosX + 5 + 10, sedanPosY + 30 + 60 - 20 - 20);
        ctx.lineTo(sedanPosX + 5, sedanPosY + 30);
        ctx.fillStyle = "#83cef4";
        ctx.fill();
        ctx.stroke();

        // right window
        ctx.beginPath();
        ctx.moveTo(sedanPosX + 5 + 60, sedanPosY + 30);
        ctx.lineTo(sedanPosX + 5 + 60, sedanPosY + 30 + 60);
        ctx.lineTo(sedanPosX + 5 + 60 - 10, sedanPosY + 30 + 60 - 20);
        ctx.lineTo(sedanPosX + 5 + 60 - 10, sedanPosY + 30 + 60 - 20 - 20);
        ctx.lineTo(sedanPosX + 5 + 60, sedanPosY + 30);
        ctx.fillStyle = "#83cef4";
        ctx.fill();
        ctx.stroke();

        // rear window
        ctx.beginPath();
        ctx.moveTo(sedanPosX + 10, sedanPosY + 95);
        ctx.lineTo(sedanPosX + 10 + 50, sedanPosY + 95);
        ctx.lineTo(sedanPosX + 10 + 50 - 10, sedanPosY + 95 - 20);
        ctx.lineTo(sedanPosX + 10 + 10, sedanPosY + 95 - 20);
        ctx.lineTo(sedanPosX + 10, sedanPosY + 95);
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


class Taxi extends _car__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(posX, posY, width, height, velocityX, velocityY, wheelDist) {
    super(posX, posY, width, height, velocityX, velocityY, wheelDist); // 315, 470, 70, 110, variable, 0, 70

    // this.posX = 315;
    // this.posY = 470;
    // this.width = 70;
    // this.height = 110;
    // this.velocityX = this.width + 20;
    // this.velocityY = 0;
    // this.wheelDist = 70;

    // Refactor: 
    // [canvas]wheelDist should depend on height
  }
  // requestanimationframe

  move() {
    this.posX += this.velocityX;
  }

  draw(ctx) {
    // Refactoring: n for-loops

    // car body
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
    ctx.moveTo(this.posX - 7, this.posY + taxiWheelDist + 10);
    ctx.lineTo(this.posX, this.posY + taxiWheelDist + 10);
    ctx.lineTo(this.posX, this.posY + taxiWheelDist + 30);
    ctx.lineTo(this.posX - 7, this.posY + taxiWheelDist + 30);
    ctx.lineTo(this.posX - 7, this.posY + taxiWheelDist + 10);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.posX + this.width + 7, this.posY + taxiWheelDist + 10);
    ctx.lineTo(this.posX + this.width, this.posY + taxiWheelDist + 10);
    ctx.lineTo(this.posX + this.width, this.posY + taxiWheelDist + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + taxiWheelDist + 30);
    ctx.lineTo(this.posX + this.width + 7, this.posY + taxiWheelDist + 10);
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




document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("display");
    // canvas.width = 725;
    // canvas.height = 600;
    const ctx = ctx.getContext("2d");
    const display = new _display__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    display.draw();
    // window.onload = function() {
    //     var canvas = document.getElementById("display");
    //     var ctx = canvas.getContext("2d");
    //     // var img = document.getElementById("road");
    //     ctx.drawImage(img, 132.5, 0);
    // };
})

/***/ }),

/***/ "./lib/display.js":
/*!************************!*\
  !*** ./lib/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (65:8)\nYou may need an appropriate loader to handle this file type.\n| \n|   draw(ctx) {\n>     if ()\n|       this.background.draw(ctx);\n|   }");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./lib/background.js");
/* harmony import */ var _car_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car/car */ "./lib/car/car.js");
/* harmony import */ var _car_taxi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car/taxi */ "./lib/car/taxi.js");
/* harmony import */ var _car_sedan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car/sedan */ "./lib/car/sedan.js");
/* harmony import */ var _building_building__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./building/building */ "./lib/building/building.js");
/* harmony import */ var _building_commercial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./building/commercial */ "./lib/building/commercial.js");
/* harmony import */ var _building_church__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./building/church */ "./lib/building/church.js");




// import Suv from "./suv";



// import LaneLines from "./lane_lines";

class Game {
  // new Commercial(17.5, -50, 90, 100, 100, 50)
  constructor(ctx) {
    this.background = new _background__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.taxi = new _car_taxi__WEBPACK_IMPORTED_MODULE_2__["default"](315, 470, 70, 110, 90, 0, 70); // <-90->
    this.buildingsHash = {
      commericial: 50,
      church: 50,
    };
    this.buildings = [];
    this.collided = false;
    this.velocity = 2;
    this.score = 0;
    this.inGame = false;
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

  animateBeforeStart() {

  }

  scoreIncrementation() {
    const timeCheckpointI = 15;
    const timePeriodI = 500;
    const timeCheckpointII = 35; 
    const timePeriodII = 400;
    const timeCheckpointIII = 60; 
    const timePeriodIII = 300;
    const timeCheckpointIV = 90;
    const timePeriodIV = 200; 
    // const timeCheckpointV = 125;
    const timePeriodV = 100;

    while (inGame) {
      if (this.score <= timeCheckpointI * 1000 / timePeriodI) {
        startIncrement(timePeriodI);
      } else if (this.score <= timeCheckpointII * 1000 / timePeriodII) {
        startIncrement(timePeriodII);
      } else if (this.score <= timeCheckpointII * 1000 / timePeriodIII) {
        startIncrement(timePeriodIII);
      } else if (this.score <= timeCheckpointIV * 1000 / timePeriodIV) {
        startIncrement(timePeriodIV);
      } else {
        startIncrement(timePeriodV);
      }
    }
  }

  startIncrement(millisecs) {
    setTimeout(incrementScore, millisecs);
  }

  incrementScore(millisecs) {
    this.score++;
    this.startIncrement(millisecs);
  }

  moveTaxi(direction) {
    if (this.taxi.posX > 135 && direction === "left") {
      this.taxi.posX -= this.taxi.velocityX;
    } else if (this.taxi.posX < 495 && direction === "right") {
      this.taxi.posX += this.taxi.velocityX;
    }
  }

  // collided?() {
  //   if (this.collided) {
      
  //   }

  // }
  draw(ctx) {
    if (this.inGame === false && this.paused === false) {
      this.ctx.globalAlpha = 0.4;
    } else if (this.paused) {
      this.ctx.globalAlpha = 0.6;
    // } else if (this.inGame && this.paused) {
    //   this.ctx.globalAlpha = 0.6;
    // } else if (this.inGame === false && this.paused) {
    //   this.ctx.globalAlpha = 0.6;
    } else {
      this.ctx.globalAlpha = 1;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: generateBuildings, generateCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBuildings", function() { return generateBuildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCar", function() { return generateCar; });
/* harmony import */ var _car_sedan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car/sedan */ "./lib/car/sedan.js");
/* harmony import */ var _building_commercial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building/commercial */ "./lib/building/commercial.js");
/* harmony import */ var _building_church__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building/church */ "./lib/building/church.js");




const generateBuildings = (side) => {
    let buildings = [];
    let initPosX = side === "left" ? 17.5 : 617.5
    let initPosY = -300;
    for (let i = 0; i < 9; i++) {
        let commercial = new _building_commercial__WEBPACK_IMPORTED_MODULE_1__["default"](initPosX, initPosY, 90, 100, 100, 50);
        buildings << commercial;
        initPosY += 125;
    }
    return buildings;
}

const generateCar = () => {
    const cars = [new _car_sedan__WEBPACK_IMPORTED_MODULE_0__["default"]()];
    const carPosXs = [135, 225, 315, 405, 495];
    const suvPosXs = [130, 220, 310, 400, 490]; // suv: 80 * 120;


    
} 

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map