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
    // this.lane = 3;
    // this.posXs = [142.5, 235, 327.5, 420, 512.5];
    this.posX = 327.5;
    this.posY = 470;
    // Refactor: 
    // [canvas]wheelDist should depend on height
  }


  move(n) {
    this.posX += n;
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
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./lib/display.js");


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("display");
    canvas.width = 725;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    const display = new _display__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    display.draw();
});

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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./lib/util.js");





class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
    this.status = _util__WEBPACK_IMPORTED_MODULE_2__["setStatus"](this.inGame, this.paused);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyHandlers();
    // this.drawStartScreen = this.drawStartScreen.bind(this);
    // this.drawPauseScreen = this.drawPauseScreen.bind(this);
    // this.drawOverScreen = this.drawOverScreen.bind(this);
  }

  keyHandlers() {
    document.addEventListener('keydown', this.keyDownHandler, false);
    // document.addEventListener('keyup', this.keyUpHandler, false);
  }

  keyDownHandler(e) {
    debugger
    switch (e.keyCode) {
      case 81:
        if (this.game.inGame && this.game.paused) {
          this.ctx.clearRect(0, 0, 725, 600);
          // this.game.inGame = false;
          // this.game.paused = false;
          debugger
          this.game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
          this.game.animate();
        }
      case 77:
        if (!this.game.inGame && this.game.paused) {
          this.ctx.clearRect(0, 0, 725, 600);
          // this.game.inGame = false;
          // this.game.paused = false;
          this.game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx);
          this.game.animate();
        }
      break;
      case 80:
        if (!this.game.inGame && !this.game.paused) {
          this.game.inGame = true;
        } else if (this.game.inGame && !this.game.paused) {
          this.game.paused = true;
        } else if (this.game.inGame && this.game.paused) {
          this.game.paused = false;
          this.game.animate();
        }
        break;
      case 37:
        if (this.game.inGame && !this.game.paused) {
          if (this.game.taxi.posX > 142.5) {
            window.requestAnimationFrame(this.game.taxi.move(92.5 * -1));
          }
        }
      break;
      case 39:
        if (this.game.inGame && !this.game.paused) {
          if (this.game.taxi.posX < 512.5) {
            window.requestAnimationFrame(this.game.taxi.move(92.5));
          }
        }
        break;
      default:
        break;
    }
  }
  
  draw() {
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
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./lib/background.js");
/* harmony import */ var _car_taxi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car/taxi */ "./lib/car/taxi.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score */ "./lib/score.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./lib/util.js");





class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.options = {
      game: this,
    };
    this.collided = false;
    this.background = new _background__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
    this.score = new _score__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.buildings = _util__WEBPACK_IMPORTED_MODULE_3__["generateBuildings"]("left", ctx).concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateBuildings"]("right", ctx));
    this.laneLines = [].concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateLaneLine"](1, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateLaneLine"](2, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateLaneLine"](3, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateLaneLine"](4, ctx));
    this.steadyObjects = [].concat(this.buildings).concat(this.laneLines); // steady in reality
    this.randomCars = [];
    this.taxi = new _car_taxi__WEBPACK_IMPORTED_MODULE_1__["default"]({ 
      lane: 2,
    });
    this.levels = ["I", "II", "III", "IV", "V"];
    this.inGame = false;
    this.paused = false;
    this.pauses = 0;
    this.velocity = 12.5;
    this.controllers = {
      left: false,
      right: false,
      p: false,
    };
    // this.keyDownHandler = this.keyDownHandler.bind(this);
    // this.keyUpHandler = this.keyUpHandler.bind(this);
    // this.keyHandlers();
    // this.keyActions = this.keyActions.bind(this);
    // this.moveTaxi = this.moveTaxi.bind(this);
    // debugger
    this.animate = this.animate.bind(this);
    this.draw = this.draw.bind(this);
    this.run = this.run.bind(this);
  }

  // keyHandlers() {
  //   document.addEventListener('keydown', this.keyDownHandler, false);
  //   // document.addEventListener('keyup', this.keyUpHandler, false);
  // }

  // keyDownHandler(e) {
  //   debugger
  //   switch (e.keyCode) {
  //     case 81:
  //       if (!this.inGame && this.paused) {
  //         this.ctx.clearRect(0, 0, 725, 600);
  //         this.inGame = false;
  //         this.paused = false;
  //         debugger
  //         // this.game = new Game(this.ctx);
  //         this.animate();
  //       }
  //     case 77:
  //       if (!this.inGame && this.paused) {
  //         this.ctx.clearRect(0, 0, 725, 600);
  //         this.inGame = false;
  //         this.paused = false;
  //         // this.game = new Game(this.ctx);
  //         this.animate();
  //       }
  //     break;
  //     case 80:
  //       if (!this.inGame && !this.paused) {
  //         this.inGame = true;
  //       } else if (this.inGame && !this.paused) {
  //         this.paused = true;
  //       } else if (this.inGame && this.paused) {
  //         this.paused = false;
  //         this.animate();
  //       }
  //       break;
  //     case 37:
  //       if (this.inGame && !this.paused) {
  //         if (this.taxi.posX > 142.5) {
  //           window.requestAnimationFrame(this.taxi.move(92.5 * -1));
  //         }
  //       }
  //     break;
  //     case 39:
  //       if (this.inGame && !this.paused) {
  //         if (this.taxi.posX < 512.5) {
  //           window.requestAnimationFrame(this.taxi.move(92.5));
  //         }
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // }
  
  // keyDownHandler(e) {
  //   switch (e.keyCode) {
  //     case 80:
  //     debugger
  //       // this.pauses += 1;
  //       this.controllers.p = true;
  //       debugger
  //       break;
  //     case 37:
  //       this.controllers.left = true;
  //     break;
  //     case 39:
  //       this.controllers.right = true;
  //     break;
  //     default:
  //       break;
  //   }
  // }

  // keyUpHandler(e) {
  //   switch (e.keyCode) {
  //     // case 80:
  //     //   // this.pauses += 1;
  //     //   this.controllers.p = false;
  //     //   break;
  //     case 37:
  //       this.controllers.left = false;
  //     break;
  //     case 39:
  //       this.controllers.right = false;
  //     break;
  //     default:
  //       break;
  //   }
  // }

  // keyActions() {
  //   debugger
  //   if (!this.inGame && !this.paused && this.controllers.p) {
  //     this.inGame = true;
  //     debugger
  //   } else if (this.inGame && !this.paused) {
  //     if (this.controllers.p) {
  //       this.paused = true;
  //     } else if (this.controllers.left) {
  //       this.taxi.move(this.velocity * -1);
  //     } else if (this.controllers.right) {
  //       this.taxi.move(this.velocity);
  //     }
  //     this.velocity *= 0.9;
  //   } else if (this.inGame && this.paused) {
  //     if (this.controllers.p) {
  //       this.paused = false;
  //     } 
  //   } else if (!this.inGame && this.paused && e.keyCode === 80) {
  //     this.inGame = true;
  //   }
  // }

  animateKeyActions() {
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.myRequestAnimationFrame;
                            debugger
    requestAnimationFrame(this.keyActions);
  }

  collisionDetector() {
    this.randomCars.forEach((car) => {
      const xRange = [car.posX, car.posX + car.width];
      const yRange = [car.posY, car.posY + car.height];
      if (_util__WEBPACK_IMPORTED_MODULE_3__["inRange"](this.taxi.posX, xRange) && _util__WEBPACK_IMPORTED_MODULE_3__["inRange"](this.taxi.posY, yRange) ||
          _util__WEBPACK_IMPORTED_MODULE_3__["inRange"](this.taxi.posX + this.taxi.width, xRange) && _util__WEBPACK_IMPORTED_MODULE_3__["inRange"](this.taxi.posY + this.taxi.height, yRange) ) {
          this.collided = true;
          this.inGame = false;
          this.paused = true;
      }
    })
  }

  // restart() {
  //   // this.score = new Score();
  //   this.inGame = true;
  //   this.paused = false;
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
      this.randomCars.push(_util__WEBPACK_IMPORTED_MODULE_3__["generateCar"]());
    // } else if (this.randomCars.length === 10) {
    //   this.randomCars.shift();
    //   // debugger
    //   this.randomCars.push(Util.generateCar());
    } else if (this.randomCars[this.randomCars.length - 1].posY >= scoreCheckpoints[level]) {
      this.randomCars.push(_util__WEBPACK_IMPORTED_MODULE_3__["generateCar"]());
    }
  }


  moveRandomCars(velocity) {
    this.randomCars.forEach((car) => {
        car.move(velocity);
    });
  }

  step(velocity) {
    // this.keyActions();
    // if (!this.inGame && this.pauses === 0) this.inGame = false;
    this.collisionDetector();
    // this.score.startIncrement(this);
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
    // this.ctx.clearRect(0, 0, 725, 600);
    if (!this.inGame && !this.paused) {
      // velocity = 12.5;
      this.step(this.velocity);
      // this.generateCars(this.level);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && !this.paused) {
      // velocity = 12.5;
      this.step(this.velocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
      console.log("Started!")
    } else if (this.inGame && this.paused) {
      // velocity = 12.5;
      this.step(this.velocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      window.cancelAnimationFrame(this.animate);
      this.pauses += 1;
      console.log("Paused");
    } else if (!this.inGame && this.paused) {
      window.cancelAnimationFrame(this.animate);
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

  drawStartScreen() {
    // const img = document.getElementById("road");
    this.ctx.fillRect(0, 0, 725, 600);
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("Press P to start the game", 362.5, 300);
  }

  drawPauseScreen() {
    this.ctx.fillRect(0, 0, 725, 600);
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("Press P to resume the game", 362.5, 250);
    this.ctx.strokeText("Press Q to quit the game", 362.5, 350);
  }

  drawOverScreen() {
    this.ctx.fillRect(0, 0, 725, 600);
    this.ctx.globalAlpha = 0.9;
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.font = "36px Serif";
    this.ctx.strokeStyle = "";
    this.ctx.textAlign = "center";
    this.ctx.strokeText("GAME OVER", 362.5, 250);
    this.ctx.strokeText("Press M to return to menu", 362.5, 350);
  }
  
  draw() {
    if (!this.inGame && !this.paused) {
      this.drawStartScreen();
    } else if (this.inGame && this.paused) {
      this.drawPauseScreen();
    } else if (!this.inGame && this.paused) {
      this.drawOverScreen();
    }
    this.background.draw(this.ctx, this);
    this.buildings.forEach((building, i) => {
      building.draw(i % building.colors.length);
    })
    this.score.draw(this.ctx, this);
    this.laneLines.forEach((grid) => {
      grid.draw();
    })
    
    this.randomCars.forEach((car, i) => {
      car.draw(this.ctx, i);
    })
    this.taxi.draw(this.ctx);
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

/***/ "./lib/score.js":
/*!**********************!*\
  !*** ./lib/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Score {
    constructor() {
      this.score = 0;
      this.scoreIncrementor = 1;
      // this.incrementScore = this.incrementScore.bind(this);
      // this.increment = this.increment.bind(this);
      // this.incrementScore = this.incrementScore.bind(this);
      this.startIncrement.bind(this);
    }

    // incrementScore() {
    //     this.score++;
    //     this.increment(millisecs);
    // }
          
    // increment(millisecs) {
    //     setInterval(this.incrementScore(), millisecs);
    // }

    
    startIncrement(game) {
        const timePeriodI = 500;
        const timeCheckpointI = 15;
        const scoreCheckpointI = timeCheckpointI * 1000 / timePeriodI;
        const timePeriodII = 400;
        const timeCheckpointII = 35; 
        const scoreCheckpointII = scoreCheckpointI + (timeCheckpointII - timeCheckpointI) * 1000 / timePeriodII;
        const timePeriodIII = 300;
        const timeCheckpointIII = 60; 
        const scoreCheckpointIII = scoreCheckpointII + (timeCheckpointIII - timeCheckpointII) * 1000 / timePeriodIII;
        const timePeriodIV = 200; 
        const timeCheckpointIV = 90;
        const scoreCheckpointIV = scoreCheckpointIII + (timeCheckpointIV - timeCheckpointIII) * 1000 / timePeriodIV;
        const timePeriodV = 100;
        while (game.inGame === "playing") {
          if (this.score <= scoreCheckpointI) {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodI);
          } else if (this.score <= scoreCheckpointII) {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodII);
         } else if (this.score <= scoreCheckpointIII) {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodIII);
          } else if (this.score <= scoreCheckpointIV) {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodIV);
          } else {
            this.score += this.scoreIncrementor;
            // this.increment(timePeriodV);
          }
        }
    }


    draw(ctx, game) {
        ctx.font = "24px Serif";
        ctx.fillStyle = "white";
        ctx.strokeText("SCORE " + this.score, 600, 20);
        this.startIncrement(game);
    }
  }
  
  /* harmony default export */ __webpack_exports__["default"] = (Score);
  

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: generateBuildings, generateLaneLine, generateCar, setStatus, inRange, exRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBuildings", function() { return generateBuildings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLaneLine", function() { return generateLaneLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCar", function() { return generateCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatus", function() { return setStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inRange", function() { return inRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exRange", function() { return exRange; });
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
    const lanes = [1, 2, 3, 4, 5]; // 327.5
    // const suvPosXs = [130, 220, 310, 400, 490]; // suv: 80 * 120;
    const lane = lanes[Math.floor(Math.random() * 4)];
    const types = ["sedan"];
    const type = types[0];
    const options = {
        lane: lane,
        posY: -500,
    }
    // const type = types[Math.floor(Math.random() * 2)];
    const car = (type === "sedan") ? new _car_sedan__WEBPACK_IMPORTED_MODULE_2__["default"](options) : null;
    return car;
}

const setStatus = (inGame, paused) => {
    // return "playing";
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

const inRange = (pos, posRange) => {
    return pos >= posRange[0] && pos <= posRange[1];
}

const exRange = (pos, posRange) => {
    return pos > posRange[0] && pos < posRange[1];
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map