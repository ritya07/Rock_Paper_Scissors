let userScore = 0;
let compScore = 0;
let drawScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");
const drwascorepara= document.querySelector("#draw-score");
const drawGame = () => {
    drawScore++;
    drwascorepara.innerText=drawScore;
    console.log("Game was a draw");
    msg.innerText = "It's a draw! computer and you selected same ";
    msg.style.backgroundColor="black";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userscorepara.innerText=userScore;
        console.log("Win");
        msg.innerText = `You win! Your ${userChoice} Beat Computer's ${compChoice}`;
        msg.style.backgroundColor="Green";
    } else {
        compScore++;
        compscorepara.innerText=compScore;
        console.log("You Lose");
        msg.innerText = `You Lose Computer's  ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor="RED";
    }
};

const ComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = ComputerChoice();
    console.log("Computer choice:", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
