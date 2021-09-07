const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var snow = [];
var snow2 = [];
var bg, music;

function preload(){
   bg = loadImage("snowbg.jpg");
   music = loadSound("cheeryMusic.mp3");
}

function setup() {
  createCanvas(1000,1000);

  engine = Engine.create();
  world = engine.world;

  
}

function draw() {
  background(bg);  
 Engine.update(engine);
 
//play the music here
  

  if(frameCount%60===0){
    snow.push(new Snow(random(100, 700), 10, 30));
    
      }
      if(frameCount%35===0){
            snow2.push(new Snow2(random(300, 900), 10, 20));
          }

 for (var j = 0; j < snow.length; j++) {
  
    snow[j].display();
    
 }
 for (var k = 0; k < snow2.length; k++) {
  
 
  snow2[k].display();
}

  drawSprites();
}