class Bob{
    constructor(x,y,radius){
        var options= {
            isStatic:false, 
            restitution:2,
            density:1.2

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("purple");
        fill("purple");
        ellipse(0, 0,this.radius,this.radius);
        pop();
    }

}