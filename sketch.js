const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
   
}

function setup(){
    var canvas  = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(600,200,10,50);  
}
function draw(){
ground1.display(); 
}