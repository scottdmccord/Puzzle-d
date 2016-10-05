document.addEventListener("DOMContentLoaded", function(event) {
console.log("Puzzle-d!");
});

// create the game state:

var grid = [];

var createGrid = function() {
  for (var i = 0; i <= WidthOfBoard; i += 50) {
    for (var j = 0; j <= heightOfBoard; j += 50) {
      grid[i][j] = {
        x: i;
        y: j;
      }
    }
  }
}
