const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
 
engine=Engine.create();
world=engine.world;

var a ={

  isStatic:true
}

ground=Bodies.rectangle(400,390,800,30,a);
World.add(world,ground);


var b={

  restitution:0.5
}


ball=Bodies.circle(350,150,20,b)
World.add(world,ball);





}

function draw() {

  background(0,255,255);
  Engine.update(engine);
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,30);


  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)


  
}