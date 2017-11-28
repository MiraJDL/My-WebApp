var canvas;
var myFont;
var intro;
var whatTitle;
  var whatPar;
  var whatPar2;
  var dreamPar;
var howTitle;
  var howSections = ['Entertainment', 'Health', 'NASA', 'Military'];
  var entertainmentTitle;
   var entPar;
  var healthTitle;
   var healthPar;
  var NASATitle;
   var NASAPar;
  var militaryTitle;
   var militaryPar;
var movie;
var travel;
var science;
var therapy;

var img1;
  var puppyBut;
var img2;
  var scaryBut;
var psycologyTitle;
  var psycologyIntro;
  var psy1;
  var puppyPar;
  var scaryPar;
    var canvas1;
    var canvasDark;
    var bback;
var i=0;


 function preload(){
  img1 = loadImage("puppy&ball.jpg");
  img2 = loadImage("scary_wolf.jpg");
  myFont = loadFont("Meteora - DEMO.ttf");
 }



function setup(){
  home();
}//end setup

function draw(){
  buttonWorks();
} //end draw




function home(){
  canvas = createCanvas(windowWidth, 3000);
  canvas.position(0, 82);
  canvas.style('z-index', '-2');
  background(96, 154, 160);
  intro = "To understand the psycological effects of virtual reality (VR), we have to know what VR is, and how it's used."
  fill(0);
  textFont(myFont, 14);
  text(intro, 2, 22);

  frameRate(2);

  //what
    whatTitle = "What is VR?"
    textSize(20);
    text(whatTitle, 10, 85);
      whatPar = "What exactly is virtual reality? The Virtual Reality Society describes virtual reality as 'a three-dimensional, computer generated environment which can be explored and interacted with by a person.' That, of course, refers to the technology. If we look at the words 'virtual' and 'reality', we can interpret it as 'near reality' or 'almost reality'. Virtual reality is an environment that feels real, maybe not exactly real, but real enough. The way VR achieves this 'near"
      whatPar2 = "reality' is by stimulating one’s senses of sight and hearing in a realistic way as if they were actually there. But isn’t that what movies or video games do too? They stimulate your senses right you might be asking. Well, yes, movies and video games do stimulate your senses in a similar way, but VR is one step up from that. VR uses technology to map one’s movements, so that when they turn their head in real life, they are turning their head in the virtual environment too. The most important thing to understand about VR is that it transports you to a false reality that stimulates your senses in the same way that real life does."
      textSize(14);
      text(whatPar, 10, 100, windowWidth*0.55);
      text(whatPar2, 10, 205, windowWidth*0.95);
      animation();
      strokeWeight(0);
      dreamPar = "VR feels a bit like how a dream feels. It feels like it's actually happening, even though it's (potencially) unrealistic."
      fill(0);
      text(dreamPar, windowWidth*0.6+170, 110, 250);



  //how
    howTitle = "How is VR Used?"
    fill(0);
    textSize(20);
    text(howTitle, 10, 330);
      textSize(17);
      entertainmentTitle = howSections[0];
      text(entertainmentTitle, 100, 350);
        entPar = "VR is most commonly used in the entertainment industry. VR is used for movies, museums, and travel, but probably most famously for video games. Virtual reality gives the viewer a more realistic experience, which allows them to be more engaged in the environment."
        textSize(14);
        text(entPar, 50, 367, 250);
      textSize(17);
      healthTitle = howSections[1]
      text(healthTitle, 380, 350);
        healthPar = "Virtual reality is also being used in the healthcare industry. It’s used as a risk free way to train surgeons. It can sometimes be used as a diagnostic and could replace surgery. However, what is the most intriguing, is that VR is used as a type of therapy. It has been proven to help patients with PTSD, and Paranoia."
        textSize(14);
        text(healthPar, 320, 367, 250);
      textSize(17);
      NASATitle = howSections[2]
      text(NASATitle, 660, 350);
        NASAPar = "NASA uses VR to control their robots on Mars, which is billions of miles away. They also use it to train astronauts and to give people the experience of walking through space."
        textSize(14);
        text(NASAPar, 600, 367, 250);
      textSize(17);
      militaryTitle = howSections[3]
      text(militaryTitle, 920, 350);
        militaryPar = "The Military uses VR to train soldiers. They use it to simulate flight, for medic training in the battlefield, vehicle simulation, as well as other things."
        textSize(14);
        text(militaryPar, 880, 367, 180);


  //psycology
    psycologyTitle = "Is VR Psycologically Unhealthy?"
    textSize(20);
    text(psycologyTitle, 10, 600);
      psycologyIntro = "What are the psychological effects of virtual reality? Check out the different scenerios below to find out."
      textSize(14);
      text(psycologyIntro, 10, 620);
      psy1 = "Why do these scenerios make sense?"
      text(psy1, 10, 700);
      psycologyPar = "Because virtual reality feels so real, it triggers much more genuine emotions, which is not always a good thing. When are these psychological effects a bad thing? Well you explored the answer to that when you looked at the different scenarios. So back to our original question: is virtual reality psychologically unhealthy? It depends on what it’s used for. It can be a great thing for people suffering from various mental health issues. It also helps with science and the military, as well as various creative industries. However, if used in some types of entertainment (as you saw in the scenarios above) it can be quite destructive."
      text(psycologyPar, 50, 1090, 1000);

    //bback.hide();
  //  img1 = createImage(250, 167);
  //  //image(img1, 200, 300);

}//end home


