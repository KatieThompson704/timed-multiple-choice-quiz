// Set global variables
// create click event for start button
var startButton = document.getElementById("startbtn");
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var questions = [
  {
    text: "Question 1",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 1",
  },
  {
    text: "Question 2",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 1",
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
      //   use if statement to see if answer is right or wrong
      // move to next question, questionIndex++
      questionIndex++;
      // check to see if out of questions
      // call askQuestion again
      askQuestion();
    });
    answerEl.appendChild(button);
  });
}

startButton.addEventListener("click", startGame);
