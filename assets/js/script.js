var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function startTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left in this quiz.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = "Time Out";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "assets/image/homercrying.jpg");
  mainEl.appendChild(imgEl);

}

startTime();





