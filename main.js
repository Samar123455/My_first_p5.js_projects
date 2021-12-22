const { redirect } = require("express/lib/response");

function preload(){

}

function setup(){
    canvas = createCanvas(700,700);
    canvas.position(100,250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video,70,70,550,400);


    stroke(102,225,0);
    
    fill(102,225,0);
    rect(27,30,55,450);
    rect(607,30,55,450);
    rect(55,25,570,55);

    
    stroke(61,102,34);
    
    fill(61,102,34);
    rect(55,460,570,55);



    stroke(255,0,0);
    fill(255,0,0);
    circle(55,50,70);
    circle(635,50,70);
    circle(345,50,70);
    
    circle(345,490,70);
    circle(635,490,70);
    circle(55,490,70);

    
}

function take_snapshot(){
    save("Please like this project");
}
