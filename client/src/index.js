// Make a Rock Paper Scissors game
/* 
Write the logic to get the computer choice
- Create a function and name it getComputerChoice
- Write some code that will randonmly return "rock", "paper", or "scissors" in the getComputerChoice
- You going to want to use Math.random

Write the logic to get the human choice
- Create a function and name it getHumanChoice
- Write some code that will return a valid choice like "rock", "paper", or "scissors" in the getHumanChoice
- And your going to want to use prompt and alert

Write two variables that keep track of the player and computer scores
- Name them humanScore and computerScore in a global scope
- And give them a starting value of 0

----------------------------------------------------------

Write the logic to play a single round
- Meaning the game will be played round by round 
- I will make a function that takes the human and computer player choices as arguments and increment the round winner score and alert out a winner anoucement
- function name is playRound
- two parameters for playRound will be humanChoice and computerChoice
- Make sure to make the humanChoice parameter case insensitive meaning the player can put "Rock", "rock", "ROCK", "RocK" or other variations
- Write code in the playRound function to alert out a string value like "You lose! Paper beats Rock"
- Increment the humanScore or computerScore variable based on the round winner ofc 

Write the logic to play the entire game
- The game will play 5 rounds I will write a function named playGame that calles the playRound to play 5 rounds and keeps track of the scores and declares a winner at the end
- Create function name playGame
- Move the playRound function and score variables so that they declared inside of the new playGame function
- Play 5 rounds by calling playRound 5 times

*/

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    let botchoices = ["rock", "paper", "scissors"];
    let botRandomchoice = botchoices[Math.floor(Math.random() * botchoices.length)];
    return botRandomchoice;
    //alert(botRandomchoice);
};

//getComputerChoice();

const getHumanChoice = () => {
    let userChoice = prompt("Enter either rock, paper, or scissors");
    return userChoice;
    //alert(userChoice);
};

//getHumanChoice();

const playRound = (humanChoice, computerChoice) => {
    const rules = [
        {"choice": "rock", "beats": "scissors", "losesTo": "paper"},
        {"choice": "paper", "beats": "rock", "losesTo": "scissors"},
        {"choice": "scissors", "beats": "paper", "losesTo": "rock"}
    ];

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    let userCaseValid = humanChoice.toLowerCase();

    let checkHumanChoice = rules.find(r => r.choice === userCaseValid);
    let checkComputerChoice = rules.find(r => r.choice === computerChoice);

    if (checkHumanChoice.choice === checkComputerChoice.choice) {
        alert("Tie");
    } else if (checkHumanChoice.beats === checkComputerChoice.choice) {
        alert(`Player Wins! ${userCaseValid} beats ${computerChoice}`);
    } else {
        alert(`Computer Wins! ${computerChoice} beats ${userCaseValid}`);
    };
};

playRound();