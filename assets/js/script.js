//query selectors
var startButtonEl = document.getElementById("start-task");
var countDownEl = document.getElementById("countdown");

//variables
var timeLeft;
var timeInterval;
var currentIndex = 0;
var score = 0;
var correct = 10;
var currentQuestion = 0;

//array for questions
var questionBank = [
    {
        question: "Where should the doc type be located in your HTML?",
        options: ["In the <head> element", "In the <footer> element", "In the <body> element", "All of the above"],
        answer: "In the <head> element"
    },
    {
        question: "Choose the correct HTML tag for the largest heading.",
        options: ["H3", "H1", "H2", "H4"],
        answer: "H1"
    },
    {
        question: "Which is the correct CSS syntax?",
        options: ["body {color: black}", "{body;color:black}", "{body:color=black(body}", "body:color=black"],
        answer: "body {color: black}"
    },
    {
        question: "Which of the following is the correct syntax to display “Welcome!” in an alert box using JavaScript?",
        options: ["alertbox(“Welcome!”);", "msg(“Welcome!”);", "msgbox(“Welcome!”);", " alert(“Welcome!”);"],
        answer: "alert(“Welcome!”);"
    },
    {
        question: "Which of these is a correct method to create a new array",
        options: ["var myArray = ();", "var myArray = [];", "var myArray = new Array[];", "var myArray = {};"],
        answer: "var myArray = [];"
    },
    {
        question: "The function call Math.ceil(3.5) returns",
        options: ["Throws a MathError exception.", "4", "0", "3"],
        answer: "4"
    }
];

//begin the quiz
function startQuiz() {
    //start quiz timer
    quizTimer();
    
}

function quizTimer() {
    //time for quiz
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
    countDownEl.textContent = "Time left: " + timeLeft;
    if(timeLeft === 0 ) {
        countDownEl.textContent = "Times up!";
        alert("The quiz is over! Lets see how you did.")
        clearInterval(timeInterval);
        //endGame();
    }
    else if (currentIndex === 6) {
        clearInterval(timeInterval);
    }
    timeLeft--;
    }, 1000);
}

startButtonEl.onclick = startQuiz;