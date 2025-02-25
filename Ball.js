class Ball{
    constructor(x, y, width, height,angle){
     var options = {
         frictionAir:0.005,
         density:1.0
     }
     this.width=width;
     this.height=height;
     this.body = Bodies.rectangle(x, y, width, height, options);
     World.add(world,this.body);
    }

    display(){
    var pos=this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y)
    fill("red");
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.width/2,this.height/2);
    pop();
    }
}