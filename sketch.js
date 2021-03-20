const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var img;
var hexagon;

function setup(){
    createCanvas(1000,500);

    engine = Matter.Engine.create();
    world = engine.world;

    ground = new Platform(500,490,1000,20);

    platform1 = new Platform(500,100,150,15);
    platform2 = new Platform(700,250,150,15);
    platform3 = new Platform(900,400,150,15);

    blocks1 = new Block(500,80);
    blocks2 = new Block(700,230);
    blocks3 = new Block(900,380);

    hexagon = new Hexagon(100,250);

    chain1 = new Slingshot(hexagon.body,{x:300,y:100});
}

function draw(){
    background(100);

    ground.display();
    platform1.display();
    platform2.display();
    platform3.display();

    blocks1.display();
    blocks2.display();
    blocks3.display();

    hexagon.display();
    chain1.display();
}

function mouseDragged(){
    Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain1.fly();
}

// function keyPressed(){
//     if(keyCode === 32){
//         chain1.attach(hexagon.body);
//     }
// }