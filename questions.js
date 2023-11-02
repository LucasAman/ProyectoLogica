let answer = "";

function checkAnswer(userAnswer) {
 if (userAnswer === "techno") {
    answer = "Correct!";
    document.getElementById("answer").classList.add("correct");
 } else {
    answer = "Incorrect. The correct answer is 'techno'.";
    document.getElementById("answer").classList.add("incorrect");
 }

 document.getElementById("answer").innerHTML = answer;
}