class Box
{
  constructor(){
    this.x = 100
    this.y = 100
    this.width = 10
    this.height = 10
  }
  show(){
    rect(this.x,this.y,this.width,this.height)
  }
  setWidth(w){
    //changing the width property of our box
    this.width = w
  }
}

  
