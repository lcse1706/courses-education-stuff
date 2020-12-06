const summary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const result = {
    playerHand: '',
    aiHand: '',
}

const hands = [...document.querySelectorAll('img')];

// Player Pick

function pickHand() {
    result.playerHand = this.dataset.option;
    hands.forEach((hand) => hand.style.boxShadow = '');
    this.style.boxShadow = "0 0 0 4px red";
}

// Ai Pick

function pickAi() {  
    result.aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    
}

// Who win

function whoWin(player, ai){

    if (player == ai){
        return "draw";  
    } else if (player == "stone" && ai == "scissors" || player == "paper" && ai == "stone" || player == "scissors" && ai == "") {
        return "win";
     } else {
        return "lose";
     }
}

// Print Result

function printResult(score , player, ai){
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    if(score == "win") {
        document.querySelector('[data-summary="who-win"]').textContent = "You Win !";
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
        document.querySelector('.wins span').textContent = ++summary.wins;
    }else if (score == "lose") {
        document.querySelector('[data-summary="who-win"]').textContent = "You Lose !";
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
        document.querySelector('.losses span').textContent = ++summary.losses;
    }else {
        document.querySelector('[data-summary="who-win"]').textContent = "Draw";
        document.querySelector('[data-summary="who-win"]').style.color = 'grey';
        document.querySelector('.draws span').textContent = ++summary.draws;
    }

    document.querySelector('.numbers span').textContent = ++summary.games;
}
// Clear Pick

function clearPick(){
    hands.forEach((hand) => hand.style.boxShadow = '');
    result.playerHand = '';
}

// Start Game

function startGame() {
    // console.log("dziala");
    if (result.playerHand == ''){
        return alert("Pick Your Hand !")
    }
    pickAi();
    const score = whoWin(result.playerHand, result.aiHand);
    printResult(score, result.playerHand, result.aiHand);
    clearPick();
 
//    console.log(result.playerHand);
//     console.log(result.aiHand);
}

document.querySelector('.start').addEventListener('click', startGame);
hands.forEach((hand) => hand.addEventListener('click', pickHand)); 