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
