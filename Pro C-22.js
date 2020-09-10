
var car,wall
var speed,weight



function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  

  car = createSprite(50,200,50,50);
  car.shapeColor="blue";
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="blue";

  

}

function draw() {
  background(0); 

  
  car.velocityX = speed;
  
  

   if (wall.x-car.x <(car.width+wall.width)/2) {
   var deformation = 0.5*weight*speed*speed/22500;
   if (deformation<100) {
     car.shapeColor="green";
     wall.shapeColor="green";
   }
   if (deformation<180 && deformation>100) {
     car.shapeColor="yellow";
     wall.shapeColor="yellow";
   }
   if (deformation>180) {
     car.shapeColor="red";
     wall.shapeColor="red";
   }
   }
 
  drawSprites();
}