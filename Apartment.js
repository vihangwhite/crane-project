class Apartment{
    constructor(x,y,width,height,angle){
        var options = {
            friction:1.0,
            restitution:0.8,
            density:0.04
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("ApartmentImg.png");
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}