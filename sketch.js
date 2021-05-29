
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paperball(100,600,10);
	ground=new Ground(400,680,800,20);

	rod1= new Dustbin(550,620,20,100)
	rod2= new Dustbin(610,660,100,20)
	rod3= new Dustbin(670,620,20,100);



	
  
}


function draw() {
	
	background(0);
	rectMode(CENTER);
	Engine.run(engine);
	
 paperball.display();
 rod1.display();
 rod2.display();
 rod3.display();
 ground.display();
 
 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:15,y:-15})
	}
}



