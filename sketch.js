const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1,ground2,ground3;

var particles = [];

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

if(frameCount % 60 === 0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,15));
}

  ground1  = new Ground(0,400,10,800);
  ground2 = new Ground(240,800,800,10);
  ground3 = new Ground(480,400,10,800);
  division1 = new Division(10,700,10,200);
  division2 = new Division(90,700,10,200);
  division3 = new Division(175,700,10,200);
  division4 = new Division(260,700,10,200);
  division5 = new Division(345,700,10,200);
  division6 = new Division(425,700,10,200);
  ground = new Division(240,790,480,10);
  plinko1 = new Plinko(40,75,15);
  plinko2 = new Plinko(90,75,15);
  plinko3 = new Plinko(140,75,15);
  plinko4 = new Plinko(190,75,15);
  plinko5 = new Plinko(240,75,15);
  plinko6 = new Plinko(290,75,15);
  plinko7 = new Plinko(340,75,15);
  plinko8 = new Plinko(390,75,15);
  plinko9 = new Plinko(440,75,15);

  plinko11 = new Plinko(15,175,15);
  plinko12 = new Plinko(65,175,15);
  plinko13 = new Plinko(115,175,15);
  plinko14 = new Plinko(165,175,15);
  plinko15 = new Plinko(215,175,15);
  plinko16 = new Plinko(265,175,15);
  plinko17 = new Plinko(315,175,15);
  plinko18 = new Plinko(365,175,15);
  plinko19 = new Plinko(415,175,15);
  plinko20 = new Plinko(465,175,15);

  plinko21 = new Plinko(40,275,15);
  plinko22 = new Plinko(90,275,15);
  plinko23 = new Plinko(140,275,15);
  plinko24 = new Plinko(190,275,15);
  plinko25 = new Plinko(240,275,15);
  plinko26 = new Plinko(290,275,15);
  plinko27 = new Plinko(340,275,15);
  plinko28 = new Plinko(390,275,15);
  plinko29 = new Plinko(440,275,15);

  plinko31 = new Plinko(15,375,15);
  plinko32 = new Plinko(65,375,15);
  plinko33 = new Plinko(115,375,15);
  plinko34 = new Plinko(165,375,15);
  plinko35 = new Plinko(215,375,15);
  plinko36 = new Plinko(265,375,15);
  plinko37 = new Plinko(315,375,15);
  plinko38 = new Plinko(365,375,15);
  plinko39 = new Plinko(415,375,15);
  plinko40 = new Plinko(465,375,15);
}

function draw() {
  background(0);  
  Engine.update(engine);

  for(var j = 0; j<particles.length;j++){
    particles[j].display;
  }

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  ground1.display();
  ground3.display();
  ground2.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();

  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();

  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();

  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
}