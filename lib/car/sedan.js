// import Car from "./car";

// class Sedan extends Car {
//     constructor(posX, posY, width, height, velocityX, velocityY, wheelDist) {
//         super(posX, posY, width, height, velocityX, velocityY, wheelDist, colors); // 315, 375, 70, 110, variable, 0, 70
//         // Refactor: 
//         // [canvas]wheelDist should depend on height
//     }

//     draw(ctx) { // definitely needs to be refactored with n loops
//         ctx.beginPath();
//         ctx.moveTo(sedanPosX, sedanPosY);
//         ctx.quadraticCurveTo(sedanPosX + sedanWidth / 2, sedanPosY - 15, sedanPosX + sedanWidth, sedanPosY);
//         ctx.quadraticCurveTo(sedanPosX + sedanWidth + 8, sedanPosY + (sedanHeight / 2), sedanPosX + sedanWidth, sedanPosY + sedanHeight);
//         ctx.quadraticCurveTo(sedanPosX + sedanWidth / 2, sedanPosY + sedanHeight + 15, sedanPosX, sedanPosY + sedanHeight);
//         ctx.quadraticCurveTo(sedanPosX - 8, sedanPosY + (sedanHeight / 2), sedanPosX, sedanPosY);
//         ctx.fillStyle = this.colors[Math.floor((Math.random() * 3) + 1) - 1];
//         ctx.fill();
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(sedanPosX - 7, sedanPosY + 10);
//         ctx.lineTo(sedanPosX, sedanPosY + 10);
//         ctx.lineTo(sedanPosX, sedanPosY + 30);
//         ctx.lineTo(sedanPosX - 7, sedanPosY + 30);
//         ctx.lineTo(sedanPosX - 7, sedanPosY + 10);
//         ctx.fillStyle = "grey";
//         ctx.fill();
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + sedanWidth + 7, sedanPosY + 10);
//         ctx.lineTo(sedanPosX + sedanWidth, sedanPosY + 10);
//         ctx.lineTo(sedanPosX + sedanWidth, sedanPosY + 30);
//         ctx.lineTo(sedanPosX + sedanWidth + 7, sedanPosY + 30);
//         ctx.lineTo(sedanPosX + sedanWidth + 7, sedanPosY + 10);
//         ctx.fillStyle = "grey";
//         ctx.fill();
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(sedanPosX - 7, sedanPosY + sedanWheelDist + 10);
//         ctx.lineTo(sedanPosX, sedanPosY + sedanWheelDist + 10);
//         ctx.lineTo(sedanPosX, sedanPosY + sedanWheelDist + 30);
//         ctx.lineTo(sedanPosX - 7, sedanPosY + sedanWheelDist + 30);
//         ctx.lineTo(sedanPosX - 7, sedanPosY + sedanWheelDist + 10);
//         ctx.fillStyle = "grey";
//         ctx.fill();
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + sedanWidth + 7, sedanPosY + sedanWheelDist + 10);
//         ctx.lineTo(sedanPosX + sedanWidth, sedanPosY + sedanWheelDist + 10);
//         ctx.lineTo(sedanPosX + sedanWidth, sedanPosY + sedanWheelDist + 30);
//         ctx.lineTo(sedanPosX + sedanWidth + 7, sedanPosY + sedanWheelDist + 30);
//         ctx.lineTo(sedanPosX + sedanWidth + 7, sedanPosY + sedanWheelDist + 10);
//         ctx.fillStyle = "grey";
//         ctx.fill();
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + sedanWidth / 2 - 15, sedanPosY + 102);
//         ctx.lineTo(sedanPosX + sedanWidth / 2 + 15, sedanPosY + 102)
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(sedanPosX + sedanWidth / 2, sedanPosY + sedanHeight / 2 + 25, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(sedanPosX + sedanWidth / 2, sedanPosY + sedanHeight / 2 + 27.5, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(sedanPosX + sedanWidth / 2, sedanPosY + sedanHeight / 2 + 30, 85, 33 * Math.PI / 24, 39 * Math.PI / 24);
//         ctx.stroke();
//         // ctx.beginPath();
//         // ctx.ellipse(sedanPosX + 15, sedanPosY + 2.5, 3, 10, 75 * Math.PI/180, 0, 2 * Math.PI);
//         // ctx.fillStyle = "white";
//         // ctx.fill();
//         // ctx.stroke();

//         // ctx.beginPath();
//         // ctx.ellipse(sedanPosX + sedanWidth - 15, sedanPosY + 2.5, 3, 10, 105 * Math.PI/180, 0, 2 * Math.PI);
//         // ctx.fillStyle = "white";
//         // ctx.fill();
//         // ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + 5, sedanPosY + 10);
//         ctx.lineTo(sedanPosX + 10, sedanPosY + 25)
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + sedanWidth - 5, sedanPosY + 10);
//         ctx.lineTo(sedanPosX + sedanWidth - 10, sedanPosY + 25)
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(sedanPosX + 10, sedanPosY + sedanHeight - 2.5, 3, 0, 2 * Math.PI);
//         ctx.fillStyle = "red";
//         ctx.fill();
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(sedanPosX + 15, sedanPosY + sedanHeight - 2, 3, 0, 2 * Math.PI);
//         ctx.fillStyle = "red";
//         ctx.fill();
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(sedanPosX + sedanWidth - 10, sedanPosY + sedanHeight - 2.5, 3, 0, 2 * Math.PI);
//         ctx.fillStyle = "red";
//         ctx.fill();
//         ctx.stroke();

//         ctx.beginPath();
//         ctx.arc(sedanPosX + sedanWidth - 15, sedanPosY + sedanHeight - 2, 3, 0, 2 * Math.PI);
//         ctx.fillStyle = "red";
//         ctx.fill();
//         ctx.stroke();

//         // front window
//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + 10, sedanPosY + 30);
//         ctx.lineTo(sedanPosX + 60, sedanPosY + 30);
//         ctx.lineTo(sedanPosX + 60 - 10, sedanPosY + 30 + 15);
//         ctx.lineTo(sedanPosX + 20, sedanPosY + 30 + 15);
//         ctx.lineTo(sedanPosX + 10, sedanPosY + 30);
//         ctx.fillStyle = "#83cef4";
//         ctx.fill();
//         ctx.stroke();

//         // left window
//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + 5, sedanPosY + 30);
//         ctx.lineTo(sedanPosX + 5, sedanPosY + 30 + 60);
//         ctx.lineTo(sedanPosX + 5 + 10, sedanPosY + 30 + 60 - 20);
//         ctx.lineTo(sedanPosX + 5 + 10, sedanPosY + 30 + 60 - 20 - 20);
//         ctx.lineTo(sedanPosX + 5, sedanPosY + 30);
//         ctx.fillStyle = "#83cef4";
//         ctx.fill();
//         ctx.stroke();

//         // right window
//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + 5 + 60, sedanPosY + 30);
//         ctx.lineTo(sedanPosX + 5 + 60, sedanPosY + 30 + 60);
//         ctx.lineTo(sedanPosX + 5 + 60 - 10, sedanPosY + 30 + 60 - 20);
//         ctx.lineTo(sedanPosX + 5 + 60 - 10, sedanPosY + 30 + 60 - 20 - 20);
//         ctx.lineTo(sedanPosX + 5 + 60, sedanPosY + 30);
//         ctx.fillStyle = "#83cef4";
//         ctx.fill();
//         ctx.stroke();

//         // rear window
//         ctx.beginPath();
//         ctx.moveTo(sedanPosX + 10, sedanPosY + 95);
//         ctx.lineTo(sedanPosX + 10 + 50, sedanPosY + 95);
//         ctx.lineTo(sedanPosX + 10 + 50 - 10, sedanPosY + 95 - 20);
//         ctx.lineTo(sedanPosX + 10 + 10, sedanPosY + 95 - 20);
//         ctx.lineTo(sedanPosX + 10, sedanPosY + 95);
//         ctx.fillStyle = "#83cef4";
//         ctx.fill();
//         ctx.stroke();
//     }
// }

// export default Sedan;