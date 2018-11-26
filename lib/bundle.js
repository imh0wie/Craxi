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
        ctx.fillRect(0, 0, 725, 600);

        ctx.beginPath();
        ctx.rect(125, -1 , 5, 602);
        ctx.fillStyle = "#bababa";
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.rect(130, -1 , 2.5, 602);
        ctx.fillStyle = "#bababa";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(592.5, -1 , 2.5, 602);
        ctx.fillStyle = "#bababa";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(595, -1 , 5, 602);
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
    // const targetPosX = this.posX + n;
    // const diff = n > 0 ? 0.25 : -0.25;
    // while (this.posX !== targetPosX) {
    //   this.posX += diff;
    // }
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

window.onload = () => {
    const scoreboard = document.getElementById("scoreboard");
    let database = firebase.database().ref("scores").orderByChild("score");
    debugger
    let i = 1;
    database.on("child_added", (snapshot) => {
        const data = snapshot.val();
        const row = document.createElement("tr");
        const keys = Object.keys(data);
        debugger
        const rank = document.createElement("td");
        const n = document.createTextNode(i);
        rank.appendChild(n); // td
        row.appendChild(rank);
        keys.forEach((key) => {
            const datum = document.createElement("td");
            const value = document.createTextNode(data[key]);
            datum.appendChild(value); // td
            row.appendChild(datum); // tr -- td(n)
            debugger
        })
        scoreboard.appendChild(row);
        i++;
    });
};

/***/ }),

