// Selecting Elements
var inputBox=document.getElementById("inputBox")
var result=document.getElementById("result")
var guessCount=document.getElementById("guessCount")
var noguess=3

// Generate Random Number 1 to 5
var randomNumber=Math.floor(Math.random()*10)+1 //1 to 10
if(randomNumber>5){
    randomNumber-=5
}

function checkTheNumber()
{
    if(inputBox.value==randomNumber){
        alert("You got it,Congratulations")
        result.textContent="You are right"
    }
    else{
        noguess-=1
        guessCount.textContent="Available Guess:"+noguess
        if(noguess==0){
            alert("You lost,Generated Random Number "+ randomNumber)
        }
        result.textContent="You are wrong !"
    }


}