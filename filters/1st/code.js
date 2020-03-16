let video;
let poseNet;
let poses = [];

let plastic;
function preload(){
	plastic = loadImage('i/plastic.png');
	orange  = loadImage('i/orange.png');
	mountain = loadImage('i/mountain.png');
	fog = loadImage('i/fog.png');
	crane = loadImage('i/crane.png');
	stone = loadImage('i/stone.png');
	stars = loadImage('i/stars.gif');
}


function whatever(){
	console.log("posenet model is ready");
}

function whatever2(results) {
	poses = results;
	console.log(results[0]);
}


function setup(){
	createCanvas(840, 480);
	video = createCapture(VIDEO);
	video.size(width, height);

	poseNet = ml5.poseNet(video, whatever);

	poseNet.on('pose', whatever2);

	video.hide();
}

function drawEyes(person){
  image(stars, person.pose.leftEye.x, person.pose.leftEye.y, 300,300);
	image(stars, person.pose.rightEye.y, person.pose.rightEye.x, 300,300);


}

function drawEars(person){

  image(stars, person.pose.rightElbow.x, person.pose.rightElbow.y, 400,400);
	image(stars,person.pose.rightEar.x, person.pose.rightEar.y, 400, 400);
	image(stars, person.pose.rightEar.x, person.pose.rightEar.y, 800, 800);
	//fill(0, 0, 80);
  noStroke();
	//fill(0, 0, 80);
	image(stars, person.pose.rightEar.x, person.pose.rightEar.y, 700, 700);
	image(fog, person.pose.leftEar.x, person.pose.leftEar.y, 200, 200);

}




function drawKeyPoints(person){
	//fill(255, 255, 255);

	for(var j = 0; j < person.pose.keypoints.length; j++){
		var keypoint = person.pose.keypoints[j];
		image(stars,
				keypoint.position.x,
				keypoint.position.y,
				400,400
		);
	}
}

function drawLine(person){


	const allXValus = person.pose.keypoints.map((keypoint) => keypoint.position.x);
	const allYValus = person.pose.keypoints.map((keypoint) => keypoint.position.y);

	const minX = min(allXValus);
	const minY = min(allYValus);

	const maxX = max(allXValus);
	const maxY = max(allYValus);

	line(minX, minY, maxX, maxY);
}

function draw(){
	image(video, 0, 0, width, height);


	for(let i=0; i < poses.length; i++){
		var person = poses[i];
		drawEyes(person);
		drawEars(person);
		drawKeyPoints(person);
    drawLine(person);
	}

}
