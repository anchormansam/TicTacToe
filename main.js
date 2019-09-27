var A = document.getElementById('APP');
var k = 0;

function createBoard(toAdd) {
    var board = document.createElement("div");
    board.className = 'board h-100';
    board.style = "height: 300px;"
    
    
    for (var i = 0; i < 3; i++) {
        var newRow = document.createElement("div");
        newRow.id = 'Tac d-flex align-items-stretch' + i;
        newRow.className = 'row';
        
        
        for (var j = 0; j < 3; j++) {
            var newCol = document.createElement("div");
            var newBtn = document.createElement('button');
            newCol.id = 'TIC align-self-center' + j;
            newBtn.innerHTML = "";
            newCol.className = 'col-4';
            newBtn.id = "squareButton-" + k;
            newBtn.className = 'X';
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
    container.setAttribute('class', 'container-fluid');
    container.className = 'container mt-5';
    
    createBoard(container);
    
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    row.innerHTML = "TiC TaC ToE";
    row.className = 'header';
    container.appendChild(row);
    
    var button = document.createElement('div');
    button.setAttribute("class", "text-center");
    
    var btn = document.createElement('button');
    btn.innerHTML = 'Restart';
    btn.className = 'restart';
    
    

    
    button.appendChild(btn);
    container.appendChild(button);
    A.appendChild(container);

    var currentTurn = document.createElement('div');
    currentTurn.setAttribute('class', 'currentTurnContainer');
    currentTurn.className = 'turn';
    currentTurn.setAttribute('id', 'currentTurn');
    currentTurn.innerHTML = "Player X First";
    A.appendChild(currentTurn);
}

