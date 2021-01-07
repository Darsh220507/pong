class Paddle {
  
  constructor(){
    this.width = 10;
    this.height = 70;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  }
}