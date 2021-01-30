const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, rope, ball, apartment=[] ;
var ground,arpartment;
var craneImage;

function preload(){
craneImage = loadImage("crane.png");
}

function setup(){
createCanvas(3000,800);
engine = Engine.create();
world = engine.world;

ground = new Ground(600,600,1200,20);
var i=0;
for(i=0;i<6;i++){
apartment[i]=new Apartment(900,100,40,40);
}
for(i=i;i<12;i++){
    apartment[i]=new Apartment(800,100,70,70);
}
for(i=i;i<20;i++){
    apartment[i]=new Apartment(700,100,70,70);
}
ball = new Ball(200,200,90,80);
rope = new Rope(ball.body,{x:490,y:65});

}

function draw() {
    background("lightblue");

    imageMode(CENTER);
    image(craneImage,300,150,400,900);
    Engine.update(engine);
    ground.display();
    var i=0;
    for(i=0;i<20;i++){
        apartment[i].display();
    }
    ball.display();
    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}