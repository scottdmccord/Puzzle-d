// Set up HTML to create the game:

// VARIABLES:

// Create an array that will still store objects that have an x and y coordinate;
var grid = [];
// A turn variable that enables the click and swap function;
var turn = 0;


// FUNCTIONS:

// function that creates the objects with x and y coordinates that get placed inside the grid array.
var createGrid = function() {
  for (var i = 0; i < 16; i++) {
    grid[i] =[];
    for (var j = 0; j < 9; j++) {
      grid[i][j] = { x: (i * -100), y: (j * -100)};
    }
  }
}

createGrid();

// after DOM loads
$(function(event) {
console.log("Puzzle-d!");

// VARIABLES

var currentBoard = $('#piece').toArray();


// Function to create the individual divs that will populate the game board.

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

// Function that generates the puzzle.
var startPuzzle = function() {
  boxes = $('.piece');
  for(var i = 0; i < boxes.length; i++) {
    boxes.addClass('clickPiece');
    var target = Math.floor(Math.random() * boxes.length - 1) + 1;
    var target2 = Math.floor(Math.random() * boxes.length -1) + 1;
    boxes.eq(target).before(boxes.eq(target2));
  }
  currentBoard = $('.piece').toArray();
  this.disabled = true;
}


// On first click collect piece ID, on second cick switch previous piece with current piece.

function swapTiles() {
  $('.clickPiece').on('click', function() {
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
    // checks to see if you've put the puzzle back together
    checkWin();
    turn--;
   }
  })
}

// function to check if all of the puzzle pieces are in the correct order on the board.
function checkWin() {
  var win = true;
  for (var i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i].id != ('piece' + i)) {
      win = false;
    }
  }
  console.log(win);
}

// Function that solves puzzle. To remove after game finished.
var solvePuzzle = function() {
  boxes = $('.piece');
  for (var i = 0; i < boxes.length; i++) {
    $("#piece"+ i).insertAfter("#piece" + (i-1));
  }
  currentBoard = $('.piece').toArray();
}


// EVENT LISTENERS

// Generates puzzle
$('.generatePuzzle').on('click', startPuzzle);
$('.generatePuzzle').on('click', swapTiles);


// Solves the puzzle (to remove after game is built)
$('.fixPuzzle').on('click', solvePuzzle);

// Checks to see if winning condition is met.
$('.winCheck').on('click', checkWin);


});



