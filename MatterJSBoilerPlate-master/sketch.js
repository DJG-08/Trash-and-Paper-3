
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin
var paper,ground
var line1,line2,line3,line4
var binImage

function preload()
{
  binImage = loadImage ("bin.png")
}

function setup() {
	createCanvas(800, 700);

bin = createSprite(600,550,10,10)

bin.addImage(binImage)
bin.scale = 0.7

	engine = Engine.create();
	world = engine.world;
  paper = new Paper(250,440,70);
  ground = new Ground (400,490,800,40)
  
 
  
  


	Engine.run(engine);
  
}


function draw() {

 

  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  paper.display();
  ground.display();
  drawSprites();
  
}




function mouseDragged() {
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}