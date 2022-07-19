var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){

 backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  
   background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.0
  
  for(var i=60;i<390;i=i+60){
  red_balloon = createSprite(50, i, 1, 1);
  red_balloon.addImage(red_balloonImage);
  red_balloon.scale = 0.1
}
  
  for(var i=110;i<390;i=i+60){
  green_balloon = createSprite(100, i, 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1;
}
  
  for(var i=130;i<360;i=i+50){  
  blue_balloon = createSprite(140, i, 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.1;
}
  
  for(var i=180;i<250;i=i+60){
  pink_balloon = createSprite(180, i, 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1.2;
}
  
   bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {

   background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
   bow.y = World.mouseY;
  
   if (keyDown("space")) {
     createArrow();
    arrow.addImage(arrowImage);
     arrow.y = bow.y;
  }
  
  drawSprites();
}

function createArrow(){
  
   arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
  
}