/***/ "./lib/display.js":
/*!************************!*\
  !*** ./lib/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./lib/game.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./lib/util.js");




class Display {
  constructor(ctx) {
    this.ctx = ctx;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.status = _util__WEBPACK_IMPORTED_MODULE_1__["setStatus"](this.inGame, this.paused);
    // this.tracks = ["./assets/audio/tracks/1.mp3", "./assets/audio/tracks/2.mp3", "./assets/audio/tracks/3.mp3", "./assets/audio/tracks/4.mp3"]
    this.bg = new Audio();
    this.bg.src = "./assets/audio/tracks/1.mp3";
    this.turning = new Audio();
    this.turning.src = "./assets/audio/sounds/skrt.mp3";
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyHandlers();
  }

  keyHandlers() {
    document.addEventListener('keydown', this.keyDownHandler, false);
  }

  keyDownHandler(e) {
    const nameInput = document.getElementById("name-input");
    if (this.game.name) {
      switch (e.keyCode) {
        case 81:
          if (this.game.inGame && this.game.paused) {
            this.bg.play();
            this.ctx.clearRect(0, 0, 725, 600);
            this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
            this.game.animate();
          }
          break;
        case 77:
          if (!this.game.inGame && this.game.paused) {
            this.ctx.clearRect(0, 0, 725, 600);
            this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
            this.game.resetInput(nameInput);
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
              this.game.taxi.lane -= 1;
              this.turning.play();
              // while (this.game.taxi.posX !== targetPosX) {
              window.requestAnimationFrame(this.game.taxi.move(92.5 * -1));
              // }
            }
          }
          break;
        case 39:
          if (this.game.inGame && !this.game.paused) {
            if (this.game.taxi.posX < 512.5) {
              this.game.taxi.lane += 1;
              this.turning.play();
              window.requestAnimationFrame(this.game.taxi.move(92.5));
            }
          }
          break;
        default:
          break;
      }
    } else {
      debugger
      switch (e.keyCode) {
        case 13:
          debugger
          this.game.setName(nameInput);
          break;
        default:
          break;
      }
    }
  }
  
  draw() {
    this.game.run();
    // if (!this.game.inGame && this.game.paused) {
    //   this.audio = new Audio ();
    //   this.audio.src = "./assets/audio/tracks/1.mp3";
    // }
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
    this.background = new _background__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
    this.score = new _score__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.buildings = _util__WEBPACK_IMPORTED_MODULE_3__["generateBuildings"]("left", ctx).concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateBuildings"]("right", ctx));
    this.laneLines = [].concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateLaneLine"](1, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateLaneLine"](2, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateLaneLine"](3, ctx)).concat(_util__WEBPACK_IMPORTED_MODULE_3__["generateLaneLine"](4, ctx));
    // this.steadyObjects = [].concat(this.buildings).concat(this.laneLines); // steady in reality (.concat(this.buildings))
    this.randomCars = [];
    this.taxi = new _car_taxi__WEBPACK_IMPORTED_MODULE_1__["default"]({ 
      lane: 3,
    });
    this.name = null;
    this.inGame = false;
    this.paused = false;
    this.collided = false;
    this.steadyVelocity = 9;
    this.randomVelocity = 7;
    this.time = 0;
    this.fontSize = 36;
    this.effect = new Audio();
    this.effect.src = "./assets/audio/sounds/running.mp3";
    this.database = firebase.database();
    this.animate = this.animate.bind(this);
    // this.drawLogo = this.drawLogo.bind(this);
    this.draw = this.draw.bind(this);
    this.run = this.run.bind(this);
  }

  setName(element) {
    debugger
    if (element.value.length >= 3 && element.value.length <= 7) {
      this.name = element.value;
      element.className = "none";
      debugger
    } else {
      element.className = "alert";
      const canvas = document.getElementById("display");
      canvas.select();
      debugger
    }
  }

  resetInput(element) {
    element.value = "";
    element.className = "";
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
        this.database.ref("scores").push({
          name: this.name,
          score: Math.round(this.score.points)
        });
        debugger
      }
    })
  }

  updateLevel() {
    if (this.score.time <= 20) {
      this.level = "I";
    } else if (this.score.time <= 40) {
      this.level = "II";
    } else if (this.score.time <= 60) {
      this.level = "III";
    } else if (this.score.time <= 100) {
      this.level = "IV";
    } else if (this.score.time <= 160) {
      this.level = "V";
    } else {
      this.level = "VI";
    }
  }

  moveBuildings(velocity) {
    this.buildings.forEach((building) => {
      building.move(velocity)
      if (building.posY >= 1425) {
        building.posY = -600;
      }
    })
  }

  moveLaneLines(velocity) {
    this.laneLines.forEach((grid) => {
      grid.move(velocity)
      if (grid.posY >= 1050) {
        grid.posY = -355;
      }
    })
  }

  moveSteadyObjects(velocity) {
    this.moveBuildings(velocity);
    this.moveLaneLines(velocity);
  }

  generateCars(level) {
    const scoreCheckpoints = {
      I: 50,
      II: 25,
      III: 0,
      IV: -25,
      V: -50,
      VI: -75,
    };
    if (this.randomCars.length === 0) {
      this.randomCars.push(_util__WEBPACK_IMPORTED_MODULE_3__["generateCar"](this.taxi.lane, this.level, false));
    } else if (this.randomCars[this.randomCars.length - 1].posY >= scoreCheckpoints[level]) {
      this.randomCars.push(_util__WEBPACK_IMPORTED_MODULE_3__["generateCar"](this.taxi.lane, this.level, true));
    }
  }


  moveRandomCars(velocity) {
    this.randomCars.forEach((car) => {
        car.move(velocity);
    });
  }

  step(steadyVelocity, randomVelocity) {
    this.collisionDetector();
    this.updateLevel();
    if (this.inGame && !this.paused) {
      switch (this.level) {
        case "I":
          this.steadyVelocity *= Math.pow(1.05, 1/600);
          this.randomVelocity *= Math.pow(1.05, 1/600);
          break;
        case "II":
          this.steadyVelocity *= Math.pow(1.05, 1/600);
          this.randomVelocity *= Math.pow(1.05, 1/600);
          break;
        case "III":
          this.steadyVelocity *= Math.pow(1.1, 1/600);
          this.randomVelocity *= Math.pow(1.1, 1/600);
          break;
        case "IV":
          this.steadyVelocity *= Math.pow(1.1, 1/600);
          this.randomVelocity *= Math.pow(1.1, 1/600);
          break;
        case "V":
          this.steadyVelocity *= Math.pow(1.15, 1/600);
          this.randomVelocity *= Math.pow(1.15, 1/600);
          break;
      }
    }
    this.moveSteadyObjects(steadyVelocity);
    this.moveRandomCars(randomVelocity);
  }

  animate() {
    let velocity;
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.myRequestAnimationFrame;
    // this.ctx.clearRect(0, 0, 725, 600);
    if (!this.inGame && !this.paused) {
      this.time += 1;
      this.step(this.steadyVelocity, this.randomVelocity);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && !this.paused) {
      this.step(this.steadyVelocity, this.randomVelocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      requestAnimationFrame(this.animate);
    } else if (this.inGame && this.paused) {
      this.step(this.steadyVelocity, this.randomVelocity);
      this.generateCars(this.level);
      this.draw(this.ctx);
      window.cancelAnimationFrame(this.animate);
      this.pauses += 1;
    } else if (!this.inGame && this.paused) {
      window.cancelAnimationFrame(this.animate);
    }
  }

  drawStartScreen() {
    this.logo = new Image();
    this.logo.src = './assets/images/logo.png'; 
    this.ctx.drawImage(this.logo, 112, 75);
    const time = this.time % 120;
    if (this.name) {
      if (_util__WEBPACK_IMPORTED_MODULE_3__["inRange"](time, [0, 59])) {
        // this.ctx.fill();
        this.ctx.fillStyle = "white";
        this.ctx.font = "36px Verdana";
        this.ctx.strokeStyle = "";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Press P to start the game", 362.5, 450);  
      }
    } else {
      if (_util__WEBPACK_IMPORTED_MODULE_3__["inRange"](time, [0, 59])) {
        // this.ctx.fill();
        this.ctx.fillStyle = "white";
        this.ctx.font = "30px Verdana";
        this.ctx.strokeStyle = "";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Fill in your name", 362.5, 400);  
      }
    }
  }

  drawPauseScreen() {
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.font = "30px Verdana";
    this.ctx.fillText("Press P to resume the game", 362.5, 250);
    this.ctx.fillText("Press Q to quit the game", 362.5, 350);
  }

  drawOverScreen() {
    this.ctx.fill();
    this.ctx.font = "36px Verdana";
    this.ctx.textAlign = "center";
    this.ctx.fillText("GAME OVER", 362.5, 250);
    this.ctx.fillText("Press M to return to menu", 362.5, 350);
  }

  drawLevel() {
    this.ctx.font = `${this.fontSize}px Verdana`;
    this.ctx.fillStyle = this.fontSize > 30 ? "yellow" : "black";
    if (this.fontSize >= 24) { 
      this.fontSize *= Math.pow(2/3, 1/60); 
      // 36 * (n)^60 = 24
      //           n = (2/3)^(1/60)
    }
    switch (this.score.time) {
      case 20:
      this.fontSize = 36;
      break;
      case 40:
      this.fontSize = 36;
      break;
      case 60:
      this.fontSize = 36;
      break;
      case 100:
      this.fontSize = 36;
      break;
      case 160:
      this.fontSize = 36;
      break;
    }
    this.ctx.fillText("LEVEL " + this.level, 50, 50);
  }
  
  draw() {
    this.background.draw(this.ctx, this);
    this.buildings.forEach((building, i) => {
      building.draw(i % building.colors.length);
    })
    this.laneLines.forEach((grid) => {
      grid.draw();
    })
    if (!(!this.inGame && !this.paused)) {
      this.effect.play();
      this.drawLevel();
      this.score.draw(this.ctx);
    }
    
    this.randomCars.forEach((car, i) => {
      car.draw(this.ctx, i);
    })
    this.taxi.draw(this.ctx);
    if (!this.inGame && !this.paused) {
      this.drawStartScreen();
    } else if (this.inGame && this.paused) {
      this.effect.pause();
      this.drawPauseScreen();
    } else if (!this.inGame && this.paused) {
      this.effect.pause();
      this.effect.src = "./assets/audio/sounds/crash1.mp3"
      this.effect.play();
      this.drawOverScreen();
    }
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
    this.dt = 0;
    this.time = 0;
    this.points = 0;
    this.fontSize = 36;
    this.startIncrement = this.startIncrement.bind(this);
  }

  startIncrement() {
    this.oldTime = this.time;
    this.dt += 1;
    this.time = this.dt / 30;
    if (Math.floor(this.time) !== Math.floor(this.oldTime)) {
      if (this.time <= 20) { // 10s
        this.points += 1;
      } else if (this.time <= 40) { // 20s
        this.points += 1.2;
      } else if (this.time <= 60) { // 30s
        this.points += 1.4;
      } else if (this.time <= 100) { // 50s
        this.points += 1.6;
      } else if (this.time <= 160) { // 80s
        this.points += 1.8;
      } else {
        this.points += 2;
      }
    }    
  }

  draw(ctx) {
    ctx.font = "24px Verdana";
    ctx.fillStyle = "black";
    ctx.fillText("SCORE " + Math.round(this.points), 650, 40);
    this.startIncrement();
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
        let commercial = new _building_commercial__WEBPACK_IMPORTED_MODULE_0__["default"](options);

        buildings.push(commercial);
        initPosY += 225;
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
        initPosY += 85;
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

const generateCar = (currentLane, level, checker = true) => {
    if (!checker) return new _car_sedan__WEBPACK_IMPORTED_MODULE_2__["default"]({lane: 3, posY: -500});
    const arrayLengths = {
        "I": 15,
        "II": 15,
        "III": 22,
        "IV": 22,
        "V": 35, 
        "VI": 35, 
    }
    // const lanes = Array.apply(null, Array(arrayLengths[level])).map(function (el) { return currentLane + 1; })
    const currentLanes = Array.apply(null, Array(arrayLengths[level])).map(function (el) { return currentLane; })
    // debugger
    const lanes = [1, 2, 3, 4, 5].concat(currentLanes); // 327.5
    // debugger
    // const suvPosXs = [130, 220, 310, 400, 490]; // suv: 80 * 120;
    const lane = lanes[Math.floor(Math.random() * lanes.length)];
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