const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}


const btn = document.querySelector('.start');
const options = document.querySelectorAll('.select img');


//Player Choice

const pickOption = (e) => {
    game.playerHand = e.target.dataset.option;
    options.forEach(option => option.style.boxShadow = "")
    e.target.style.boxShadow = '0 0 0 4px red';
}

options.forEach(option => {
    option.addEventListener('click', pickOption)
})

//Computer choice

const aiChoice = () => {
    return options[Math.floor(Math.random()*3)].dataset.option;
}

//Check Result

function checkResult(player, ai) {
    if ( player === ai){
        return "draw";
    } else if (player === "stone" && ai === "scissors" || player === "paper" && ai === "stone" || player === "scissors" && ai === "stone"){
        return "win"
    } else {return "lose"}
}

// Let's Play !

btn.addEventListener('click', () => {
    if(!game.playerHand){ 
        return alert("Pick One!")
    }

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);

    console.log(game.playerHand);
    console.log(game.aiHand);
    console.log(gameResult); 
})
