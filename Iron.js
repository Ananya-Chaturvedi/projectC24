class Iron {
    constructor(x, y) {
    var options = {
    'density':40,
    'friction': 30,
    //'restitution':
    }
    this.body = Bodies.rectangle(x, y, 20, 20, options);
    this.width = 100;
    this.height = 60;
    World.add(world, this.body);
    }
    display(){

    var ironpos = this.body.position;
    push();
    translate(ironpos.x, ironpos.y);
    strokeWeight(3);
    stroke("white");
    fill("black");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }

    }