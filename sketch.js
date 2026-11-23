let angle = 0;
let speed = 0.02;
let paused = false;

function setup() {
    createCanvas(600, 400);
    angleMode(RADIANS);
}

function draw() {
    background(240, 230, 250);

    // Flower center
    let centerX = width / 2;
    let centerY = height / 2;

    // Draw flower petals
    for (let i = 0; i < 8; i++) {

        // Calculate the angle of each petal
        let petalAngle = angle + i * TWO_PI / 8;

        // Use cosine and sine to calculate position
        let x = centerX + cos(petalAngle) * 100;
        let y = centerY + sin(petalAngle) * 100;

        fill(255, 120, 180);
        ellipse(x, y, 60, 60);
    }

    // Draw flower center
    fill(255, 220, 50);
    ellipse(centerX, centerY, 70, 70);

    // Display instructions
    fill(0);
    textSize(16);
    textAlign(CENTER);
    text("SPACE = Pause / Resume", width/2, 30);
    text("UP / DOWN = Change Speed", width/2, 55);
    text("Speed: " + speed.toFixed(2), width/2, 80);

    // Update angle
    if (!paused) {
        angle += speed;
    }
}

function keyPressed() {

    if (key === ' ') {
        paused = !paused;
    }

    if (keyCode === UP_ARROW) {
        speed += 0.01;
    }

    if (keyCode === DOWN_ARROW) {
        speed = max(0, speed - 0.01);
    }
}
