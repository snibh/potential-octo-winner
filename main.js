status1 = "";
img = "";
function preload() {

img = loadImage("dog_cat.jpg")

}
function setup() {

Canvas = createCanvas(600,400)
Canvas.center();
ObjectDetector = ml5.objectDetector('cocossd',modelloaded)
}
function draw() {

image(img,0,0,600,500);
fill(255,0,0);
stroke(255,0,0);
noFill();
text("Dog",45,75);
rect(30,60,450,350);
fill(255,0,0);
text("Cat",320,120);
noFill();
rect(300,90,270,320);
stroke(255,0,0);

}
function modelloaded() {

console.log("cocssd");
status1 = true;
ObjectDetector.detect(img,gotResult);

}
function gotResult(result,error) {

if (error) 
{

console.log(error);

} else {

console.log(results);    

}

}