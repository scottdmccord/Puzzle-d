

// create the game state:

var grid = [];

var createGrid = function() {
  for (var i = 0; i < 16; i++) {
    grid[i] =[];
    for (var j = 0; j < 9; j++) {
      grid[i][j] = { x: (i * -100), y: (j * -100)};
    }
  }
}

createGrid();

// var isWin = (a,b)=>
//   a.every( (piece, i) =>
//     piece === b[i]
//   )


// var isWin = function(a,b) {
//   return a.every( function(piece, i) {
//     return piece === b[i];
//   })
// }

var turn = 0;

// after DOM loads
$(function(event) {
console.log("Puzzle-d!");

var $container = $('.container');
var createBoard = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px'
          })
         $container.append(block);
         counter++;
      }
  }
}

createBoard();


function createVariables() {
  boxes = $('.piece');
  // solution = $('.piece').toArray();
  currentBoard = $('#piece').toArray();
}

// solution = $('.piece').toArray();
createVariables();


function checkWin() {
  var win = true;
  for (var i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i].id != ('piece' + i)) {
      console.log(currentBoard[i].id)
      console.log('piece' + i)
      win = false;
    }
  }
  console.log(win);
}

// Function that generates the puzzle.
var startPuzzle = function() {
  for(var i = 0; i < boxes.length; i++) {
    var target = Math.floor(Math.random() * boxes.length - 1) + 1;
    var target2 = Math.floor(Math.random() * boxes.length -1) + 1;
    boxes.eq(target).before(boxes.eq(target2));
  }
  currentBoard = $('.piece').toArray();
}

// Function that solves puzzle. To remove after game finished.
var solvePuzzle = function() {
  for (var i = 0; i < boxes.length; i++) {
    $("#piece"+ i).insertAfter("#piece" + (i-1));
  }
  currentBoard = $('.piece').toArray();
}


// Generates puzzle
$('.generatePuzzle').on('click', startPuzzle);



// Solves the puzzle (to remove after game is built)
$('.fixPuzzle').on('click', solvePuzzle);


// Win condition check
// $('.winCheck').on('click', function() {
//     if(isWin(solution, currentBoard) === true) {
//       alert("you won!");
//     }
// });
$('.winCheck').on('click', checkWin);

// CLick and swap function
$('.piece').on('click', function() {
  console.log('test!');
  if(turn === 0) {
    console.log('turn 0');
    divA = this;
    turn++;
  } else if(turn === 1) {
    divB = this;
    holder = this.style.backgroundPosition;
    holderId = this.id;
    console.log('turn 1');
    divB.style.backgroundPosition = divA.style.backgroundPosition;
    divA.style.backgroundPosition = holder;
    divB.id = divA.id;
    divA.id = holderId;
    turn--;
  }
})


});



