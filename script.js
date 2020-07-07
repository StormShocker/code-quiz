const questions = document.getElementById('questions');
const timeEl = document.querySelector(".time");
const start = document.getElementById('startBtn');

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left in quiz";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
        
      }
  
    }, 1000);
  
    
  }


function startQuiz() {
    var x = document.getElementById("home");
    var y = document.getElementById("questions");
    if(x.style.display == "none") {
        x.style.display == "block";
        y.style.display == "none";
    }

    else {
        x.style.display == "none";
        y.style.display == "block";
        setTime
    }
}  
