var cat,cat1,cat2,cat3
var mouse,mouse1,mouse2 ,mouse3
var back,back1
function preload() {
  mouse3=loadAnimation("images/mouse4.png")
  mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    cat1=loadAnimation("images/cat1.png")
    back1=loadImage("images/garden.png")
   cat2=loadAnimation ("images/cat2.png","images/cat3.png")
   cat3=loadAnimation("images/cat4.png",)

}

function setup(){
    createCanvas(785,600);
    back=createSprite(395,300,50,50)
   
 
  cat=createSprite(600,500,10,10)
 //cat.setCollider("rectangle",0,0,100,500) 
 //cat.debug=true;
  cat.scale=0.1
 cat.addAnimation("ca",cat1)
mouse=createSprite(200,500,10,10)
mouse.scale=0.13
mouse.addAnimation("m",mouse1)
//mouse.setCollider("rectangle",0,0,100,100)


}

function draw() {
    background("black");
    //cat.debug=true
   // mouse.debug=true    
    back.addImage(back1)
    
    if(keyDown("space")){
        moves()
       // cat.addAnimation("ca",cat2)
    }
    

    //if(cat.x - mouse.x < cat.width/2 + mouse.width/2 && mouse.x  -  cat.x < cat.width/2+mouse.width/2 ){
     //cat.velocityX=0 
     
//    }
if(cat.x-mouse.x<(cat.width-mouse.width)/2+90){
  cat.velocityX=0
  cat.addAnimation("ca",cat3)
  mouse.addAnimation("m",mouse3)
  
}

    drawSprites();
}


function moves(){
cat.addAnimation("ca",cat2)
cat.scale=0.13
cat.velocityX=-5
mouse.addAnimation("m",mouse2)

//if(keyWentUp("space")){
  //  cat.addAnimation("ca",cat2)  
//}


}
