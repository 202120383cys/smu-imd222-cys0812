const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const boxes = [];
let bird;
let world, engine;
let mConstraint;
let slingshot;

function setup() {
  const canvas = createCanvas(711, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);
  for (let i = 0; i < 3; i++) {
    boxes[i] = new Box(450, 300 - i * 75, 84, 100);
  }
  bird = new Bird(150, 300, 25);

  // rect = new Rect(mouseX, mouseY, size, size);

  slingshot = new SlingShot(150, 300, bird.body);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse,
  };

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == " ") {
    World.remove(world, bird.body);
    bird = new Bird(150, 300, 25);
    slingshot.attach(bird.body);
  }
}

function mousePressed() {
  if (mouseButton === CENTER) {
    newBox = new Box(mouseX, mouseY, 80, 70, 255);
  }
  // fill(255);
  stroke(0);
  Matter.World.add(world, newBox.body);
  boxes.push(newBox);
}

function mouseReleased() {
  if (mouseButton === LEFT) {
    setTimeout(() => {
      slingshot.fly();
    }, 100);
  }
}

function draw() {
  background(55, 60, 80);
  Matter.Engine.update(engine);
  ground.show();
  for (let box of boxes) {
    box.show();
  }
  slingshot.show();
  bird.show();
}
