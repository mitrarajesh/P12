var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0) {
    if(select_sprites == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }

  drawSprites();
}

function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addAnimation("apples", appleImg);
  apple.velocityY = 2;
  apple.scale = 0.05;
  apple.lifetime = 120;
  apple.depth = rabbit.depth;
  rabbit.depth += 1;
}

function createLeaves() {
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addAnimation("leaves", leafImg);
  leaf.velocityY = 2;
  leaf.scale = 0.05;
  leaf.lifetime = 120;
  leaf.depth = rabbit.depth;
  rabbit.depth += 1;
}