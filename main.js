noseX=0;
noseY=0;
function preload() {
  clown_nose = loadImage('Moustachio.png')
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.size(640, 480)
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('nose X =' + noseX);
        console.log('nose Y =' + noseY);
    }

}

function draw() {
  image(video, 0, 0, 640, 480);
  fill(255,0,0);
  stroke(255,0,0);
  circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 30, 30)
}

function Take_Snapshot() {
  save('myFilterImage.png')
}