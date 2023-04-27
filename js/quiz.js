// Variables set globally
var startQuiz = document.getElementById("startQuiz")
var saveScore = document.getElementById("saveScore")
var viewScores = document.getElementById("viewScores")
var playAgain = document.getElementById("playAgain")

var welcome = document.getElementById("welcome")
var quiz = document.getElementById("quiz")
var results = document.getElementById("results")


var choices = document.getElementById("choices")
var message = document.getElementById("message")

var timer = document.getElementById("timer")

var outcome = document.getElementById("outcome")

var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var countdownTimer;

// This section helps to start the quiz
function onStartQuiz() {
startQuiz.classList.add('hide')

// Time given to answer questions
secondsLeft = 25
currentQuestion = 0;

countdownTimer = setInterval() 
   
    if(secondsLeft > 0) {
    timer.textContent = secondsLeft;
   } else {
    stopQuiz();
   }
   secondsLeft--;





}









// This section helps display quiz questions: Need to increment on questions
function displayQuestion() {



}

// This section helps user to select answer 
function selectAnswer() {



}

// This section helps to stop the quiz completely
function stopQuiz() {


}

startQuiz.addEventListener("click" , onStartQuiz);
saveScore.addEventListener("click" , onSaveScore)
viewScores.addEventListener("click" , onviewScores)
playAgain.addEventListener("click" , onStartQuiz);