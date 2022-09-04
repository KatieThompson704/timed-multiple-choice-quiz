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
var intialInput = document.getElementById("intials");
var highScoreButton = document.getElementById("high-score-btn");
var homeButton = document.getElementById("return-home-btn");
var scoresEl = document.getElementById("scores");
var score = 0;
var questions = [
  {
    text: "Which of the following is NOT an original Skittles flavor?",
    choices: ["Orange", "Lemon", "Strawberry", "Green Apple"],
    answer: "Green Apple",
  },
  {
    text: "In what year did Skittles debut thier 'Taste the Rainbow' slogan?",
    choices: ["1979", "1994", "2007", "2021"],
    answer: "1994",
  },
  {
    text: "Question 3",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 1",
  },
  {
    text: "Question 4",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 1",
  },
  {
    text: "Question 5",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 1",
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
        return score;
      }
      // move to next question
      questionIndex++;
      askQuestion();
      displayScore(score);
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

function inputInitials() {
  initialInput.textContent = initialInput.value;
  var user = {
    initials: initialInput,
    finalScore: scoreEl.value,
  };
  console.log(user);
  return user;
}

function submitGame() {
  //   endEl.setAttribute("class", "hide");
  //   startEl.removeAttribute("class", "hide");
  location.reload();
}

function displayAllScores() {
  startEl.setAttribute("class", "hide");
  endEl.setAttribute("class", "hide");
  quizEl.setAttribute("class", "hide");
  scoresEl.removeAttribute("class", "hide");
  scoresEl.textContent = "Welcome to the High Score Page!";
}

function returnHome() {
  location.reload();
}

startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", submitGame);
highScoreButton.addEventListener("click", displayAllScores);
homeButton.addEventListener("click", returnHome);
