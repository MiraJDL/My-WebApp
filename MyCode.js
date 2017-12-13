/*
Title: Click and Know More

Imagined, Designed, and Programmed by: Mira Larrance

Date: 12/13/17

Description: An explorable webapp giving information on virtual reality.

Sources of ideas and inspiration (title, author, URL):
  -"Applications of Virtual Reality." Virtual Reality Society, 2017, www.vrs.org.uk/
     virtual-reality-applications/.

  -"The Coming Horror of Virtual Reality." The New Yorker, 15 May 2016,
     www.newyorker.com/tech/elements/the-coming-horror-of-virtual-reality. 

  -"Why virtual reality could be a mental health Gamechanger." The Guardian, 22
     Mar. 2017, www.theguardian.com/science/blog/2017/mar/22/
     why-virtual-reality-could-be-a-mental-health-gamechanger.
     
  -http://cutepuppyoftheday.com/post/146150145556/todays-cute-puppy
  
  -https://grimimage.blogspot.com/2012/12/scary-werewolf-backgrounds.html

*/



var canvas;
var myFont;
var intro;
var whatTitle;
  var whatPar;
  var dreamPar;
  var anim;
var howTitle;
  var howSections = ['Entertainment', 'Health', 'NASA', 'Military'];
  var entertainmentTitle;
  var healthTitle;
  var NASATitle;
  var militaryTitle;
var img1;
var img2;
var psycologyTitle;
  var psycologyPar;
  var puppyPar;

  var scaryPar;
    var canvas1;
    var canvasDark;
    var bback;
var i=0;



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


 function preload(){
  img1 = loadImage("puppy&ball.jpg");
  img2 = loadImage("scary_wolf.jpg");
  myFont = loadFont("Comic Sans MS.ttf");
 }



function setup(){
  //buttonWorks();
  home();
}//end setup

function draw(){
  buttonWorks();
} //end draw




function home(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 80);
  canvas.style('z-index', '-2');
  intro = createP("To understand the psycological effects of virtual reality (VR), we have to know what VR is, and how it's used.");
  intro.position(2, 65);
  intro.style('font-style', myFont);

  background(200);

  frameRate(2);

  //what
    whatTitle = createElement('h2', 'What is VR?');
    whatTitle.position(10, 120);
      whatPar = createP("theres a lot of stuff to say here which blah blah thoih;sohfsodlijndijfknrhijkijeioufdjrehejijferijkifjeriefjd.");
      whatPar.position(10, 150);
      whatPar.style('textarea', 500);
      anim = animation();
      dreamPar = createP("VR feels a bit like how a dream feels. It feels like it's actually happening, even though it's (potencially) unrealistic.");
      dreamPar.position(windowWidth*0.6+165, 120);

  //how
    howTitle = createElement('h2', 'How is VR Used?');
    howTitle.position(10, 220);
      entertainmentTitle = createElement('h3', howSections[0]);
      entertainmentTitle.position(windowWidth*0.1, 250);
      healthTitle = createElement('h3', howSections[1]);
      healthTitle.position(windowWidth*0.4, 250);
      NASATitle = createElement('h3', howSections[2]);
      NASATitle.position(windowWidth*0.6, 250);
      militaryTitle = createElement('h3', howSections[3]);
      militaryTitle.position(windowWidth*0.8, 250);


  //psycology
    psycologyTitle = createElement('h2', 'Is VR Psycologically Unhealthy?');
    psycologyTitle.position(10, 300);
      psycologyPar = createP("small intro sentance");
      psycologyPar.position(10, 330);


  //  img1 = createImage(250, 167);
  //  //image(img1, 200, 300);

}//end home


function buttonWorks(){
  //senarios
  basicbutton(windowWidth*0.1, 370, "movie/video game", movies);
  basicbutton(windowWidth*0.35, 370, "travel", movies);
  basicbutton(windowWidth*0.55, 370, "science", movies);
  basicbutton(windowWidth*0.75, 370, "therapy", movies);
  //images
  basicbutton(windowWidth*0.2, 450, "click me", showPuppyStuff);
  basicbutton(windowWidth*0.7, 450, "click me", showScary);
}





function basicbutton(x,y,name,funct){
  button = createButton(name);
  button.position(x, y);
  button.mouseClicked(funct);
}



//scenerios
function movies(){
  canvasDark = createCanvas(windowWidth, windowHeight);
  canvasDark.position(0, 0);
  background(0, 200);
  canvasDark.style('z-index', '0');
  //canvas1 = rect(windowWidth*0.8, windowHeight);
  //canvas1.position(windowWidth*0.2, 0);
  bback = basicbutton(10, 10, 'back', back);
  bback.style('z-index', '1');
}//end movies



function back(){
  home();
}



function showPuppyStuff(){
  image(windowWidth*0.1, 300, img1.width/2, img1.height/2);
  // puppyPar = createP("when you saw the image of the puppy, how did you feel? happy?");
  // puppyPar.position(20, 550);
}

function showScary(){
  image(windowWidth*0.6, 400, img2.width/2, img2.height/2);
}


function sleepingPerson(){
  strokeWeight(3);
  fill(255);
  noStroke();
  rect(windowWidth*0.6-12, 120, 30, 18);
  rect(windowWidth*0.6+10, 116, 18, 20);
  stroke(0);
  strokeWeight(3);
  ellipse(windowWidth*0.6, 100, 50, 50);
  arc(windowWidth*0.6-10, 100, 10, 10, 0, HALF_PI);
  arc(windowWidth*0.6+10, 95, 10, 10, 0, HALF_PI);
  arc(windowWidth*0.6+2, 108, 20, 20, radians(20), radians(120));
  arc(windowWidth*0.6+15, 147, 75, 75, radians(170), radians(220));
  arc(windowWidth*0.6, 143, 75, 75, radians(310), radians(18));
  noStroke();
  rect(windowWidth*0.6-20, 147, 54, 7);
  stroke(0);
  strokeWeight(3);
}



function animation(){
  strokeWeight(3);
  fill(81, 101, 135);
  rect(windowWidth*0.6-40, 55, 200, 100);
  sleepingPerson();
      if(i%4 == 1){
       strokeWeight(1);
       ellipse(windowWidth*0.6+37, 95, 6, 6); //bubble 1
       }
      if(i%4 == 2){
       strokeWeight(1);
       ellipse(windowWidth*0.6+37, 95, 6, 6); //bubble 1
       ellipse(windowWidth*0.6+55, 90, 8, 8); //bubble 2
      }
      if(i%4 == 3){
       strokeWeight(1);
       ellipse(windowWidth*0.6+37, 95, 6, 6); //bubble 1
       ellipse(windowWidth*0.6+55, 90, 8, 8); //bubble 2
       ellipse(windowWidth*0.6+110, 90, 80, 50); //thought
      }
      i++;
}
