let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector('#msg');
const drawGame = () => {
msg.innerText = "Game Was Draw";
msg.style.backgroundColor =  "#081b31";
}

const showWinner = (userwin,userChoice,compChoice) => {
  if(userwin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor =  "green";
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor =  "red";
  }
}
const computerChoice = () => {
  const options = ["rock","paper","scissors"]
  const randomIndex = Math.floor(Math.random()*3);
  return options[randomIndex];
}

const playGame = (userChoice) => {
  const compChoice = computerChoice();
  if(userChoice === compChoice)
  {
    drawGame();
  }
  else{
    let userWin = true;
    if(userChoice === "rock")
    {
      userWin = compChoice === "paper" ?  false : true;
    }
    else if(userChoice === "paper")
    {
      userWin = compChoice === "scissors"? false : true;
    }
    else
    {
      userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})