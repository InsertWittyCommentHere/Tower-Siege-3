class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        isStatic:false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    
    World.add(world, this.body);
  }
  Score(){
    if(this.visibility>0 && this.visibility<=105){
      score++;
    }
  }
  display(){
   
    if(this.body.speed>3){
        World.remove(world,this.body);
        push();
        this.visibility-=5;
        tint(255,this.visibility);
       // rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
    else{
       var pos =this.body.position;
       var angle = this.body.angle;
      if((pos.y>=350 && pos.y<352) || (pos.y>=250 && pos.y<=260)){
      fill("lightblue");
      }
      if((pos.y>=310 && pos.y<=320)||(pos.y>=170 && pos.y<=180)){
        fill("lightpink");
      }
      if((pos.y>=270 && pos.y<=280)||(pos.y>=210 && pos.y<=220)){
        fill(rgb(78,224,209));
      }
      if(pos.y>=232 && pos.y<=240){
        fill("gray");
      }
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(5);
    
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
};
