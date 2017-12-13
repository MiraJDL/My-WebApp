/*
Title: Click and Know More
Imagined, Designed, and Programmed by: Mira Larrance
Date: 12/13/17
Description: An explorable webapp that gives information about virtual reality.
Sources of ideas and inspiration (title, author, URL):
 * "Applications of Virtual Reality." Virtual Reality Society, 2017, www.vrs.org.uk/
     virtual-reality-applications/.

 * "The Coming Horror of Virtual Reality." The New Yorker, 15 May 2016,
     www.newyorker.com/tech/elements/the-coming-horror-of-virtual-reality.

 * "Why virtual reality could be a mental health Gamechanger." The Guardian, 22
     Mar. 2017, www.theguardian.com/science/blog/2017/mar/22/
     why-virtual-reality-could-be-a-mental-health-gamechanger.

 * https://grimimage.blogspot.com/2012/12/scary-werewolf-backgrounds.html

 * http://cutepuppyoftheday.com/post/146150145556/todays-cute-puppy
*/


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
var anim;
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
    var bback2;
    var bback3;
    var bback4;
var i=0;
var darken = false;



function preload(){
  img1 = loadImage("puppy&ball.jpg");
  img2 = loadImage("scary_wolf.jpg");
  myFont = loadFont("Meteora - DEMO.ttf");
 }



function setup(){
  home();
  movie = createButton("video game");
  movie.position(windowWidth*0.1, 730);
  movie.mouseClicked(movies);

  travel = createButton("travel");
  travel.position(windowWidth*0.35, 730);
  travel.mouseClicked(travels);
  travel.hide();

  science = createButton("science");
  science.position(windowWidth*0.55, 730);
  science.mouseClicked(science1);
  science.hide();

  therapy = createButton("therapy");
  therapy.position(windowWidth*0.75, 730);
  therapy.mouseClicked(therapy1);
  therapy.hide();

  puppyBut = createButton("click me");
  puppyBut.position(131, 820);
  puppyBut.mouseClicked(showPuppyStuff);

  scaryBut = createButton("click me");
  scaryBut.position(windowWidth*0.7, 820);
  scaryBut.mouseClicked(showScaryStuff);

}//end setup

function draw(){
  animation();
} //end draw




function home(){
  canvas = createCanvas(windowWidth, 1200);
  canvas.position(0, 82);
  canvas.style('z-index', '-2');
  background(113, 178, 186);
  darken = false;
  intro = "To understand the psycological effects of virtual reality (VR), we have to know what VR is, and how it's used."
  fill(0);
  strokeWeight(0);
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
      strokeWeight(0);
      dreamPar = "VR feels a bit like how a dream feels. It feels like it's actually happening, even though it's (potencially) unrealistic."
      fill(31, 51, 85);
      text(dreamPar, windowWidth*0.6+170, 110, 250);
      noFill();
      strokeWeight(2);

  //how
    howTitle = "How is VR Used?"
    fill(0);
    textSize(20);
    text(howTitle, 10, 330);
      textSize(17);
      fill(58, 2, 2);
      entertainmentTitle = howSections[0];
      text(entertainmentTitle, 100, 350);
        entPar = "VR is most commonly used in the entertainment industry. VR is used for movies, museums, and travel, but probably most famously for video games. Virtual reality gives the viewer a more realistic experience, which allows them to be more engaged in the environment."
        textSize(14);
        text(entPar, 50, 367, 250);
      textSize(17);
      fill(58, 2, 58);
      healthTitle = howSections[1]
      text(healthTitle, 380, 350);
        healthPar = "Virtual reality is also being used in the healthcare industry. It’s used as a risk free way to train surgeons. It can sometimes be used as a diagnostic and could replace surgery. However, what is the most intriguing, is that VR is used as a type of therapy. It has been proven to help patients with PTSD, and Paranoia."
        textSize(14);
        text(healthPar, 320, 367, 250);
      textSize(17);
      fill(1, 5, 38);
      NASATitle = howSections[2]
      text(NASATitle, 660, 350);
        NASAPar = "NASA uses VR to control their robots on Mars, which is billions of miles away. They also use it to train astronauts and to give people the experience of walking through space."
        textSize(14);
        text(NASAPar, 600, 367, 250);
      textSize(17);
      fill(1, 43, 3);
      militaryTitle = howSections[3]
      text(militaryTitle, 920, 350);
        militaryPar = "The Military uses VR to train soldiers. They use it to simulate flight, for medic training in the battlefield, vehicle simulation, as well as other things."
        textSize(14);
        text(militaryPar, 880, 367, 180);


  //psycology
    psycologyTitle = "Is VR Psycologically Unhealthy?"
    textSize(20);
    fill(0);
    text(psycologyTitle, 10, 600);
      psycologyIntro = "What are the psychological effects of virtual reality? Check out the different scenerios below to find out."
      textSize(14);
      text(psycologyIntro, 10, 620);
      psy1 = "Why do these scenerios make sense?"
      text(psy1, 10, 700);
      psycologyPar = "Because virtual reality feels so real, it triggers much more genuine emotions, which is not always a good thing. When are these psychological effects a bad thing? Well you explored the answer to that when you looked at the different scenarios. So back to our original question: is virtual reality psychologically unhealthy? It depends on what it’s used for. It can be a great thing for people suffering from various mental health issues. It also helps with science and the military, as well as various creative industries. However, if used in some types of entertainment (as you saw in the scenarios above) it can be quite destructive."
      text(psycologyPar, 50, 1090, 1000);

}//end home end home end home end home end home end home //don't touch


