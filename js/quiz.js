// Variables set globally

// major buttons info
var startBtn = document.querySelector('#startQuiz')
var saveScore = document.getElementById("saveScore")
var viewScores = document.getElementById("viewScores")
var playAgain = document.getElementById("playAgain")


//quiz container info
var startQuiz = document.querySelector(".start-container")
var quiz = document.getElementById("quiz")
var questionEL= document.querySelector("#questions")
var choices = document.getElementById("choices")
var btn1=document.querySelector('#btn1')
var btn2=document.querySelector('#btn2')
var btn3=document.querySelector('#btn3')
var btn4=document.querySelector('#btn4')
var message = document.getElementById("message")
var timer = document.getElementById("timer")

//result container infor
var results = document.getElementById("results")
var inputEL= document.getElementById("nickname")
var outcome = document.getElementById("outcome")

var secondsLeft = 60;
var score = 0;
var currentQuestion = 0;
var countdownTimer;
var finalscore;
var highScores=[]

// This section helps to start the quiz
function onStartQuiz() {
startQuiz.classList.add('hidden')
quiz.classList.replace("hidden","show")

if(currentQuestion===questions.length){
    stopQuiz()
}

questionEL.textContent=questions[currentQuestion].title
btn1.textContent=questions[currentQuestion].option1
btn2.textContent=questions[currentQuestion].option2
btn3.textContent=questions[currentQuestion].option3
btn4.textContent=questions[currentQuestion].option4

countdownTimer = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft;
    
        if(secondsLeft==0){
            stopQuiz();
        }

},1000) 
   
 

}



// This section helps user to select answer 
function selectAnswer(userChoice) {
    if(userChoice ===questions[currentQuestion].answer){
        score++
        currentQuestion++
        onStartQuiz()
    }else{
        secondsLeft-=5
        currentQuestion++
        onStartQuiz()
    }



}

// This section helps to stop the quiz completely
function stopQuiz() {
clearInterval(countdownTimer)
quiz.style.display="none"
results.classList.replace("hidden", "show")
finalscore=score
console.log(finalscore)
outcome.textContent = 'Your Score: ' + score + '/5';
}

// Saves scores after quiz has completed
function onSaveScore(){
    var initials= inputEL.value
    console.log(initials);

    if(initials !== ""){
        highScores=JSON.parse(localStorage.getItem('allScores')) || []
        var useObj={
            initials: initials,
            score:finalscore
        }
       // console.log(useObj)
       highScores.push(useObj)
        //console.log(highScores);
        localStorage.setItem('allScores',JSON.stringify(highScores))

    }
   

}
function onviewScores(){
    window.location.assign("scores.html")
}

startBtn.addEventListener("click" , onStartQuiz);
choices.addEventListener("click", ()=>{
    var clicked=this.event.target.textContent
        console.log(clicked);
        selectAnswer(clicked)
})
saveScore.addEventListener("click" , onSaveScore)
viewScores.addEventListener("click" , onviewScores)
playAgain.addEventListener("click" , onStartQuiz);


//on the fucntion onSaveScore you create and object with the user initialsvaule that you will grab from the input and the final score
// you will push this object into an arry that you create
//and you will set item on local storage by sending the array.