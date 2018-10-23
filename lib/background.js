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

export default Background;