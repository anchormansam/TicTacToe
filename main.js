var A = document.getElementById('APP');

//   var P = document.createElement(P)
//   A.appendChild(P)


/* <div id="APP">
    <div class="container">
        <div class="row" id="r1">
            <div class="col"id="1"></div>
            <div class="col" id="2"></div>
            <div class="col" id="3"></div>
        </div>
    </div>
</div> */

// create tic tac toe board


function createBoard(toAdd) {
    var board = document.createElement("div");
    for (var i = 0; i < 3; i++) {
        var newRow = document.createElement("div");
        newRow.id = 'Tac' + i;
        newRow.className = 'row';


        for (var j = 0; j < 3; j++) {
            var newCol = document.createElement("div");
            newCol.id = 'TIC' + j;
            newCol.innerHTML = "BOO";
            newCol.className = 'col-4 border';
            newRow.appendChild(newCol);
        }
        board.appendChild(newRow);
    }
    toAdd.appendChild(board);
}

function init() {
    var container = document.createElement('div');
    container.setAttribute('class', 'container');
    
    createBoard(container);
    
    var button = document.createElement('div');
    button.setAttribute("class", "text-center");
    
    var btn = document.createElement('button');
    btn.innerHTML = 'Restart';
    
    button.appendChild(btn);
    container.appendChild(button);
    A.appendChild(container);
}