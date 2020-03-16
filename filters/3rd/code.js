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
	leaves = loadImage('i/leaves.gif');
	clouds = loadImage('i/clouds.png');
	clouds2 = loadImage('i/clouds-2.png');
	clouds3 = loadImage('i/clouds-3.png');
	waterfall = loadImage('i/waterfall.gif');
	tree = loadImage('i/tree.png');

}


function whatever(){
	console.log("posenet model is ready");
}

function whatever2(results) {
	poses = results;
	console.log(results[0]);
}


function setup(){
	createCanvas(displayWidth, displayHeight);
	video = createCapture(VIDEO);
	video.size(width, height);

	poseNet = ml5.poseNet(video, whatever);

	poseNet.on('pose', whatever2);

	video.hide();
}

function drawBackground(person) {
	image(leaves,displayWidth, displayHeight);

}
function drawEyes(person){
  image(clouds, person.pose.leftEye.x, person.pose.leftEye.y, 1988, 1290);
	image(mountain, person.pose.rightEye.y, person.pose.rightEye.x, 1050, 610);


}

function drawEars(person){

  image(crane, person.pose.rightElbow.x, person.pose.rightElbow.y, 412, 969);
	image(crane,person.pose.rightEar.x, person.pose.rightEar.y, 412, 969);
	image(waterfall, person.pose.rightEar.x, person.pose.rightEar.y, displayWidth, displayHeight);
	//fill(0, 0, 80);
  noStroke();
	//fill(0, 0, 80);
	image(crane, person.pose.rightEar.x, person.pose.rightEar.y, 412, 969);
	image(crane, person.pose.leftEar.x, person.pose.leftEar.y, 412, 969);

}




function drawKeyPoints(person){
	//fill(255, 255, 255);

	for(var j = 0; j < person.pose.keypoints.length; j++){
		var keypoint = person.pose.keypoints[j];
		image(tree,
				keypoint.position.x,
				keypoint.position.y,
				displayWidth,displayHeight
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
		drawBackground(person);
		drawEyes(person);
		drawEars(person);
		drawKeyPoints(person);
    drawLine(person);
	}

}
