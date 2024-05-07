let userScore = 0 ;
let comScore = 0; 

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let user_Score = document.querySelector('#user-score')
let com_Score = document.querySelector('#comp-score')

let showWinner = (userWin)=>{

    if(userWin)
        {
            userScore++;
            user_Score.innerText = userScore
            console.log('you win')
            msg.innerText = "You Win !"
            msg.style.backgroundColor="green"
        }
    else{
        comScore++;
        com_Score.innerText = comScore
        console.log('you lost')
        msg.innerText = "You lose !"
        msg.style.backgroundColor="red"
    }
}

let drawGame=()=>{
    console.log('match draw ')
    msg.innerText = "Match Draw !"
    msg.style.backgroundColor="yellow"
    msg.style.color="black"
}

let getComChoice =()=>{

    let options = ["rock","paper","scissors"]
    let randaom_index = Math.floor(Math.random()*3)
    return options[randaom_index];
}

let playGame = (userChoice)=>{
   
 console.log('you selected ', userChoice)

 const comChoice = getComChoice();
 console.log('computer ',comChoice)

 msg2.innerText = `You Selected : ${userChoice}, Computer Selected : ${comChoice}`

  if(comChoice === userChoice)
   { 
    drawGame()
   }
  else{
    let userWin = true;
    if(userChoice==="rock")
        {
            userWin = comChoice=="scissors"?true:false
        }
      else if(userChoice=="paper")
        {
            userWin = comChoice=="rock"?true:false
        }
        else{
            userWin = comChoice=="paper"?true:false;
        }
        showWinner(userWin);
  }
   
}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        // console.log('choice is clicked',userChoice);
        playGame(userChoice);
    })
})