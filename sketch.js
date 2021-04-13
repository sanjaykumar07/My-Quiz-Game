var contestantCount,
  database,
  quiz,
  question,
  contestant,
  database,
  allContestants;
var gameState = 0;
var bg, bgResult;

function preload() {
  bg = loadImage("bg2.jpg");
  bgGreen = loadImage("bg-green.png");
}
function setup() {
  canvas = createCanvas(1000, 500);
  bgResult = bg;
  database = firebase.database();

  //question = new Question();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw() {
  background(bgResult);

  if (contestantCount === 4) {
    quiz.update(1);
    quiz.listName();
    console.log(question.input2.value() == 2);
    if (question.input2.value() == 2) {
      bgResult = bgGreen;
     
    }
    text("2 is right answer!!", 450, 260);
  }
  //console.log(gameState)
  if (gameState === 1) {
    quiz.play();
  }
}
