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
    let i = 5;
    database.on("child_added", (snapshot) => {
        const records = scoreboard.children;
        const data = snapshot.val();
        debugger
        if (records.length === 5) {
            let tempName1;
            let tempScore1;
            let tempName2;
            let tempScore2;
            debugger
            for (let i = 0; i < records.length; i++) {
                const record = records[i];
                let name = record.querySelector(".name").innerHTML;
                let points = record.querySelector(".points").innerHTML;
                debugger
                if (tempScore2) {
                    debugger
                    tempName1 = name;
                    tempScore1 = score;
                    record.querySelector(".name").innerHTML = tempName2;
                    record.querySelector(".points").innerHTML = parseInt(tempScore2);
                    tempName2 = null;
                    tempScore2 = null;
                    debugger
                } else if (tempScore1) {
                    debugger
                    tempName2 = name;
                    tempScore2 = score;
                    record.querySelector(".name").innerHTML = tempName1;
                    record.querySelector(".points").innerHTML = parseInt(tempScore1);
                    debugger
                } else if (data.score >= parseInt(points)) {
                    debugger
                    tempName1 = name;
                    tempScore1 = points;
                    record.querySelector(".name").innerHTML = data.name;
                    record.querySelector(".points").innerHTML = data.score;
                    debugger
                }
            }
        } else {
            const row = document.createElement("tr");
            const keys = Object.keys(data);
            const rank = document.createElement("td");
            const n = document.createTextNode(i);
            rank.appendChild(n); // td
            row.appendChild(rank);
            keys.forEach((key) => {
                const datum = document.createElement("td");
                const value = document.createTextNode(data[key]);
                datum.appendChild(value); // td
                if (key === "name") datum.classList.add("name");
                if (key === "score") datum.classList.add("points");
                row.appendChild(datum); // tr -- td(n)
            })
            if (scoreboard.children.length === 0) {
                scoreboard.appendChild(row);
            } else {
                const previousData = document.querySelector("tr");
                scoreboard.insertBefore(row, previousData);
            }
            i--;
        }
    });
};