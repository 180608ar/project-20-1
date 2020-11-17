var box1,box2;


function setup(){
createCanvas(600,600);
box1 = createSprite(300,300,100,50);
box1.shapeColor ="blue";
box2 = createSprite(100,300,50,50);
box2.shapeColor ="red";
box1.debug = true;
box2.debug = true;
}

function draw(){
background("black");

box2.x = mouseX;
box2.y = mouseY;

if(box1.x-box2.x <= box1.width/2 + box2.width/2
  && box2.x-box1.x <= box2.width/2 + box1.width/2){
  box1.shapeColor = "pink";
  box2.shapeColor = "pink";
}

else{
  box1.shapeColor ="blue";
  box2.shapeColor ="red";
}



  drawSprites();


}