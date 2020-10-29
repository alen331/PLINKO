class Plinko{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r,{isStatic:true});
        this.r = r;
    }
    display(){
      ellipseMode(CENTER);
      fill("white");
      ellipse(this.body.position.x,this.body.position.y,this.r);
    }
}