function setup() {
  createCanvas(400, 400);
  noStroke();
}

let t = 0;

function draw() {
  text("mouseX: " + mouseX + ", \
  mouseY: " + mouseY,20,20);

push();

//movimento sole-luna (0 = giorno), (1 = notte)
  let fase = floor(t) % 2;
  let f = t % 1;

// sfondo sfumato
  let giorno = color("#87ceeb");
  let notte  = color("#001848");
  let sky = lerpColor(notte, giorno, (sin(t) + 1) / 2);
  background(sky);

//sole/luna movimento ad arco
  let x = map(f, 0, 1, 50, width - 50);
  let y = 150 - sin(f * PI) * 100;

  //sole
  if (fase === 0) {
    fill("yellow");
    ellipse(x, y, 60, 60);
  //luna
  } else {
    fill("white");
    ellipse(x, y, 50, 50);
  }

//collina 5
  fill("#062f0fff");
  ellipse(200,240,240,240);

//collina 4
  fill("#0a4316ff");
  ellipse(400,230,350,250);

// chioma albero 4 con movimento
  fill("#24691cff");
  let offset4 = sin(frameCount * 0.05) * 2;
  ellipse(380 + offset4, 180, 20, 80);

// chioma albero 5 con movimento
  fill("#24691cff");
  let offset5 = sin(frameCount * 0.05) * 3;
  ellipse(350 + offset5, 180, 20, 100);

//collina 3
  fill("#0f5b1fff");
  ellipse(-30,230,400,200);

//collina 1
  fill("#0f8729ff");
  ellipse(300,330,500,300);

//collina 2
  fill("#1ba83aff");
  ellipse(-50,300,400,200);

//triangolo casa sx
  fill("#6a1212ff");
  rectMode(CENTER);
  quad(260,228,255,220,300,190,300,200);

//triangolo casa dx
  fill("#6a1212ff");
  rectMode(CENTER);
  quad(339,228,344,220,300,190,300,200);

//rettangolo della casetta
  fill("#e0dd23ff");
  rectMode(CENTER);
  rect(300,260,70,70);

//triangolo casa
  fill("#e0dd23ff")
  triangle(265,225,335,225,300,200);

// chioma albero 1 con movimento
  fill("#113f0cff");
  let offset1 = sin(frameCount * 0.05) * 3;
  ellipse(30 + offset1, 240, 40, 120);

// chioma albero 2 con movimento
  fill("#113f0cff");
  let offset2 = sin(frameCount * 0.05) * 2;
  ellipse(90 + offset2, 230, 40, 140);

// chioma albero 3 con movimento
  fill("#113f0cff");
  let offset3 = sin(frameCount * 0.05) * 3;
  ellipse(370 + offset3, 250, 30, 100);

//rettangolo di base
  fill("#29dd50ff");
  rectMode(CENTER);
  rect(0,430,800,300);

//sentiero
    fill("#d0dc78ff");
  rectMode(CENTER);
  quad(290,280,310,280,290,400,200,400);

//cespuglio dx
  fill("#1e5720ff");   // verde foglie
  let offsetb = sin(frameCount * 0.05) * 1.5;
  ellipse(350 + offsetb, 380, 80, 80);
  ellipse(310 + offsetb, 400, 70, 70);
  ellipse(380 + offsetb, 390, 70, 70);
  ellipse(335 + offsetb, 360, 60, 60);
  ellipse(380 + offsetb, 350, 70, 70);

//cespuglio sx
  fill("#1e5720ff");   // verde foglie
  let offseta = sin(frameCount * 0.05) * 1.5;
  ellipse(50 + offseta, 370, 80, 80);
  ellipse(20 + offseta, 400, 70, 70);
  ellipse(90 + offseta, 400, 70, 70);
  ellipse(5 + offseta, 350, 60, 60);

//porta di casa
  fill("#430c0cff");
  rectMode(CENTER);
  rect(300,260,30,40,40,40,0,0);

//overlay scuro (solo di notte)
//di giorno alpha = 0; di notte alpha cresce un po'
  rectMode(CORNER);
  let alpha = (fase === 0) ? 0 : map(f, 0, 1, 60, 140);
  fill(10, 5, 20, alpha);
  rect(0, 0, width, height);

  t += 0.001;

pop();
}
