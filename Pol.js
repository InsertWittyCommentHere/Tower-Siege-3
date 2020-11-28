class Pol {
  constructor(x, y, radius) {
        var options = {
            'restitution':0.2,
            'friction':1.0,
            'density':0.1,
        }
        this.body = Bodies.circle(x, y,radius,options);
         this.radius=radius;
         this.image=loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(45);
        imageMode(CENTER);
        image(this.image, 0,0, this.radius, this.radius);
        pop();
      }
}
