(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
        x: width / 2,
        y: height - 15,
        width: 5,
        height: 10,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
    keys = [],
    friction = 0.9,
    gravity = 0.3;

var boxes = [];

// dimensions
boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});
boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});

boxes.push({
    x: 10,
    y: 170,
    width: 100,
    height: 10
});
boxes.push({
    x: 10,
    y: 10,
    width: 100,
    height: 10
});
boxes.push({
    x: 150,
    y: 120,
    width: 50,
    height: 50
});
boxes.push({
    x: 250,
    y: 100,
    width: 10,
    height: 10
});
boxes.push({    
    x: 220,
    y: 40,
    width: 10,
    height: 10
});
boxes.push({
    x: 250,
    y: 40,
    width: 40,
    height: 10
});

canvas.width = width;
canvas.height = height;

function update() {
    if (keys[32] || keys[38]) {
        // up
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
    if (keys[68] || keys[39]) {
        // right
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[65] || keys[37]) {
        // left
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }
    if (keys[81]) {
        // Q
        if (player.width > 5){
            player.width = player.width - 5;
        } else {
            player.width = 5;
        }
    }
    if (keys[69]) {
        // E
        if (player.width < 200){
            player.width = player.width + 5;
        } else {
            player.width = 200;
        }
    }
    if (keys[87]) {
        // W
        if (player.height < 90){
            player.height = player.height + 5;
        } else {
            player.height = 90;
        }
    }
    if (keys[83]) {
        // S
        if (player.height > 10){
            player.height = player.height - 5;
            player.y = player.y + 5;
        } else {
            player.height = 10;
        }
    }

    player.velX *= friction;
    player.velY += gravity;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#000";
    ctx.beginPath();
    
    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        
        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }
    }
    
    if(player.grounded){
         player.velY = 0;
    }
    
    player.x += player.velX;
    player.y += player.velY;

    ctx.fill();
    ctx.fillStyle = "#e0f";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    
    requestAnimationFrame(update);
}

function colCheck(shapeA, shapeB) {
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
});