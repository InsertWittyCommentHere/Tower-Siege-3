class Slingshot{
    constructor(bodyPolygon,pointB){
        var options={
            bodyA:bodyPolygon,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        this.bodyA=bodyPolygon;
        World.add(world,this.sling);
    }
    
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        //stroke(48,22,8);
        stroke(78,224,209);
        strokeWeight(3);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
     }
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body;
        console.log("hello");
    }
};