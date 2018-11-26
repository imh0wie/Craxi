import Display from "./display";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("display");
    canvas.width = 725;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    const display = new Display(ctx);
    display.draw();
});

window.onload = () => {
    const scoreboard = document.getElementById("scoreboard");
    let database = firebase.database().ref("scores").orderByChild("score").limitToLast(5);
    debugger
    let i = 5;
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
        })
        debugger
        if (scoreboard.children.length === 0) {
            debugger
            scoreboard.appendChild(row);
        } else {
            debugger
            const previousData = document.querySelector("tr");
            scoreboard.insertBefore(row, previousData);
        }
        i--;
    });
};