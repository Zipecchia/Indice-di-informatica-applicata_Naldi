let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket =yMax*0.6;

function setup() {
  createCanvas(xMax, yMax);
  frameRate(30);
}


function draw() {
  background("#12176505");
  //mostrare un testo bianco che dice le coordinate del mouse
  //sul foglio da disegno
  fill(255);//bianco
  textSize (20);
  //stringa,x,y
  text("mouseX: " + mouseX + ", \
    mouseY: " + mouseY,20,20);

//disegnare le stelle
//120
//tre tipi di stelle: a,b,c
//fino a che abbiamo 120 stelle
//stelle ellipse
push();
//3 cicli
noStroke();
//ciclo 1 specifica stella a, 40
for(let i=0; i < 120; i++){
  let starX = (i*37) % width + (i%3) *5;
  let starY = ((i*73) % height) + (i%7);
  if ( i % 2 == 0){
    //stella tipo a
    fill(255,255,150);
    ellipse(starX,starY,1);
  }else if ( i % 3 == 1){
    //stella b
    fill (200, 100, 255);
    ellipse(starX, starY, 1.5);
  }else{
  fill(255,255,100);
  ellipse(starX,starY,2.8);}
}

//ciclo 2 specifica stella b, 40

//ciclo 3 specifica stella c, 40

pop();

//contesto di disegno
push();
fill(220);
stroke(40);
//alternativa
rectMode(CENTER);
rect(xRocket,yRocket+30,80,180,20);

//triangolo
fill(200,40,40)
stroke(255);
triangle(xRocket-40,yRocket-60, xRocket+40,
  yRocket-60, xRocket,yRocket-120);

//cerchio
fill(40,150,220);
stroke(255);
strokeWeight(3);
ellipse(xRocket,yRocket+30,48,48);
//finire contesto 
pop();
//servono per non far influire alcune cose sul disegno

xRocket = (xRocket +1) % xMax;
}
