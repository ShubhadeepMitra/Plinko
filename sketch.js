const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,score;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300

function setup() {
createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

  score=0;

for (var k = 0; k<=width; k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

for(var j =40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75));
}

for (var j =15;j <=width-10;j=j+50)
{
  plinkos.push(new Plinko(j,175))
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  //particles.velocityY=5;
}

  ground=new Division(200,595,410,10);
}


function draw() {
  background(0,0,0);  
  
  for(var j=0;j <particles.length;j++){
    particles[j].display();
  }

  for(var k=0; k <divisions.length; k++){
    divisions[k].display();
  }

  for(var a=0; a<plinkos.length;a++){
    plinkos[a].display();
  }

  ground.display();

  drawSprites();
  text("Score: "+score,350,30);
}