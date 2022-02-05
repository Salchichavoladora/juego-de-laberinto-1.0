const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var database;
var world;
var canvas;
var backgroundImg;
var personaje1, mounstruo1;
var pared1;
var damage,vida;
function preload(){



}


function setup(){
canvas = createCanvas(1200,1600);
personaje1 = new Personaje(100,1570);
pared1 = new ParedH(100,100,100,10);
mounstruo1 = new Monster(20,200)
// personaje1.shapeColor = color("red");

}


function draw(){
background("grey");
personaje1.velocityX = 0;
personaje1.velocityY = 0;
Controles();
pared1.display();
personaje1.display();
mounstruo1.display();
drawSprites();
}



function Controles(){

    if(keyDown(87)){
        personaje1.velocityY = -4;
        }

    if(keyDown(83)){
        personaje1.velocityY = 4;
    }    
    if(keyDown(65)){
        personaje1.velocityX = -4;
    }
    if(keyDown(68)){
        personaje1.velocityX = 4;
    }

}