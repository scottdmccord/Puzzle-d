// Set up HTML to create the game:

// VARIABLES:

// Create an array that will still store objects that have an x and y coordinate;
var grid = [];
// A turn variable that enables the click and swap function;
var turn = 0;


// images mostly come from http://wallpapersafari.com/fantasy-wallpaper-hd/
var urls = [
  'url("http://i.imgur.com/HWs6Mym.jpg")',
  'url("http://i.imgur.com/m5JWcJs.jpg?1")',
  'url(http://i.imgur.com/NABahjE.jpg?1)',
  'url("http://i.imgur.com/B8xsff4.jpg?1")',
  'url("http://i.imgur.com/b5gcmnR.jpg?1")',
  'url("http://i.imgur.com/CWvP6zh.jpg?1")',
  'url("http://i.imgur.com/wxiGxy4.jpg?1")',
  'url("http://i.imgur.com/mGOb37s.jpg1")',
  'url("http://i.imgur.com/v1PL2vP.jpg?1")',
  'url("http://i.imgur.com/7yaWUPc.jpg?1")'
];

var randomUrl = Math.floor(Math.round(Math.random() * (urls.length - 1)))

// FUNCTIONS:

// function that creates the objects with x and y coordinates that get placed inside the grid array.
// var createGridEasy = function() {
//   for (var i = 0; i < 2; i++) {
//     grid[i] =[];
//     for (var j = 0; j < 3; j++) {
//       grid[i][j] = { x: (i * -800), y: (j * -300)};
//     }
//   }
// }

// createGrid();

// after DOM loads
$(function(event) {
console.log("Puzzle-d!");

// VARIABLES

var currentBoard = $('#piece').toArray();

// Easy Dimensions
var easyHeight = 300;
var easyWidth = 800;
var mediumHeight = 150;
var mediumWidth = 400;
var hardHeight = 150;
var hardWidth = 200
var expertHeight = 100;
var expertWidth = 100;


// Functions to load boards

// EASY PUZZLE
var createGridEasy = function() {
  for (var i = 0; i < 2; i++) {
    grid[i] =[];
    for (var j = 0; j < 3; j++) {
      grid[i][j] = { x: (i * -easyWidth), y: (j * -easyHeight)};
    }
  }
}

// MEDIUM PUZZLE
var createGridMedium = function() {
  for (var i = 0; i < 4; i++) {
    grid[i] =[];
    for (var j = 0; j < 6; j++) {
      grid[i][j] = { x: (i * -mediumWidth), y: (j * -mediumHeight)};
    }
  }
}

//HARD PUZZLE
var createGridHard = function() {
  for (var i = 0; i < 8; i++) {
    grid[i] =[];
    for (var j = 0; j < 6; j++) {
      grid[i][j] = { x: (i * -hardWidth), y: (j * -hardHeight)};
    }
  }
}

//EXPERT PUZZLE
var createGridExpert = function() {
  for (var i = 0; i < 16; i++) {
    grid[i] =[];
    for (var j = 0; j < 9; j++) {
      grid[i][j] = { x: (i * -expertWidth), y: (j * -expertHeight)};
    }
  }
}

// Function to create the individual divs that will populate the game board.

//EASY
var $container = $('.container');
var createBoardEasy = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-image' : urls[randomUrl],
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           'height' : easyHeight,
           'width' : easyWidth
          })
         $container.append(block);
         counter++;
      }
  }
  this.disabled = true;
}

//MEDIUM
var $container = $('.container');
var createBoardMedium = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-image' : urls[randomUrl],
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           'height' : mediumHeight,
           'width' : mediumWidth
          })
         $container.append(block);
         counter++;
      }
  }
 this.disabled = true;
}

//HARD
var $container = $('.container');
var createBoardHard = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-image' : urls[randomUrl],
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           'height' : hardHeight,
           'width' : hardWidth
          })
         $container.append(block);
         counter++;
      }
  }
  this.disabled = true;
}

//EXPERT
var $container = $('.container');
var createBoardExpert = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-image' : urls[randomUrl],
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           'height' : expertHeight,
           'width' : expertWidth
          })
         $container.append(block);
         counter++;
      }
  }
this.disabled = true;
}


// createBoard();

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
  if(win === true) {
    alert("you win!");
  }
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

// Loads puzzle

// EASY PUZZLE LOADING
$('.loadEasy').on('click', createGridEasy);
$('.loadEasy').on('click', createBoardEasy);

// MEDIUM PUZZLE LOADING
$('.loadMedium').on('click', createGridMedium);
$('.loadMedium').on('click', createBoardMedium);

// HARD PUZZLE LOADING
$('.loadHard').on('click', createGridHard);
$('.loadHard').on('click', createBoardHard);

// EXPERT PUZZLE LOADING
$('.loadExpert').on('click', createGridExpert);
$('.loadExpert').on('click', createBoardExpert);

// Generates puzzle
$('.generatePuzzle').on('click', startPuzzle);
$('.generatePuzzle').on('click', swapTiles);


// Solves the puzzle (to remove after game is built)
$('.fixPuzzle').on('click', solvePuzzle);

// Checks to see if winning condition is met.
$('.winCheck').on('click', checkWin);


});



