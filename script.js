// Set global variables
// create click event for start button
var startButton = document.getElementById("startbtn");
var submitButton = document.getElementById("submitbtn");
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var endEl = document.getElementById("end");
var scoreEl = document.getElementById("display-score");
var timerEl = document.getElementById("timer");
var feedbackEl = document.getElementById("feedback");
var initialsInput = document.getElementById("initials");
var highScoreButton = document.getElementById("high-score-btn");
var homeButton = document.getElementById("return-home-btn");
var scoresEl = document.getElementById("scores");
var savedInitialsEl = document.getElementById("saved-initials");
var savedScoresEl = document.getElementById("saved-scores");
var score = 0;
var questions = [
  {
    text: "1. Using your knowledge of JavaScript Assignment Operators, which of the following is the same as 'x = x+y' ?",
    choices: ["x = y", "x += y", "x -= y", "x *= y"],
    answer: "x += y",
  },
  {
    text: "2. Which of the following is NOT a Logical Operator in JavaScript?",
    choices: ["+", "&&", "||", "!"],
    answer: "+",
  },
  {
    text: "3. Array indexes in JavaScript start with _______.",
    choices: ["-1", "1", "0", "0.1"],
    answer: "0",
  },
  {
    text: "4. The JavaScript array method _______ REMOVES the LAST element from an array.",
    choices: ["shift()", "unshift()", "push()", "pop()"],
    answer: "pop()",
  },
  {
    text: "5. The JavaScript array method _______ ADDS a new element to the end of an array.",
    choices: ["shift()", "unshift()", "push()", "pop()"],
    answer: "push()",
  },
];
var questionIndex = 0;

function startGame() {
  startEl.setAttribute("class", "hide");
  quizEl.removeAttribute("class", "hide");
  countdown();
  askQuestion();
}

function askQuestion() {
  var currentQuestion = questions[questionIndex].text;
  var questionEl = document.querySelector(".question");
  questionEl.textContent = currentQuestion;
  var answerEl = document.querySelector(".answer-box");
  answerEl.innerHTML = "";
  questions[questionIndex].choices.forEach(function (choice) {
    var button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("value", choice);
    button.addEventListener("click", function () {
      console.log(this.value);
      //   if Yes, increase score by 1. if no score does not change.
      if (this.value === questions[questionIndex].answer) {
        console.log("right answer");
        feedbackEl.textContent = "Correct!";
        score++;
        console.log(score);
      } else {
        console.log("wrong answer");
        feedbackEl.textContent = "Wrong!";
        console.log(score);
      }
      // check to see if out of questions
      if (questionIndex >= 4) {
        quizEl.setAttribute("class", "hide");
        endEl.removeAttribute("class", "hide");
        displayScore(score);
        return score;
      }
      // move to next question
      questionIndex++;
      askQuestion();
    });
    answerEl.appendChild(button);
  });
}

function countdown(score) {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "Time: " + timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeleft === 1) {
      timerEl.textContent = "Time: " + timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

function displayScore(score) {
  console.log(
    "Thanks for playing! Out of 5 total questions, you answered ",
    score,
    "correctly."
  );
  scoreEl.textContent =
    "Thanks for playing! Out of 5 total questions, you answered " +
    score +
    " questions correctly.";
}

function inputInitials(score) {
  var userInfo = {
    initials: initialsInput.value,
    finalScore: score,
  };
  var scoreList = JSON.parse(localStorage.getItem("userInfo"));
  var arrayOfScores = [];
  if (scoreList) {
    scoreList.forEach(function (item) {
      arrayOfScores.push(item);
    });
    arrayOfScores.push(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(arrayOfScores));
  } else {
    arrayOfScores.push(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(arrayOfScores));
  }
}

function submitGame() {
  //   askQuestion(score);
  inputInitials(score);
  displayAllScores();
  //   endEl.setAttribute("class", "hide");
  //   startEl.removeAttribute("class", "hide");
  //   location.reload();
}

function displayAllScores() {
  //   inputInitials();
  startEl.setAttribute("class", "hide");
  endEl.setAttribute("class", "hide");
  quizEl.setAttribute("class", "hide");
  scoresEl.removeAttribute("class", "hide");
  var scoreList = JSON.parse(localStorage.getItem("userInfo"));
  //   scoresEl.textContent = "High Scores";
  scoreList.forEach(function (score) {
    console.log(
      "initials: " + score.initials + ", score of: " + score.finalScore
    );
    var initialsEl = document.createElement("p");
    initialsEl.textContent = "Initials: " + score.initials;
    var finalScoreEl = document.createElement("p");
    finalScoreEl.textContent = "Score: " + score.finalScore;
    scoresEl.appendChild(initialsEl);
    scoresEl.appendChild(finalScoreEl);
  });
  //   savedScoresEl.textContent = scoreList.finalScore;
  //   savedInitialsEl.textContent = scoreList.initials;
}

function returnHome() {
  location.reload();
}

startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", submitGame);
highScoreButton.addEventListener("click", displayAllScores);
homeButton.addEventListener("click", returnHome);
