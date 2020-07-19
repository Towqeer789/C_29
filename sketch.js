const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

   ground= new Ground(600,600,300,20);
   ground1= new Ground(1100,400,300,20);
   ground3= new Ground(width/2,690,width,40);

   box = new Box(600,576,30,30);
   box1 = new Box(570,576,30,30);
   box2 = new Box(540,576,30,30);
   box3 = new Box(630,576,30,30);
   box4 = new Box(660,576,30,30);
   box5 = new Box(690,576,30,30);
   box6 = new Box(510,576,30,30);
   box7 = new Box(546,546,30,30);
   box8 = new Box(576,546,30,30);
   box9 = new Box(606,546,30,30);
   box10 =new Box(636,546,30,30);
   box11= new Box(666,546,30,30);
   box12= new Box(610,516,30,30);
   box13= new Box(640,516,30,30);
   box14= new Box(580,516,30,30);
   box15= new Box(612,486,30,30);
   box16= new Box(1100,376,30,30);
   box17= new Box(1130,376,30,30);
   box18= new Box(1160,376,30,30);
   box19= new Box(1070,376,30,30);
   box20= new Box(1040,376,30,30);
   box21= new Box(1100,346,30,30);
   box22= new Box(1130,346,30,30);
   box23= new Box(1070,346,30,30);
   box24= new Box(1100,316,30,30);
  
   polygon= new Polygon(100,300,50,50)
  
	     	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ground.display();
  ground3.display();
  
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("red");
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();

  polygon.display();

}

function mouseDragged() {

  Matter.Body.setPosition(polygon.body,{
  
      x:mouseX,
      y:mouseY
  
  })
  
  }