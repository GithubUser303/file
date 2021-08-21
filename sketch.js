var bckimg,mntin,mountimg,hillgroup,cloudgrp,cloudimg,clouds,mntin2,mountimg2;
var marioplayer,marioimg;
var rand;
var cloudimg2;
var cloudes;

function preload(){
bckimg  = loadImage("sprites/back.png")
 mountimg = loadImage("sprites/hill.png")
 mountimg2 = loadImage("sprites/hill.png")
 cloudimg = loadImage("sprites/Cloud.png")
 cloudimg2 = loadImage("sprites/Cloud spr.png")
 marioimg  = loadImage("sprites/mario.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
hillgroup = new Group()
invisibleGround = createSprite(windowWidth-690,windowHeight-96,2700	,10)
invisibleGround.visible = false


rand =Math.round(random(1,100))
}

function draw(){
background(bckimg)

mario()
drawSprites()
hill()
cloud()

}

function mario (){
	
	marioplayer = createSprite(windowWidth-1100,windowHeight-150)
	marioplayer.addImage("marioimg",marioimg)
	marioplayer.scale = 0.2

	if(keyWentDown(RIGHT_ARROW)){
    marioplayer.velocityX = 5
	}}
	

function hill(){
	
	mntin =  createSprite(windowWidth-1100,windowHeight-171)
	mntin2 =  createSprite(windowWidth-300,windowHeight-171)
	mntin.addImage("mountimg",mountimg)
	mntin2.addImage("mountimg2",mountimg2)
	mntin.scale = 0.3	
	mntin2.scale = 0.3
	
	
}

function cloud (){
		clouds =  createSprite(windowWidth-1200,windowHeight-560)
		cloudes =  createSprite(windowWidth-500,windowHeight-560)
		
		clouds.addImage("cloudimg",cloudimg)
		clouds.scale = 0.3
        cloudes.addImage("cloudimg2",cloudimg2)
		cloudes.scale = 0.3

		clouds.lifetime = 2
        cloudes.lifetime = 2
          
}

