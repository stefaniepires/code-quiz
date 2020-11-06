//Element ID Selectors Here 
const timerText = document.getElementById("timer-text"); 
const btnStart = document.getElementById("btn-start");

//Placeholder for Query Selectors


//Global Variables go here
//this variable is keeping track of the set-timer # in the html file
let count = 75;

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

//This is for the countdown

//this event listener is listening to when the user clicks on the "Let's Go" button, then timer starts
btnStart.addEventListener ("click", function() {
    //display a number on the page and for every second that passes, that number decreases by 1
    const timerId = setInterval(function (){ 
    //this will update the timer text
    //beginning with decreasing count by 1
        count -=1;
    //this will change the html text to be the actual value of count
        timerText.textContent = count;
        if(count === 0) {
            timerText.textContent = "Time's Up!";
            clearInterval(timerId);
            alert("Check your scores to see how you did!")
        
        }
//this means, for every 1 second, perform the above function
    }, 1000);

}); 


//Start Quiz Function here

//display questions

//buttons for answers

//to display questions

//next question

//Game Over

//save scores

//show scores

//get scores 

//show scores when click on button on home screen

//restart quiz

//event listeners

