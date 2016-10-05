

// create the game state:

var grid = [];

var createGrid = function() {
  for (var i = 0; i < 12; i++) {
    grid[i] =[];
    for (var j = 0; j < 18; j++) {
      grid[i][j] = { x: (j * 50), y: (i * 50)};
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

});


