var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;
var tomflag = "false";

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);
    bg.scale=0.1; 

    tom = createSprite(870, 645);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.1;

    jerry = createSprite(200, 645);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.1;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =270;
        tom.scale=0.13;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.1;
        jerry.changeAnimation("jerryLastImage");
        tomflag = "true";
    }  

    drawSprites();
}


function keyPressed(){
    if((keyCode === LEFT_ARROW) && tomflag==="false"){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        tom.scale=0.15;
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
    else {
       if(tomflag === "true"){
        tom.velocityX=0;
        tom.addAnimation("tomSleeping", tomImg1);
        tom.changeAnimation("tomSleeping");
        tom.x = 870; 
        tom.scale = 0.1;

        jerry.addAnimation("jerryStanding", jerryImg1);
        jerry.changeAnimation("jerryStanding");
        tomflag="false";
       }
    }   
}