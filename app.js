let compScore = 0; 
let userScore = 0; 

let choices = document.querySelectorAll(".choice"); 
let msg = document.querySelector("#msg");
let userScoreboard = document.querySelector("#your-score");
let compScoreBoard = document.querySelector("#comp-score");


const genCompChoice = () => {
    const option = ["rock" , "paper", "scissor"];
    const randIndx = Math.floor(Math.random()*3);
    return option[randIndx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw, Play Again"
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++; 
        userScoreboard.innerText = userScore;
        msg.innerText = "You win " 
        console.log("you win")
    } else {
        compScore++;
        compScoreBoard.innerText = compScore;
        msg.innerText = "You loss " 
        console.log("you lose")
    }
}
const playGame = (userChoice) => {
    console.log(`userChoice : ${userChoice}`)
    const compChoice = genCompChoice();
    console.log(`compChoice : ${compChoice}`)

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //paper , scissor
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        // console.log(`choice was clicked ${userChoiceId}`);
        playGame(userChoice)
    })
})

