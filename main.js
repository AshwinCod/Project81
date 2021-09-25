canvas = document.getElementById("circle_canvas");

ctx = canvas.getContext("2d");
color = "grey";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.rect(180, 143, 410, 170);
ctx.stroke();
canvas.addEventListener("mousedown",emouseDown);

ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(280, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
color = "#FFD700";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(330, 240, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(380, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(430, 240, 40, 0, 2*Math.PI);
ctx.stroke();

ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(480, 200, 40, 0, 2*Math.PI);
ctx.stroke();

function emouseDown(e) {
    color = document.getElementById("color_input").value;
    mouse_x = e.clientX - canvas.offsetLeft
    mouse_y = e.clientY - canvas.offsetTop
    console.log(canvas.offsetLeft);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = 3;
    ctx.arc(mouse_x, mouse_y, 30, 0, 2*Math.PI);
    ctx.stroke();   
}
function clear_board() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}