var score=0 ;


var bg;
var pc,pcImg;
var enemy1,enemy2,enemy3,enemy1img,enemy2img,enemy3img;

var diamond,gold,heart,goldimg,diamondimg,heartimg;

var enemyattack1,enemyattack2,enemyattack3,attackimg1,attackimg2,attackimg3

var pcattk,pcsuper,superimg,attkimg

var life=3;
var score=0;
var gamestate=1;

function preload(){

  bg=loadImage("assets/bg 3.jpeg")
  pcImg=loadImage("assets/pc.png")
  enemy1img=loadImage("assets/enemy 1 copy.png")
  enemy2img=loadImage("assets/enemy2.png")
  enemy3img=loadImage("assets/enemy3.png")
  diamondimg=loadImage("assets/diamond.png")
  goldimg=loadImage("assets/gold.png")
  heartimg=loadImage("assets/heart.png")
  attackimg1=loadImage("assets/enemy attack 1.png")
  attackimg2=loadImage("assets/enemy attack 2.png")
  attackimg3=loadImage("assets/enemy attack 3.png")
  attkimg=loadImage("assets/pc slash.png")
  superimg=loadImage("assets/pc super.png")
}
function setup(){
createCanvas(1000,500)
 pc = createSprite (100,425,200,200)
 pc . addImage (pcImg)

 enemy1= createSprite (800,425,200,200)
 enemy1 . addImage (enemy1img)
 enemy1 . scale=0.8
 enemy2= createSprite (800,250,200,200)
 enemy2 . addImage (enemy2img)
 enemy2 . scale=0.8
 enemy3= createSprite (800,100,200,200)
 enemy3 . addImage (enemy3img)
 enemy3 . scale=0.8

 diamond = createSprite (350,250,200,200)
 diamond . addImage (diamondimg)
 diamond . scale=0.5
 gold = createSprite (350,100,200,200)
 gold . addImage (goldimg)
 gold . scale=0.5
 heart= createSprite (350,425,200,200)
 heart . addImage (heartimg)
 heart . scale=0.5

 enemyattack1 = createSprite (600,425,200,200)
 enemyattack1 . addImage (attackimg3)
 enemyattack1 . scale=0.8
 enemyattack2 = createSprite (600,250,200,200)
 enemyattack2 . addImage (attackimg2)
 enemyattack2 . scale=0.8
 enemyattack3 = createSprite (600,100,200,200)
 enemyattack3 . addImage (attackimg1)
 enemyattack3 . scale=0.8
 
 pcattk . addImage (attkimg)
 pcattk . scale=0.8
 pcsuper = createSprite (100,100,200,200)
 pcsuper . addImage (superimg)
 pcsuper . scale=0.8

 Attackgroup = createGroup();
}
function draw(){

  background(bg)

   if(gameState===1){
     if(KeyDown("space")){
       Attack();
     }




   }

  
  if(keyDown)

  function Attack(){
    pcattk= createSprite(150, width/2, 50,20)
    pcattk.y= gun.y-20
    pcattk.addImage(attkimg)
    pcattk.scale=0.8
    pcattk.velocityX= 3
    Attackgroup.add(attack)
  }





  drawSprites()

}