function basicbutton(x,y,name,funct){
  button = createButton(name);
  button.position(x, y);
  button.mouseClicked(funct);
}



//scenerios
function movies(){
  darken = true;
  movie.hide();
  puppyBut.hide();
  scaryBut.hide();
  DarkCanvas();
  fill(200);
  canvas1 = rect(120, 0,  windowWidth*0.8, 600);
  var par1 = "You’re super hyped about a new version of a video game titled ‘The Evil Within’. As an early Christmas present your cousin Willie gave you the new Samsung Odyssey VR headset. You’ve played ‘The Evil Within’ before, but not with VR."
  noStroke();
  fill(99, 10, 28);
  text(par1, 150, 60, 400);
  var par2 = "You get the game to test it out...and it is scary. I mean you actually screamed out loud seven times, and before that the most you screamed was maybe twice. You come away from it shaken."
  text(par2, 550, 200, 400);
  var par3 = "As you go about your daily life, you start to become more agitated. You keep thinking about that video game, and all those jump scares. You become anxious and fearful, and you lose interest in things you once found entertaining. Not to mention you completely abandon playing ‘The Evil Within’, or any scary video game for that matter. You’re suffering from post traumatic stress disorder."
  text(par3, 150, 300, 400);
  var par4 = "Scroll up"
  text(par4, 150, 590);
  bback = basicbutton(10, 10, 'back', back);
}//end movies //works

function back(){
  home();
  darken = false;
  travel.show();
  puppyBut.show();
  scaryBut.show();
}

function travels(){
  travel.hide();
  puppyBut.hide();
  scaryBut.hide();
  DarkCanvas();
  darken = true;
  fill(200);
  canvas1 = rect(120, 0,  windowWidth*0.8, 600);
  var parr1 = "You work as a businessman for a company that you’ve put a lot of time and effort into. They recently ordered a now shipment of VR equipment so that you can virtually travel to meetings, instead of actually going. The company has gifted you with your own headset. You find this new technology very fascinating and you start spending a lot of time discovering its different features."
  noStroke();
  fill(14, 72, 112);
  text(parr1, 150, 60, 400);
  var parr2 = "You find that you can not only travel to meetings, but to other places, like Hawaii or Paris. Because of the time this technology saves, your boss has dumped a bunch of extra work for you to do. This causes much stress, and you find it relaxing to take a break and virtually visit the Arc de Triomphe."
  text(parr2, 550, 220, 400);
  var parr3 = "You spend more and more time traveling to various places all over the world, so much so that you get behind on work. You start becoming detached from your friends, family, and most other parts of your life as your addiction becomes worse and worse."
  text(parr3, 150, 340, 400);
  var parr4 = "Scroll up"
  text(parr4, 150, 590);
  bback2 = basicbutton(10, 10, 'back', back1);
} //text doesn't show up

function back1(){
  home();
  darken = false;
  travel.hide();
  science.show();
  puppyBut.show();
  scaryBut.show();
}

function science1(){
  science.hide();
  puppyBut.hide();
  scaryBut.hide();
  DarkCanvas();
  darken = true;
  fill(200);
  canvas1 = rect(120, 0,  windowWidth*0.8, 600);
  var par1 = "You just got a degree in science and are eager to head into the science field. You want to introduce VR to the field and use it to further investigate how things work. You get a job and are successful in proposing this idea to your bosses."
  noStroke();
  fill(19, 130, 63);
  text(par1, 150, 60, 400);
  var par2 = "You help your community implicate the VR technology into their work. It takes a lot of effort, but it pays off. Thanks to the VR, people, including yourself are making new discoveries and are able to approach problems in a way that previously wasn’t possible."
  text(par2, 550, 205, 400);
  var par3 = "Your work resulted in numerous scientific breakthroughs, and you got promoted. Your self-confidence is high, and you are more than comfortable with your situation."
  text(par3, 150, 340, 400);
  var par4 = "Scroll up"
  text(par4, 150, 590);
  bback3 = basicbutton(10, 10, 'back', back2);
}

