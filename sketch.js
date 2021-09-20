var sea 
var ship, ship_moving
function preload(){
seaImg = loadImage("sea.png");
ship_moving = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400, 200, 20, 20);
  sea.addImage(seaImg);
  sea.scale=0.3;
  ship=createSprite(200,300,20,20);
  ship.addAnimation("moving", ship_moving);
  ship.scale=0.1;
}

function draw() {
  background(0);
 sea.velocityX=-4;
 if (sea.x < 0){
   sea.x = sea.width/8;
 }
 drawSprites();
}