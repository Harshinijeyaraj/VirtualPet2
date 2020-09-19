//Create variables here

var dog,happydog,foodsupply;
var database;


function preload()
{
  //load images here
  happydog.addImage("happydog.png");
  dog.addImage("Dog.png");
  foodsupply.addImage("Milk.png")
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,250,20,20);
 

  var dogposition = database.ref('dog/position');
  dogposition.on("value",readposition,showError);

  happydog.visibility = false;
	
  
}

function draw(){
  background("lightblue");
  if(position!==undefined)
  

  if(keyDown(UP_ARROW)){
     foodsupply = foodsupply - 1; 
  }
   if(keyDown(DOWN_ARROW)){
     foodsupply = foodsupply + 10;
      
  }

  if(foodsupply = foodsupply - 1){
    happydog.visibility = true;
  }

  //happydog should not be visible the whole time.

  else{
    happydog.visibility = false;
  }

  //alert the owner that there is no more food

  if(foodsupply = 0){
    background("red")
  }

  else{
    background("lightblue")
  }
  
  drawSprites();
}

function writePosition (x,y){
  
  database.ref('dog/position').set({
      'x':position.x + x,
      'y':position.y + y
  })
  

}

function readposition(data){
  position = data.val();
  dog.x = position.x,
  dog.y = position.y
}

function showError(){
  console.log("something went wrong");
}
