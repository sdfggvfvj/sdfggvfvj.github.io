let bodypix;
let video;
let segmentation;
let img;

const options = {
    outputStride: 8, // 8, 16, or 32, default is 16
    segmentationThreshold: 0.3 // 0 - 1, defaults to 0.5 
}


let bodies = [];

function preload(){
  bodypix = ml5.bodyPix(options);
}


function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }

    segmentation = result;

    background(0);


    background(255)
    // image(segmentation.backgroundMask, 0, 0, width, height)

    if(bodies.length > 30){
        bodies = [];
    }

    bodies.push(segmentation.backgroundMask);

    for(var i = 0; i < bodies.length; i++){
        const body = bodies[i];
        image(body, 0, 0, width, height)
    }

    

    bodypix.segment(video, gotResults);
}

function setup(){
    createCanvas(300, 260);
    // load up your video
    video = createCapture(VIDEO);
    video.size(width, height);
    // video.hide(); // Hide the video element, and just show the canvas
    bodypix.segment(video, gotResults);

    video.hide()
}

function draw(){

    // frameRate(12);

    // image(video, 0, 0, width*3, height*3);


}
