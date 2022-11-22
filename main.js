img="";
status="";
object=[];
function preload(){
img=loadImage('dog_cat.jpg');
}
function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(380,380);
}
function draw(){
image(video,0,0,380,380);
if(status!=""){
    r=random(255);
    g=random(111);
    b=random(169);
    od.detect(video,gotresult);
for(i=0;i<object.length;i++){
    document.getElementById("status").innerHTML="status:object-detected";
    document.getElementById("no").innerHTML="number-of-objects-detected-are  :  "+object.length;
   fill(r,g,b);
noFill(r,g,b);
stroke(r,g,b);
percent=floor(object[i].confidence*100);
text(object[i].label+"  "+percent+"%",object[i].x+15,object[i].y+15);
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}
function modelLoaded(){
    console.log('modelLoaded');
    status=true;
}
function gotresult(error,results){
if(error){
    console.log(error);
}
console.log(results);
object=results;

}
function start(){
    od=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:object-detecting";
}