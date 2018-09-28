import Game from "./game";
import Display from "./display";


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("display")
    const ctx = ctx.getContext("2d");
    const display = new Display(canvas, ctx);
    

})