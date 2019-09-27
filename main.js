var A = document.getElementById('APP');



var k = 0;
function createBoard(toAdd) {
    var board = document.createElement("div");
    var row = document.createElement("div");
    row.setAttribute("class", "row mx-4");
    row.innerHTML = "TiC TaC ToE";
    // var headerRow = document.getElementById("div");
    //     // headerRow.id = 'mainheader';
    //     // headerRow.className = 'row1';
    
    for (var i = 0; i < 3; i++) {
        var newRow = document.createElement("div");
        newRow.id = 'Tac' + i;
        newRow.className = 'row';


        for (var j = 0; j < 3; j++) {
            var newCol = document.createElement("div");
            var newBtn = document.createElement('button');
            newCol.id = 'TIC' + j;
            newBtn.innerHTML = "";
            newCol.className = 'col-4 border';
            newBtn.id = "squareButton-" + k;
            newBtn.addEventListener("click", buttonClickHandler);
            newCol.appendChild(newBtn);
            newRow.appendChild(newCol);
            k++;
        
        }
        board.appendChild(newRow);
    }
    toAdd.appendChild(board);
}

function init() {
    A.innerHTML = "";
    var container = document.createElement('div');
    container.setAttribute('class', 'container');
    
    createBoard(container);
    
    var button = document.createElement('div');
    button.setAttribute("class", "text-center");
    
    var btn = document.createElement('button');
    btn.innerHTML = 'Restart';
    btn.onclick = restartButton;
    
    button.appendChild(btn);
    container.appendChild(button);
    A.appendChild(container);

    var currentTurn = document.createElement('div');
    currentTurn.setAttribute('class', 'currentTurnContainer');
    currentTurn.setAttribute('id', 'currentTurn');
    currentTurn.innerHTML = "Player X First";
    A.appendChild(currentTurn);
}

