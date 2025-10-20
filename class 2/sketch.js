let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket =yMax*0.6;

let table;
let star_img;

function preload(){
  table = loadTable("stars.csv", "csv", "header"); 
  star_img = loadImage("star.png");
}

function setup() {
  createCanvas(xMax, yMax);
  frameRate(10);
}

function drawSingleStarFromFile(index, posX, posY){
  let starSize = table.getNum(index, "starSize")
  image(star_img, posX, posY, starSize, starSize);
}

function drawStarsFromFile(){
  for(let k = 0; k < table.getRowCount(); k++){
    let starX = (k*37)% width + (k%3) * 5; 
    let starY = (k*73) % height + (k%7);

    drawSingleStarFromFile(k, starX, starY);
  }
}

function drawSingleStar(i, starX, starY, random_trasparency, random_size){
   if ( i % 2 == 0){
    //stella tipo a
    fill(255,255,150, random_trasparency);
    ellipse(starX,starY,random_size);
  }else if ( i % 3 == 1){
    //stella b
    fill (200, 100, 255, random_trasparency);
    ellipse(starX, starY, random_size);
  }else{
  fill(255,255,100, random_trasparency);
  ellipse(starX,starY,random_size);}
}

function drawStars(num_stars=120){
for(let i=0; i < num_stars; i++) {
  let starX = (i*37)% width + (i%3) * 5; 
  let starY = (i*37) % height + (i%7);

  let random_transaprency = random(150, 255);
  let random_size = random(6.8, 15.0);

  drawSingleStar(i, starX, starY, random_transaprency, random_size)
}
}

function drawRocket (){
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
}

function draw() {
  background("#121865");
  //mostrare un testo bianco che dice le coordinate del mouse
  //sul foglio da disegno
  fill(255);//bianco
  textSize (20);
  //stringa,x,y
  text("mouseX: " + mouseX + ", \
    mouseY: " + mouseY,20,20);

drawStarsFromFile();
drawRocket(xRocket, yRocket);
yRocket = moveRocket(yRocket, 1)
}

function moveRocket(yRocket, step=1){
yRocket = yRocket - step;
let soglia = - (yMax * 0.6);
if(yRocket < soglia){
  yRocket = yMax;
}
return yRocket;
}