function back2(){
  home();
  darken = false;
  travel.hide();
  science.hide();
  therapy.show();
  puppyBut.show();
  scaryBut.show();
}

function therapy1(){
  therapy.hide();
  puppyBut.hide();
  scaryBut.hide();
  DarkCanvas();
  darken = true;
  fill(200);
  canvas1 = rect(120, 0,  windowWidth*0.8, 600);
  var par1 = "You are a patient who suffers from paranoia. You have been visiting your therapist for a few years now, and it has definitely helped you. However, you are still not satisfied by the rate at which you are getting better. One day your therapist tells you about how VR technology is being used to help people like you, and suggests you try it."
  noStroke();
  fill(99, 17, 117);
  text(par1, 150, 60, 400);
  var par2 = "You take their advice and test it out. You use VR to enter a situation where you would be very uncomfortable (in a crowded elevator, or on a crowded subway), but since it’s VR you know you are safe. This helps you and you return to try it again."
  text(par2, 550, 205, 400);
  var par3 = "After some time of using VR, you are able to ride the train without feeling as uncomfortable. You become less anxious, and begin to overcome your paranioa. You become a more relaxed and happy person."
  text(par3, 150, 340, 400);
  var par4 = "Scroll up"
  text(par4, 150, 590);
  bback4 = basicbutton(10, 10, 'back', back3); //works
}

function back3(){
  home();
  darken = false;
  travel.hide();
  science.hide();
  therapy.hide();
  puppyBut.show();
  scaryBut.show();
}

function DarkCanvas(){
  fill(0, 200);
  canvasDark = rect(0, 0, windowWidth, 1400);

}


function showPuppyStuff(){
  puppyBut.hide();
  image(img1, 100, 720, img1.width/2, img1.height/2);
  puppyPar = "What emotions came up when you saw the puppy? Were you happy? Did you think it was cute? (If you didn’t, I don’t know what kind of person you are) Now imagine if you got to see the puppy playing, and even got to throw the ball for the puppy. Would that make you happier? If you got to play with this puppy in virtual reality, it would probably make you feel happier than you did by just looking at the picture (unless you are unfeeling demon who hates puppies for some reason)."
  strokeWeight(0);
  fill(0);
  text(puppyPar, 30, 900, 400);
}

function showScaryStuff(){
  scaryBut.hide();
  image(img2, 700, 720, img2.width/1.5, img2.height/1.5);
  scaryPar = "What emotions came up when you saw the wolf-monster thing? Were you scared? On edge? Grossed out? Now imagine if you looked to the right and that thing was rushing toward you howling. Would that make you more terrified? If you saw that wolf-monster coming at you in virtual reality, you’d probably freak out, more so than you did by looking at the picture."
  strokeWeight(0);
  fill(0);
  text(scaryPar, 650, 910, 400);
}



function sleepingPerson(){
  strokeWeight(3);
  fill(255);
  noStroke();
  rect(655-12, 150, 30, 18);
  rect(655+10, 146, 18, 20);
  stroke(0);
  strokeWeight(3);
  ellipse(655, 130, 50, 50);
  arc(655-10, 130, 10, 10, 0, HALF_PI);
  arc(655+10, 125, 10, 10, 0, HALF_PI);
  arc(655+2, 138, 20, 20, radians(20), radians(120));
  arc(655+15, 177, 75, 75, radians(170), radians(220));
  arc(655, 173, 75, 75, radians(310), radians(18));
  noStroke();
  rect(655-20, 177, 54, 7);
  stroke(0);
  strokeWeight(3);
}

function animation(){
  strokeWeight(3);
  fill(81, 101, 135);
  rect(655-40, 85, 200, 100);
  sleepingPerson();
      if(i%4 == 1){
       strokeWeight(1);
       ellipse(655+37, 125, 6, 6); //bubble 1
       }
      if(i%4 == 2){
       strokeWeight(1);
       ellipse(655+37, 125, 6, 6); //bubble 1
       ellipse(655+55, 120, 8, 8); //bubble 2
      }
      if(i%4 == 3){
       strokeWeight(1);
       ellipse(655+37, 125, 6, 6); //bubble 1
       ellipse(655+55, 120, 8, 8); //bubble 2
       ellipse(655+110, 120, 80, 50); //thought
      }
      i++;

  if(darken === true){
    fill(200);
    noStroke();
    rect(655-45, 82, 210, 110);
  }


}
