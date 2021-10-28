const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var drop=[]
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
  ch = createSprite(10,360,50,50)
  ch.addImage(img)
  ch.scale=0.1
 for (var i=0;i<15;i++){
   drop.push(new Snow(random(0,800),random(0,400)))
 }

}


function preload() {
bg = loadImage("snow2.jpg")
img = loadImage("snow3.jpg")

}



function draw() {
  
 
  Engine.update(engine)
  background(bg);
  if (keyDown("up")){
    ch.y=ch.y-5
  }  
  if (keyDown("down")){
    ch.y=ch.y+5
  }
  if (keyDown("left")){
    ch.x=ch.x-5
  }
  if (keyDown("right")){
    ch.x=ch.x+5
  }
 for (var i=0;i<15;i++){
   drop[i].display()
drop[i].update()
 }
  
  drawSprites();
}