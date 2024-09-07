
var img;
var arrayPointsCol = [];
var arrayPoints = [];
var newX = [];
var newY = [];
var numPoints;
var rand = [];
var numLines = 4;
var words = ["beating", "heart", "open", "closed", "broken"];
let i;

var particles = [];
var count = 0;

function preload(){
  img = loadImage('data/heart-from-obj-edge2.png');
}

function setup() {
  //imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  frameRate(random(15, 25));
  createCanvas(displayWidth, displayHeight);
  background(0);
  //image(img, 0, 0);
  // let imgScale = random(0.3, 1);
  let imgScale = 0.5;
  img.resize(img.width*imgScale, img.height*imgScale);
  
  loadPixels();
  
  //pixelDensity();
  //console.log('pixelDensity' + pixelDensity());
  let d = pixelDensity();


  // create array of position and color for where heart object exists

  //put them in arrays

  // for (let i = 0; i<d*img.width; i+=2){
  //   for (let j = 0; j<d*img.height; j+=2){
  //     let pixCol = img.get(i,j);
  //     if (pixCol[3] != 0){
  //       arrayPointsCol.push(pixCol);
  //       //arrayPoints.push([i+(width/2 - 360)+random(-10, 10),j + (height/2-640)+random(-10, 10)]);
  //       arrayPoints.push([i+(width/2 - 360),j + (height/2-640)]);
  //     }
  //     // if (pixCol[0] != 0){

  //     // }
  //   }
  // }

  //oop approach


  for (let i = 0; i<d*img.width; i+=4){
    for (let j = 0; j<d*img.height; j+=4){
      
      let pixCol = img.get(i,j);
      if (pixCol[3] != 0){
        //arrayPointsCol.push(pixCol);
        //arrayPoints.push([i+(width/2 - 360)+random(-10, 10),j + (height/2-640)+random(-10, 10)]);
        //arrayPoints.push([i+(width/2 - 360),j + (height/2-640)]);
        // particles[count] = new Particle(createVector(i+(width/2 - 360),j+(height/2 - 640)), pixCol[3]);
        particles[count] = new Particle(createVector(i,j) , pixCol[3]);
        count++;
      }
      // if (pixCol[0] != 0){

      // }
    }
  }


  // numPoints = arrayPoints.length;
  numPoints = particles.length;
  console.log(numPoints);
  //console.log(pixels);
  //updatePixels();
  
}

function draw() {
  // background(0, random(1, 250));
  background(0, 40);
  noStroke();
  
  
  //var sizeRand = random(10);

  //basic idea for beating effect of the heart

  // if (frameCount%30 > 10){
  //   for (let i = 0; i<arrayPoints.length; i++){
  // //     //fill(arrayPointsCol[i]);
  //     newX[i] = arrayPoints[i][0] + random(-10, 10);
  //     newY[i] = arrayPoints[i][1] + random(-10, 10);
  //     // newX[i] = arrayPoints[i][0];
  //     // newY[i] = arrayPoints[i][1];
  // //     //if (arrayPoints[i][0] > width)
  //   }  
  // }
  // // if (frameCount%30 > 20){
  // //   for (let i = 0; i<arrayPoints.length; i++){
  // //     //fill(arrayPointsCol[i]);
  // //     newX[i] = arrayPoints[i][0] + random(-10, 10);
  // //     newY[i] = arrayPoints[i][1] + random(-10, 10);
  // //     //if (arrayPoints[i][0] > width)
  // //   }  
  // // }
  // else {
  //   for (let i = 0; i<arrayPoints.length; i++){
  //   newX[i] = arrayPoints[i][0] + random(-3, 3);
  //   newY[i] = arrayPoints[i][1] + random(-3, 3);
  //   }
  // }
  
  //main heart drawn with ellipses
  
  // for (let i = 0; i<arrayPointsCol.length; i++){
  //   //fill(arrayPointsCol[i]);
  //   // arrayPoints[i][0] += random(-3, 3);
  //   // arrayPoints[i][1] += random(-3, 3);
  //   //if (arrayPoints[i][0] > width)

  //   //fill(255, 191, 0, arrayPointsCol[i][3]);
  //   fill(255, 191, 0, arrayPointsCol[i][3]);
  //   stroke(255, 191, 0,arrayPointsCol[i][3]);
  //   strokeWeight(1);
    
  //   // ellipse(newX[i], newY[i], random(10), random(10));
  //   // line(newX[i], newY[i], arrayPoints[(rand)][0],arrayPoints[(rand)][1]);

  
  //   //ellipse(newX[i], newY[i], sizeRand, sizeRand);
    
  //   //point(arrayPoints[i][0],arrayPoints[i][1]);
  // }
    //stroke(255, 191, 0,arrayPointsCol[i][3]);
  
  //lines and rectangles
  
  // stroke(200, 200, 250);
  // strokeWeight(1);
  // rand = [];
  // for (let i = 0; i<numLines*2; i++){
  //   rand.push(floor(random(numPoints-1)));
  // }
  // for (let i = 0; i<numLines; i++){
  //   // strokeWeight(random(0.4, 1.4));
  //   strokeWeight(sizeRand/6);
  //   line(arrayPoints[rand[i]][0], arrayPoints[rand[i]][1], arrayPoints[rand[i+numLines]][0], arrayPoints[rand[i+numLines]][1]);
  //   rect(arrayPoints[rand[i]][0], arrayPoints[rand[i]][1], sizeRand*3, sizeRand*3);
  //   //text(words[floor(random(5))], arrayPoints[rand[i]][0], arrayPoints[rand[i]][1]);
  // }

  //oop approach
  for (var i = 0; i<particles.length; i++){
    particles[i].update();
    particles[i].bounds();
    particles[i].beating();
    particles[i].abruptStop();
    particles[i].display();
  }
  
  
}
