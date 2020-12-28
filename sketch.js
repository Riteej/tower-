const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,pig1,log1;
var box1,box2,ground1;

function prealod(){
poligon=addImage("sprites/poligon.png");


}


function setup(){
     createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;
ground=new ground(1220,500,400,30);

ground2=new ground(520,500,400,30);

ball=new Poligon(200,300,40,70)

rope=new Rope(ball.body,{x:200,y:50})
 
box1=new Box(1225,100,70,70);
box2=new Box(1225,100,70,70);
box3=new Box(1225,100,70,70);
boxx1=new Box(1225,100,70,70);
boxx2=new Box(1225,100,70,70);
boxx3=new Box(1225,100,70,70);


  box4=new Box(1100,100,70,70);
  box5=new Box(1100,100,70,70);
  box6=new Box(1100,100,70,70);

  
  box10=new Box(1350,100,70,70);
  box11=new Box(1350,100,70,70);
  box12=new Box(1350,100,70,70);

  
}

function draw(){
    background("lime");
    Engine.update(engine);
    ground.display() 
 
 box1.display();
 box2.display();
 box3.display();
 boxx1.display();
 boxx2.display();
 boxx3.display();
 
 

 box4.display(); 
 box5.display(); 
 box6.display(); 
 
 box10.display(); 
 box11.display(); 
 box12.display(); 

 ball.display();
 rope.display();

 ground2.display();

}


function mouseDragged(){

     Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
   
}

function mouseReleased(){
     rope.fly();

}