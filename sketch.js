var steve;


function preload(){
  backgroundImage = loadImage("backgrnd image.png")
  steveImage=loadAnimation("1.png","2.png")
 backgroundImage2=loadImage("5.jpg")

}

function setup() {
  createCanvas(displayWidth+200,displayHeight);
 // createSprite(400, 200, 50, 50);
 backgroundSprite1 = createSprite(300,200)
 backgroundSprite2 = createSprite(300,200)
 
  steve = createSprite(1300,509,10,10)
steve.scale=0.70
 //backgroundSprite = createSprite(windowWidth/2,windowHeight/2,windowWidth+800,windowHeight+500)
  backgroundSprite1.addImage(backgroundImage)
  backgroundSprite1.scale=4
  backgroundSprite1.velocityX=2

  backgroundSprite2.addImage(backgroundImage)
  backgroundSprite2.scale=4
  backgroundSprite2.velocityX=2
steve.addAnimation("steveImage",steveImage)
steve.velocityX=-3
}

function draw() {
console.log(backgroundSprite1.x)
  if(backgroundSprite1.x>1500)
  {
    remove
    console.log("hello")
   backgroundSprite2.addImage("b1",backgroundImage2)
   backgroundSprite1.destroy()
  }
    drawSprites();

}