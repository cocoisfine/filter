mustache_x=0;
mustache_y=0;

function preload(){
    mustache = loadImage("m.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is intialized")
}
function gotPoses(results){
    if(results.length>0);
    console.log(results);
    console.log("noseX= "+results[0].pose.nose.x);
    console.log("noseY= "+results[0].pose.nose.y);
}
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
    save("filter.png");
    
}
function modelLoaded(){
    console.log("poseNet Is ready");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        mustache_x = results[0].pose.nose.x-30;
        console.log("nose y: "+results[0].pose.nose.y);
        mustache_y = results[0].pose.nose.y;
    };
}