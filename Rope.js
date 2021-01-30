class Rope{
    constructor(bodyA,pointB){
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stifness:1.2,
        length:250
    }
    this.pointB=pointB;
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    }
    display() {
        if(this.chain.bodyA){
       var pointA=this.chain.bodyA.position;
       var pointB=this.pointB;
       push();
       stroke("black");
       strokeWeight(4);
       line(pointB.x,pointB.y,pointA.x,pointA.y);
       pop();
        }
    }
}