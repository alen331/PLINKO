class Particle{
    constructor(x,y,r){
        var op={
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,r,op);
        this.r = r;

        this.color = color(random(0,255), random(0,255), random(0,255))
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(this.body.position.x,this.body.position.y,this.r);
      pop();
    }
}