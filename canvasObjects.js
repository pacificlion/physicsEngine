var x = 0, y=0;
var velocityX = 0, velocityY = 0;
function createCircle(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, c.width, c.height);
ctx.beginPath();
ctx.arc(x, y, 20, 0, 2 * Math.PI);
x += velocityX;
y += velocityY;
if(velocityX >=0 && (x+20)>= c.width){
    velocityX = -velocityX;
}
if(velocityX<=0 && (x<=20)){
    velocityX = -velocityX;
}
if(velocityY >=0 && (y+20)>= c.height){
    velocityY = -velocityY;
}
if(velocityY <=0 && (y<=20)){
    velocityY = -velocityY;
}
ctx.fillStyle = "red";
ctx.fill();
window.requestAnimationFrame(createCircle);
};

function resetObjects(){
x = 0;
y = 0;
velocityX = 0;
velocityY = 0;
};

function setSpeed(){
 velocityX = parseInt(document.getElementById("velocityX").value);
 velocityY = parseInt(document.getElementById("velocityY").value);
 if(isNaN(velocityX)){
    velocityX = 1;
}
if(isNaN(velocityY)){
    velocityY = 2;
}
 this.createCircle();
}