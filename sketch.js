var friend1,friend1Image,friend2,friend2Image,friend3,friend3Image;
var enemy1,enemy1Image,enemy2,enemy2Image,enemy3,enemy3Image;
var laserBlaster,laserBlaster1,laserBlaster2,laserBlaster3,laserBlaster4;
var laserBlasterImage;
var laserBlasters = [];
var planet,planetImage;
var bgImage;

function preload(){
friend1Image = loadImage("friend1.png");
friend2Image = loadImage("friend2.png");
friend3Image = loadImage("friend5.png");

enemy1Image = loadImage("enemy1.png");
enemy2Image = loadImage("enemy2.png");
enemy3Image = loadImage("enemy3.png");

planetImage = loadImage("planet.png");
laserBlasterImage = loadImage("laser gun.png");
bgImage = loadImage("universe.jpg");

}
function setup(){
   createCanvas(windowWidth,windowHeight);
createEdgeSprites();

  friend1 = createSprite(1000,400,50,50);
  friend1.addImage(friend1Image);
  friend1.scale = 1.4;

  friend2 = createSprite(1000,300,50,50);
  friend2.addImage(friend2Image);
  friend2.scale = 1.4;
  
  friend3 = createSprite(1000,200,50,50);
  friend3.addImage(friend3Image);
  friend3.scale = 1.6;

  planet = createSprite(1200,500,50,50);
  planet.addImage(planetImage);
  planet.scale = 3;

  enemy1 = createSprite(100,400,50,50);
  enemy1.addImage(enemy1Image);
  enemy1.scale = 1.4;

  enemy2 = createSprite(100,300,50,50);
  enemy2.addImage(enemy2Image);
  enemy2.scale = 1.7;

  enemy3 = createSprite(100,200,50,50);
  enemy3.addImage(enemy3Image);
  enemy3.scale = 1.7;

  laserBlasterGroup = createGroup();


    laserBlaster = createSprite(100,0,50,50);
    laserBlaster.addImage(laserBlasterImage);
    laserBlaster.scale = 1;
  
    laserBlaster1 = createSprite(400,windowHeight,50,50);
    laserBlaster1.addImage(laserBlasterImage);
    laserBlaster1.scale = 1;
  
    laserBlaster2 = createSprite(500,0,50,50);
    laserBlaster2.addImage(laserBlasterImage);
    laserBlaster2.scale = 1;
  
    laserBlaster3 = createSprite(800,windowHeight,50,50);
    laserBlaster3.addImage(laserBlasterImage);
    laserBlaster3.scale = 1;
  
    laserBlaster4 = createSprite(900,0,50,50);
    laserBlaster4.addImage(laserBlasterImage);
    laserBlaster4.scale = 1;
laserBlasters = [laserBlaster,laserBlaster1,laserBlaster2,laserBlaster3,laserBlaster4];
laserBlasters[0].rotationSpeed  = laserBlasters[0].rotationSpeed+4;
laserBlasters[1].rotationSpeed = laserBlasters[1].rotationSpeed+4;
laserBlasters[2].rotationSpeed = laserBlasters[2].rotationSpeed+4;
laserBlasters[3].rotationSpeed = laserBlasters[3].rotationSpeed+4;
laserBlasters[4].rotationSpeed = laserBlasters[4].rotationSpeed+4;  
    

  }
 

 



function draw(){
  background(bgImage);
  friend1.rotation = -90;
  friend2.rotation = -90;
  friend3.rotation = -90;
  enemy1.rotation = 90;
  enemy2.rotation = 90;
  enemy3.rotation = 90;

  drawSprites();

}
