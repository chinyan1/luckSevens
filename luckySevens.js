var rollCounter;
var highestAmount;
var highestPosition;
var rollsFromHighest;
 var startingBet;
function hideResults() {
    document.getElementById("results").style.display = "none";
}

function roll() {
    return Math.floor(Math.random() * 6) + 1;
}
function play() {
    rollCounter = 0;
    highestAmount = 0;
    highestPosition = 0;
    rollsFromHighest = 0;
    startingBet = document.getElementById("betInput").value;

    var bet = startingBet;

    var diceRoll = roll() + roll();
    var betsArray = [];
    //var highestWon = 0;

    while (bet > 0) {
        if (diceRoll != 7) {
            bet -= 1
        } else {
            bet += 4
        }
        betsArray.push(bet)
        diceRoll = roll() + roll();
    }

    rollCounter = betsArray.length;
    highestAmount = Math.max.apply(Math, betsArray);
    highestPosition = betsArray.indexOf(highestAmount);
    rollsFromHighest = rollCounter - highestPosition;

    showResults();

}

function showResults() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet + ".00";
    document.getElementById("resultsRollCounter").innerHTML = rollCounter;
    document.getElementById("resultsHighestHeld").innerHTML = "$" + highestAmount + ".00";
    document.getElementById("resultsRollsFromHighest").innerHTML = rollsFromHighest;
}

var startingBet = document.getElementById("betInput").value; {
  if (startingBet <= 0);
    window.alert("Bet must be greater than 0");
}
