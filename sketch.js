var monkey, player;
var banana, bananaImage, bananaGroup;
var obstacle, obstaclesGroup, obstacleImage;
var jungle, bg;
var score =0;
var ground;

function preload() {

  player = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  jungleImage = loadImage("jungle.jpg");
  obstacleImage = loadImage("stone.png");

}

function setup() {
  createCanvas(500, 400);  
  bg = createSprite(200, 200);
  bg.addAnimation("back", jungleImage);
  bg.x = bg.width / 2;
  bg.velocityX = -9;
  bg.y=100;
  
  ground1 = createSprite(200,330,600,10);
  ground1.velocityX=-9
  ground1.x = ground1.width / 2;
  ground1.visible=false;
  
  monkey = createSprite(50, 290, 10, 10);
  monkey.addAnimation("running_monkey", player);
  monkey.scale = 0.12;
  
  score=0;
  
  obstaclesGroup = new Group();
}

function draw() {
  
 
  background(220);

  if (bg.x < 0) {
    bg.x = bg.width / 2;
  }

  if (ground1.x < 0) {
    ground1.x = ground1.width / 2;
  }

  if(keyDown("space") && monkey.y>=289) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.1;
  }
  
  
  monkey.collide(ground1);
  
  spawnobstacle();
  spawnbanana();
  drawSprites();

  function spawnobstacle() {
    if (frameCount % 90 === 0) {
      var obstacle = createSprite(500, 290, 10, 10);
      obstacle.velocityX = -9;
      obstacle.scale=0.2;
      obstacle.addImage(obstacleImage);
      obstaclesGroup.add(obstacle);
    }
  }
  
  function spawnbanana(){
    if (frameCount % 60===0){
    var banana = createSprite(500,random(150,230),10,10);
      banana.velocityX=-9;
      banana.scale=0.0799;
      banana.addImage(bananaImage);
}
  }
}