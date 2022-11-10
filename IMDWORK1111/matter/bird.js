class Bird {
  constructor(x, y, r) {
    this.body = Matter.Bodies.circle(x, y, r, {
      restitution: 1,
      friction: 0,
      frictionAir: 0,
      frictionStatic: 0,
    });
    restitution: 0.8;
    Matter.World.add(world, this.body);
    this.r = r;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    // stroke(30, 255, 255);
    rectMode(CENTER);
    circle(0, 0, this.r);
    pop();
  }
}
