// Web Graphics Overview Demo

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

let cnvRect = cnv.getBoundingClientRect();
cnv.width = cnvRect.width;
cnv.height = cnvRect.height;
ctx.clearRect(0, 0, cnv.width, cnv.height);

// Global Variables
let circle = {
    x: cnv.width / 2,
    y: cnv.height / 2,
    r: 0,
    g: 0,
    b: 200
}

let mouseX, mouseY;

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // UPDATE
    // Randomly Move Circle
    circle.x += Math.random() * 10 - 5
    circle.y += Math.random() * 10 - 5

    

    // DRAW
    ctx.strokeStyle = `rgb(${circle.r}, ${circle.g}, ${circle.b}, 0.3)`;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    

    // LOOP
    requestAnimationFrame(animate);
}

// Interval to randomly set circle color every 2 seconds
setInterval(randColor, 2000);

function randColor() {
    circle.r = Math.random() * 255;
    circle.g = Math.random() * 255;
    circle.b = Math.random() * 255;
}

// Mouse Events
document.addEventListener("mousemove", mousemoveHandler);
cnv.addEventListener("click", circleToMouse);

function mousemoveHandler(event) {
    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

function circleToMouse() {
    // Send circle to mouse location if canvas is clicked
        console.log(circle);
        circle.x = mouseX;
        circle.y = mouseY;
    
    
}