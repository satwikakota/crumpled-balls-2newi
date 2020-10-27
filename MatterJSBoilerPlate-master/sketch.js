
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 


var diameter;

function setup() {
	createCanvas(800, 700);

	diameter=50
	engine = Engine.create();
	world = engine.world;

	roof= new Roof(400,200,500,30); 
	bob1=new Bob(200,600,50); 
	bob2=new Bob(300,600,50); 
	bob3=new Bob(400,600,50); 
	bob4=new Bob(500,600,50); 
	bob5=new Bob(600,600,50); 
	rope1= new Rope(bob1.body,roof.body, -diameter*4,0)
	rope2= new Rope(bob2.body,roof.body, -diameter*2,0)
	rope3= new Rope(bob3.body,roof.body, -diameter*0.1,0)
	rope4= new Rope(bob4.body,roof.body, diameter*2,0)
	rope5= new Rope(bob5.body,roof.body, diameter*4,0)


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("red");
  roof.display(); 
  bob1.display(); 
  bob2.display(); 
  bob3.display(); 
  bob4.display(); 
  bob5.display(); 
  rope1.display(); 
  rope2.display(); 
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) { 
	  Body.applyForce(bob1.body,bob1.body.position,{x:-60, y:-45}); 
	  console.log(bob1.body.force);
  }
}
