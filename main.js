function setup(){
video= createCapture(VIDEO);
video.size(400,400);

canvas= createCanvas(400, 400);
canvas.position(430,130);
poseNet = ml5.poseNet(video,modelDone);
poseNet.on('pose', gotPoses)
}
function modelDone(){
console.log("PoseNet Is Intitialized and Loaded");    
}
function draw(){
background("#0000FF");    
}
function gotPoses(results,error){
if(error){
console.error(error);    
}    
if(results.length > 0){
console.log(results);


}
}