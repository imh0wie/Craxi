import Game from "./game";
import Display from "./display";
import Background from "./background";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("display");
    canvas.width = 725;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    const display = new Display(ctx);
    display.draw();
})