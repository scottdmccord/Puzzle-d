

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


var isWin = function(a,b) {
  return a.every( function(piece, i) {
    return piece === b[i];
  })
}

// after DOM loads
$(function(event) {
console.log("Puzzle-d!");

var $container = $('.container');
var createBoard = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var $block = $('<div>');
         $block.addClass('piece');
         $block.attr('id' , 'piece' + counter);
         $block.attr('draggable', 'true');
         $block.css({
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px'
          })
         $container.append($block);
         counter++;
      }
  }
}

createBoard();

function createVariables() {
  boxes = $('.piece');
  solution = $('.piece').toArray();
}

createVariables();



var startPuzzle = function() {
  for(var i = 0; i < boxes.length; i++) {
    var target = Math.floor(Math.random() * boxes.length - 1) + 1;
    var target2 = Math.floor(Math.random() * boxes.length -1) + 1;
    boxes.eq(target).before(boxes.eq(target2));
  }
  currentBoard = $('.piece').toArray();
}


$('.generatePuzzle').on('click', startPuzzle);

var solvePuzzle = function() {
  for (var i = 0; i < boxes.length; i++) {
    $("#piece"+ i).insertAfter("#piece" + (i-1));
  }
  currentBoard = $('.piece').toArray();
}

$('.fixPuzzle').on('click', solvePuzzle);

/*var isWin = function() {
  return solution.every(function(piece, i) {
    return piece === currentBoard[i]
  })*/



// iterating throuhg one array and checking it based off the index of the other array.


});
// array method called
// map and foreach are internal loopers of function
// every is a kind of map, instead of looping over each one, it also cehcks if something is true and collects a true



// // make the solutions array
//   var solutionArray = [];

//   // will this always be in order?
//   var boxes = $('.piece');

//   var callSolution = function() {
//     for (var i = 0; i < boxes.length; i++) {
//     solutionArray[i] = $("#piece"+i);
//     }
//   }

// function recordSolution(b) {
//   const record = boxes.map( box =>)
// }



// winning conditions notes
// a[0] = b[0]

// create a solution array on load
// once puzzle is generated, scan and fill a new array
// compare every element across the array to see if it matches the win array
// if they match, trigger the win conditiom
// this array needs to be updated every time a puzzle piece switches squares

