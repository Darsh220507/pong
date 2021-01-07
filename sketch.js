var playerPaddle;
var computerpaddle;


function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
  computerpaddle= new Paddle();
}

function draw() {
  //set background to white
  background("indigo");
  fill("cyan")
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  playerPaddle.display();
  computerpaddle.xPosition=0;
  computerpaddle.yPosition=200;

  computerpaddle.display();
  //draw the ball
  rect(200,200,10,10);
}