function buttonWorks(){
  //senarios
  movie = basicbutton(windowWidth*0.1, 730, "movie/video game", movies);
  travel = basicbutton(windowWidth*0.35, 730, "travel", movies);
  science = basicbutton(windowWidth*0.55, 730, "science", movies);
  therapy = basicbutton(windowWidth*0.75, 730, "therapy", movies);
  //images
  puppyBut = basicbutton(windowWidth*0.2, 820, "click me", showPuppyStuff);
  scaryBut = basicbutton(windowWidth*0.7, 820, "click me", showScaryStuff);
}





function basicbutton(x,y,name,funct){
  button = createButton(name);
  button.position(x, y);
  button.mouseClicked(funct);
}



//scenerios
function movies(){
  DarkCanvas();
  // canvas1 = createCanvas(windowWidth*0.8, windowHeight);
  // canvas1.position(120, 0);
  // background(200);
  // canvas1.style('z-index', '1');
  bback = basicbutton(10, 10, 'back', back);
  bback.style('z-index', '1');
  //movie.hide();
}//end movies


function DarkCanvas(){
  canvasDark = rect(600, 600);
  canvasDark.position(0, 0);
  background(0, 200);
  canvasDark.style('z-index', '0');
}


function back(){
  home();
}



function showPuppyStuff(){
  image(img1, 100, 720, img1.width/2, img1.height/2);
  // hide button
  puppyPar = "What emotions came up when you saw the puppy? Were you happy? Did you think it was cute? (If you didn’t, I don’t know what kind of person you are) Now imagine if you got to see the puppy playing, and even got to throw the ball for the puppy. Would that make you happier? If you got to play with this puppy in virtual reality, it would probably make you feel happier than you did by just looking at the picture (unless you are unfeeling demon who hates puppies for some reason)."
  text(puppyPar, 30, 900, 400);
}

function showScaryStuff(){
  image(img2, 700, 720, img2.width/1.5, img2.height/1.5);
  //hide button
  scaryPar = "What emotions came up when you saw the wolf-monster thing? Were you scared? On edge? Grossed out? Now imagine if you looked to the right and that thing was rushing toward you howling. Would that make you more terrified? If you saw that wolf-monster coming at you in virtual reality, you’d probably freak out, more so than you did by looking at the picture."
  text(scaryPar, 650, 910, 400);
}


function sleepingPerson(){
  strokeWeight(3);
  fill(255);
  noStroke();
  rect(windowWidth*0.6-12, 150, 30, 18);
  rect(windowWidth*0.6+10, 146, 18, 20);
  stroke(0);
  strokeWeight(3);
  ellipse(windowWidth*0.6, 130, 50, 50);
  arc(windowWidth*0.6-10, 130, 10, 10, 0, HALF_PI);
  arc(windowWidth*0.6+10, 125, 10, 10, 0, HALF_PI);
  arc(windowWidth*0.6+2, 138, 20, 20, radians(20), radians(120));
  arc(windowWidth*0.6+15, 177, 75, 75, radians(170), radians(220));
  arc(windowWidth*0.6, 173, 75, 75, radians(310), radians(18));
  noStroke();
  rect(windowWidth*0.6-20, 177, 54, 7);
  stroke(0);
  strokeWeight(3);
}



function animation(){
  strokeWeight(3);
  fill(81, 101, 135);
  rect(windowWidth*0.6-40, 85, 200, 100);
  sleepingPerson();
      if(i%4 == 1){
       strokeWeight(1);
       ellipse(windowWidth*0.6+37, 125, 6, 6); //bubble 1
       }
      if(i%4 == 2){
       strokeWeight(1);
       ellipse(windowWidth*0.6+37, 125, 6, 6); //bubble 1
       ellipse(windowWidth*0.6+55, 120, 8, 8); //bubble 2
      }
      if(i%4 == 3){
       strokeWeight(1);
       ellipse(windowWidth*0.6+37, 125, 6, 6); //bubble 1
       ellipse(windowWidth*0.6+55, 120, 8, 8); //bubble 2
       ellipse(windowWidth*0.6+110, 120, 80, 50); //thought
      }
      i++;
}
