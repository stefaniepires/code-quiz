// setInterval function allows you to run your code on a timer
//execute a function every X amount of miliseconds 
const timerText = document.getElementById("timer-text"); //getting ID from HTML
const btnStart = document.getElementById("btn-start"); //getting ID from HTML

//this variable is keeping track of the set-timer # in the html file
let count = 75;

//this event listener is listening to when the user clicks on the "Let's Go" button, then timer starts
btnStart.addEventListener ("click", function() {
    //display a number on the page and for every second that passes, that number decreases by 1
    setInterval(function (){ 
    //this will update the timer text
    //beginning with decreasing count by 1
        count -=1;
    //this will change the html text to be the actual value of count
        timerText.textContent = count;

//this means, for every 1 second, perform the above function
    }, 1000);

}); 