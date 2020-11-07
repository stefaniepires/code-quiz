var timeEl = document.querySelector(".countdown");
var startBtnEl = document.querySelector(".startBtn");
var instructionsEl = document.querySelector(".start-screen");
var questionLabelEl = document.querySelector(".question-title");
var questionEl = document.querySelector(".question");
var btnContainerEl = document.querySelector(".answer-container");
var displayEl = document.querySelector(".display");
var endGameEl = document.querySelector(".end-game");

//Element Id selectors
var scoreDisplayEl = document.getElementById("score");
var ansBtn1El = document.getElementById("btn-1");
var ansBtn2El = document.getElementById("btn-2");
var ansBtn3El = document.getElementById("btn-3");
var ansBtn4El = document.getElementById("btn-4");

//Global varables
var score = 0;
var correct = 10;
var timer;
var timeInterval;
var focusQuestion = 0;
//Questions and Answers Lists
const questions = [
    {
        question: "Where should the doc type be located in your HTML?",
        answers: ["In the <head> element", "In the <footer> element", "In the <body> element", "All of the above"],
        correctAnswer: 0,
    },
    {
        question: "Choose the correct HTML tag for the largest heading.",
        answers: ["H3", "H1", "H2", "H4"],
        correctAnswer: 1,
    },
    {
        question: "Which is the correct CSS syntax?",
        answers: ["body {color: black}", "{body;color:black}", "{body:color=black(body}", "body:color=black"],
        correctAnswer: 0,
    },
    {
        question: "Which of the following is the correct syntax to display “Welcome!” in an alert box using JavaScript?",
        answers: ["alertbox(“Welcome!”);", "msg(“Welcome!”);", "msgbox(“Welcome!”);", " alert(“Welcome!”);"],
        correctAnswer: 3,
    },
    {
        question: "Which of these is a correct method to create a new array",
        answers: ["var myArray = ();", "var myArray = [];", "var myArray = new Array[];", "var myArray = {};"],
        correctAnswer: 1,

        question: "The function call Math.ceil(3.5) returns",
        answers: ["Throws a MathError exception.", "4", "0", "3"],
        correctAnswer: 1,
    }
];
var ansBtns = [];
ansBtns.push(ansBtn1El);
ansBtns.push(ansBtn2El);
ansBtns.push(ansBtn3El);
ansBtns.push(ansBtn4El);

//Starting the quiz when the "Start Quiz" button is clicked
function startQuiz() {
    //starting timer at 75 seconds
    countdown();
    timer = 75;
    //displaying first question and set of answers
    showQuestions();
};

//Countdown Timer, ends the quiz when time runs out
function countdown() {
    timeInterval = setInterval(function () {
        if (timer == 0) {
            endGame();
        } else {
            timer--;
            timeEl.textContent = (timer);
        }
    }, 1000);
};

//show question + answer options 
function showQuestions() {
    //question
    questionEl.textContent = questions[focusQuestion].question;
    //answer options
    for (var i = 0; i < ansBtns.length; i++) {
        ansBtns[i].textContent = questions[focusQuestion].answers[i];
    }
};

//Answer checker and moves on to next question
function checkAnswer(selection) {
    //check if answer is correct
    if (selection === questions[focusQuestion].correctAnswer) {
        var result = document.getElementById("answer");
        var text = document.createTextNode("Excellent!");
        //display result as if the answer was correct
        result.appendChild(text);
        //add score
        scoreTracker(correct);
    }
    else {
        var result = document.getElementById("answer");
        var text = document.createTextNode("Wrong!");
        //display result if the answer was incorrect
        result.appendChild(text);
        // deduct 10 seconds from time
        timer -= 10;
    };


};

//question shuffler and ends the game if no questions are left.
function getNextQuestion() {
    //go to next question
    if (focusQuestion < questions.length) {
        //display next question
        showQuestions();
    } else {
        //ends the game
        endGame();
    }
};

//Update score and score Display
scoreTracker = function (num) {
    score += num;
    scoreDisplayEl.textContent = score;
};

//show endgame screen and stop the clock
function endGame() {
    //hide questions,score, display and answers
    questionLabelEl.classList.add("hidden");
    btnContainerEl.classList.add("hidden");
    displayEl.classList.add("hidden");
    //show endgame screen
    endGameEl.classList.remove("hidden");
    //stop timer
    clearInterval(timeInterval);

    //submit button is disabled, it will be enabled only when user inputs a value into the input field
    var input = document.querySelector("#initials");
    input.addEventListener("keyup", function () {
        submitEL.disabled = !input.value;
    });
    setHighScores();
};
