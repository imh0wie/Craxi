import Game from "./game";
import Display from "./display";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("display");
    canvas.width = 725;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    const display = new Display(ctx);
    display.draw(ctx);
    // window.onload = function() {
    //     var canvas = document.getElementById("display");
    //     var ctx = canvas.getContext("2d");
    //     // var img = document.getElementById("road");
    //     ctx.drawImage(img, 132.5, 0);
    // };
})