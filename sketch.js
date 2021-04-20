var player;
var gameState=0;
var startbutton;
var zombie1,zombie2,zombie3;
var zombie1pic,zombie2pic,zombie3pic;
var score=0;
var bulletgroup,zombiegroup;
var bg,player1,player2;
var zombieanime1,zombieanime2;
var bulletsound;
//var zombie;


function preload(){
  zombie1pic=loadImage("images/zombie 1.png");
  zombie2pic=loadImage("images/zombie 2.jpg");
  zombie3pic=loadImage("images/zombie 3.jpg");
  bg=loadImage("images/bg1.jpg");
  //player1=loadImage("images/player1.jpg");
  player2=loadImage("images/player2.png");
  zombieanime1=loadImage("images/zombieanime1.png");
  zombieanime2=loadImage("images/zombieanime2.png");
  bulletpic=loadImage("images/bullet.png");
  bulletsound=loadSound("bullet_sound.mp3");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
 player = createSprite(100,350,30,40);
 player.addImage(player2);
 player.scale=0.2;
 startbutton = createButton("START");
 startbutton.position(800,230);
 bulletgroup= new Group()
 zombiegroup = new Group()

}




function draw() {
  background("black");

  if(gameState===0){
   player.visible=false;
   startbutton.show();
   score=0;
    textSize(70);
    textFont("tahoma");
    fill("orange");
    
    imageMode(CENTER);
    image(zombie3pic,450,400,displayWidth,displayHeight);
    text("KILL OR GET KILLED",200,150);
    startbutton.mousePressed(function(){
      gameState=1;
      startbutton.hide();

     
    })

  }

  if(gameState===1){
    background(bg);
    player.visible=true;
    spawnzombies();

    //shoot();
    if(bulletgroup.isTouching(zombiegroup)){
      zombiegroup.destroyEach();
      score=score+1;
      bulletsound.play();

      
    }
 
    }
  if(score>20 && gameState===1){
    textSize(40);
    text("Game Over",100,300);
    gameState=0;
    startbutton.visible=true;

  }
  fill("yellow");
      textSize(30);
    text("Score:"+score,950,100);
    drawSprites();
}
function shoot(){
//console.log("inside the function shoot")
var bullet=createSprite(player.x,player.y,20,20);
bullet.shapeColor="black";
bullet.addImage(bulletpic);
bullet.scale=0.2;
bullet.velocityX=2;
var m=(mouseY-bullet.y)/(mouseX-bullet.x);
//console.log(m);
var angle=Math.atan(m)*180/Math.PI;
bullet.setSpeedAndDirection(15,angle)
bulletgroup.add(bullet);

}
function mouseClicked(){
  if(gameState===1){
   shoot();
  }
}

function spawnzombies(){
  if(frameCount%150===0){
 var zombie=createSprite(width,400,50,50);
 zombie.addImage(zombieanime1);
 zombie.scale=0.15;
 zombie.y=random(100,600);
 zombie.velocityX=-4;
 zombiegroup.add(zombie);
 
  }
}
