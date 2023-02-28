
rightwrist_x = 0;
leftwrist_x = 0;
difference = 0;

function setup()
{

    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(700, 400);
    canvas.position(650,150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}

function modelLoaded()
{

    console.log("Posenet is Loaded");

}

function gotPoses(results)
{

  if (results.length > 0)
   {

        console.log(results);


        leftwrist_x = results[0].pose.leftWrist.x;
        rightwrist_x =results[0].pose.rightWrist.x;

        difference = floor(rightwrist_x - leftwrist_x);

        console.log("Left Wrist X = " + leftwrist_x + " and Right Wrist X = " + rightwrist_x);
        console.log("Difference is " + difference);

   }

}
    
function draw()
{

    background('#969A97');

   textSize("difference");
   fill("black");

   text('Nikhil', 50, 100);


}