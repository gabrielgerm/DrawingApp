//canvas settings
canvas = document.querySelector("#canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

let painting = false;
let pen_color = "black";
let pen_width = "20";

//functions
function start(event) {
    painting = true;
    draw(event)
}

function finished() {
    painting = false;
    ctx.beginPath()
}

function draw(event) {
    if (!painting) return;
    ctx.lineCap = "round";
    ctx.strokeStyle = pen_color;
    ctx.lineWidth = pen_width;
    ctx.lineTo(event.clientX, event.clientY)
    ctx.stroke();
    ctx.beginPath()
    ctx.moveTo(event.clientX, event.clientY)
}

function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//events
canvas.addEventListener("mousedown", start)
canvas.addEventListener("mouseup", finished)
canvas.addEventListener("mousemove", draw)

