var weight=[6.2,8.7,10.1,3.5]
console.log(weight)





var box
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
avg()
}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  if(keyIsDown(RIGHT_ARROW)){
background("red")
}



  
  drawSprites();
}

function avg(){
sum=weight[0]+weight[1]+weight[2]+weight[3]
console.log(sum)
avg=sum/weight.length
console.log(avg)
}
