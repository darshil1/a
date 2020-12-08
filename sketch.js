
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  canvas = createCanvas(400,400)
  monkey = createSprite(50,350,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(200,380,400,10)
  ground.velocityX = -2
  ground.x = ground.width/2
  ground.scale =2
  
  
}


function draw() {
  background(0)
  monkey.collide(ground)
  if(keyDown("space")){
    monkey.velocityY= -10
  }
  if(ground.x<0){
    ground.x = ground.width/2
  }
  spawnBananas()
  spawnObstacles()
  monkey.velocityY = monkey.velocityY +0.5
  drawSprites()
}

function spawnBananas(){
   //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
 
 
  }
}
function spawnObstacles(){
   //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var stone = createSprite(400,350,40,10);
    stone.addImage(obstaceImage);
    stone.scale = 0.1;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
 
 
  }
}




