class Rope{
    constructor(body1,point){
      
    var options={
        bodyA:body1,
        pointB:point,
    stiffness:0.01,
    length:250
    }
    this.pointB=point;
    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope);
    }
fly()
{
 this.rope.bodyA=null;   
}

    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        strokeWeight(2);
        stroke("brown");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

    }
}



