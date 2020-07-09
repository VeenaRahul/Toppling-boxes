const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  box1 = new Box(200, 320, 20, 20);
  box2 = new Box(210, 360, 20, 30);

  createCanvas(400, 400);
}

function draw() {
  background("yellow");

  Engine.update(engine);

  box1.display();

  box2.display();

  ground.display();
}