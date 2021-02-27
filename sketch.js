var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

var pinkcg,redcg;
var pinkcgImg, yellowcgImg, redcgImg;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
}



function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
 }


var select_opppPlayer = Math.round(random(1,3));

  
  if(World.frameCount % 150 == 0){
    if (select_oppPlayer == 1 ){
      pinkcg();
      } else {
        recg();
      }
    
    //call the functions
    pinkcg();
    redcg();
    
  }


pinkcg();

  opp1 = createSprite (400,200,20,20);
  opp1.velocityX = 4
  
  opp1.addImage ('opponent1.png')
  
  


}

redcg();

  opp2 = createSprite (400,200,20,20);
  opp2.velocityX = 4
  
  opp2.addImage ('opponent2.png')
  
  


