

// create the game state:

var grid = [];

var createGrid = function() {
  for (var i = 0; i < 16; i++) {
    grid[i] =[];
    for (var j = 0; j < 9; j++) {
      grid[i][j] = { x: (i * -100), y: (j * -100)};
      //ask matt why the pixel width and height needed to be negative
    }
  }
}

createGrid();

// after DOM loads
document.addEventListener("DOMContentLoaded", function(event) {
console.log("Puzzle-d!");

var $container = $('.container');
var createBoard = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var $block = $('<div>');
         $block.addClass('piece');
         $block.attr('id' , 'piece' + counter);
         $block.css({
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px'
          })
         $container.append($block);
         counter++;
      }
  }
}

createBoard();

var boxes = $('.piece');

var startPuzzle = function() {
  for(var i = 0; i < boxes.length; i++) {
    var target = Math.floor(Math.random() * boxes.length - 1) + 1;
    var target2 = Math.floor(Math.random() * boxes.length -1) + 1;
    boxes.eq(target).before(boxes.eq(target2));
  }
}

$('.generatePuzzle').on('click', startPuzzle);

var boxes = $('.piece');
var solvePuzzle = function() {
  for (var i = 0; i < boxes.length; i++) {
    $("#piece"+ i).insertAfter("#piece" + (i-1));
    // I got this to work by playing with +1 and -1. Need to understand why.
  }
}

$('.fixPuzzle').on('click', solvePuzzle);

});


