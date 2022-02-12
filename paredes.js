class ParedH {
    constructor(x, y, width, height) {
      var options = {
          isStatic : true
      }
      this.image = loadImage("images/ladrillos con musgo horizontal.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(World, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };