
let video;
let yolo;
let objects = [];
let firstPerson = [];

function startDetecting() {
  console.log("Model is ready");
  detect();
}

function onDetect(err, results){
	objects = results;

	if(firstPerson.length > 100){
		firstPerson = [];
	}

	if(results.length>0){
		firstPerson.push(objects[0]);
	}


	// image(video, 0, 0, objects[0].w*width, objects[0].h*height)

	// console.log()


	// console.log(results);
    detect(onDetect);
}

function detect() {
  yolo.detect(onDetect);
}

function setup(){
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);

  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
}



function drawBoxAroundEverybody(){

	for(var i = 0; i <objects.length; i++){
		var obj = objects[i];
		noFill();
		// strokeColor("green");
		strokeWeight(10);
		rect(obj.x*width, obj.y*height, obj.w*width, obj.h*height);
	}

}


function cloneFirstPerson(){
	for(var i=0; i < firstPerson.length; i++){
		var box = firstPerson[i];
		image(video, box.x*width, box.y*height, box.w*width, box.h*height);
	}
}


function draw(){
	image(video, 0, 0, width, height);
	
	drawBoxAroundEverybody();
	// cloneFirstPerson();
}