let mic;
let micLevel;

function setup(){
	createCanvas(800, 600);

	mic = new p5.AudioIn()
	mic.start();
}


function draw(){
	// background(0);

	micLevel = mic.getLevel();


	const biggestR = 300;

	const circleX = width/2
	const circleY = height/2;
	const r = biggestR * micLevel;

	circle(circleX, circleY, r);

}