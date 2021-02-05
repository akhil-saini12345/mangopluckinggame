
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;
var slingShot;
var stone1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(900,180,30);
	mango3 = new mango(1000,70,30);
	mango4 = new mango(1200,150,50);
	mango5 = new mango(1110,30,20);
	mango6 = new mango(1000,150,30);
	mango7 = new mango(1070,200,30);
	mango8 = new mango(970,280,30);
	mango9 = new mango(1230,250,30);
	mango10 = new mango(1160,270,20);

  stone1 = new stone(200,480,10);

  //slingShot = new slingshot(0,0);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,160,380,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone1.display();

  //slingShot.display();

  groundObject.display();
}
