var scoresheet = document.getElementById("scoresheet")
var backtoQuiz = document.getElementById("returntoQuiz")

function onReturnToQuiz() {
     window.location.href = 'index.html';
}

for(var i = 0; i < localStorage.length; i++) {
    
    var initials = localStorage.key(i);
    var score = localStorage.getItem(initials);

    var results = document.createElement("div");
    results.classList.add('results');

    results.innerHTML = `<div class="player-Item">${initials}</div> <div class="score-Item">${score}</div>`;

                       
    scoresheet.appendChild(results);

}

backtoQuiz.addEventListener("click" , onReturnToQuiz);

