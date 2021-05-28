var canvas,bg;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3= loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");

}


function setup(){
    //creating Canvas
    canvas = createCanvas(1000,800);

    //cat
    cat = createSprite(880, 600);
    cat.addAnimation("catResting", catImg1);
    cat.scale = 0.2;

   //mouse
    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    //adding background
    background(bg);

    //changing animation
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catImage");


        mouse.addAnimation("mouseImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseImage");
    }  
     
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -8; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 15;
        mouse.changeAnimation("mouseTeasing");
    }
}
