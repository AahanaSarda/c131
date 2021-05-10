function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function preload(){
    img=loadImage('dog_cat.jpg');
}

function draw(){
image(img,0,0,640,420);
fill("#ff1493");
text("Dog", 45, 75);
noFill();
stroke("#40e0d0");
rect(30,60,450,350);
}