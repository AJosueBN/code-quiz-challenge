//declare variable and do the localstorage get item
//get the id of the div you want to display the scores in
//create a for loop and loop through the variable assigned to the get item
//inside the for loop create the elements of the listwhere you will display the results
// use textContent to add the initiaals and score to it
//append these created elements to the htlm id you got above.


//remeber that what you are retriveing is an object
//so to do the textcontet it has to be varname(from the top where you get item).initials +  varname(from the top where you get item).score

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

    results.innerHTML = '<div class="player-Item">$(initials)</div> <div class="score-Item">$(score)</div>'

                       
    scoresheet.appendChild(results);

}

backtoQuiz.addEventListener("click" , onReturnToQuiz);

