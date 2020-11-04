class Particle{
    constructor(x,y,r){
        var op={
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,r,op);
        this.r = r;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(0,0,this.r);
      pop();
    }
}