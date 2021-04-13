class Quiz {
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database
        .ref("contestantCount")
        .once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }

  play() {
    question.input1.hide();
    question.input2.hide();
    question.submit.hide();
    question.title.hide();
    question.title2.show();
  }

  listName() {
    Contestant.getContastantInfo();
    var y = 320;
    if (allContestants != undefined) {
      for (var i in allContestants) {
        y += 30;
        textSize(25);
        fill("blue");
        text("Players    Their Answers", 450, 310);
        text(
          allContestants[i].name + "      " + allContestants[i].answer,
          450,
          y
        );
      }
      for (var s = 310; s < 440; s += 25) {
        text("|", 540, s);
      }

      text("---------------------------------", 445, 325);
    }
  }
}
