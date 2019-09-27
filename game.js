
// array for all squares
var squareArray = ['_btnclick']
// click count for turns
var t = 0;
var currentTurn = 1;
var turnNames = ["none", "X", "O"];
var dataArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var index = null;

// Whos Turn is it
function whosTurn() {
    // // playerOne goes first and is always x

    var str = "X";
    if (t >= 4) {
        winCheck();
    }
    if (t % 2) {
        str = 'X';
        currentTurn = 1;
    }
    else {
        str = 'O';
        currentTurn = 2;
    }
    var currentTurnContainer = document.getElementById('currentTurn');
    currentTurnContainer.innerHTML = "Player " + str + " turn";
    console.log('turn', t);
    t++;
}
// //  When a Square is selected


function buttonClickHandler(e) {
    // e is the event passed from the addEventListener
    // e.target is the html element, the button that was clicked
    // set the html of the button to the current turn ( X or O )
    // use the id to set the index of the data array to the current turn's value
    console.log('box number', e.target.id.split('-')[1]);
    e.target.innerHTML = turnNames[currentTurn];
    index = e.target.id.split('-')[1];
    dataArray[index] = currentTurn;
    this.removeEventListener('click', buttonClickHandler);
    whosTurn();


};

function restartButton() {
    dataArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    t = 0;
    currentTurn = 1;
    index = null;
    k = 0;
    init();
    console.log('restartbutton')
}


// pass in three indexes of the data array to check
function checkValues(a, b, c) {
    // check a, b, c for 0, if any equal 0 return false;
    var sum = dataArray[a] + dataArray[b] + dataArray[c];
    if (dataArray[a] == 0) {
        return 0;
    }
    if (dataArray[b] == 0) {
        return 0;
    }
    if (dataArray[c] == 0) {
        return 0;
    }
    if (sum == 3) {
        return 1;
    }
    if (sum == 6) {
        return 2;
    }
    return 0;

    // return 0 if no win,
    // return 1 if == 3
    // return 2 if == 6
}
function winCheck() {
    // call checkValues 8 times
    // if any of the calls return a 1 or 2, there is a win
    var playerSum;
    playerSum = checkValues(0, 1, 2);
    if (playerSum) {
        alert('Winner Player ' + playerSum);
        return;

    }
    playerSum = checkValues(0, 4, 8);
    if (playerSum) {
        alert('Winner Player ' + playerSum);
        init();
        return;
    }
    var playerSum = checkValues(0, 3, 6);
    if (playerSum) {
        alert('Winner Player ' + playerSum);
        nit();
        return;
    }
    var playerSum = checkValues(1, 4, 7);
    if (playerSum) {
        alert('Winner Player ' + playerSum);
        nit();
        return;
    }
    var playerSum = checkValues(2, 4, 6);
    if (playerSum) {
        alert('Winner Player ' + playerSum);
        nit();
        return;
    }
    var playerSum = checkValues(3, 4, 5);
    if (playerSum) {
        alert('Winner Player ' + playerSum);
        nit();
        return;
    }
    var playerSum = checkValues(6, 7, 8);
    if (playerSum) {
        alert('Winner Player ' + playerSum);
        nit();
        return;
    }
    var playerSum = checkValues(2, 5, 8);
    if (playerSum) {
        alert('Winner Player ' + playerSum);
        nit();
        return;
    }
    if (t == 8) {
        alert('ITS A TIE');
        nit();
        return;
    }
}