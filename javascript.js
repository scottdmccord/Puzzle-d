document.addEventListener("DOMContentLoaded", function(event) {
console.log("Puzzle-d!");

});

// create the game state:

var grid = [];

var createGrid = function() {
  for (var i = 0; i < 5; i++) {
    grid[i] =[];
    for (var j = 0; j < 5; j++) {
      grid[i][j] = { x: (j * 50), y: (i * 50)}
      }
    }
  }

createGrid();

var $container = $('container');

var createBoard = function() {
  for(var i = 0; i < grid.length; i++) {
    var $piece = $('<div>');
    $piece.addClass('piece');
    $piece.css({
      'background': 'url('
    })
  }
}
