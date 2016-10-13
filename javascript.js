// Project Name: Puzzled
// Author: Scott McCord

// A blank array that will still store objects that have an x and y coordinate;
var grid = [];

// A turn variable that enables the click and swap function;
var turn = 0;

// images mostly come from http://wallpapersafari.com/fantasy-wallpaper-hd/
// and icloudpicture.com
// and wallpapercave.com
// and wallpaperspider.com
// and hebus.org

var urls = [
  'url("http://i.imgur.com/B8xsff4.jpg?4")',
  'url("http://i.imgur.com/b5gcmnR.jpg?2")',
  'url(http://i.imgur.com/CWvP6zh.jpg?3)',
  'url("http://i.imgur.com/wxiGxy4.jpg?2")',
  'url("http://i.imgur.com/mGOb37s.jpg?2")',
  'url("http://i.imgur.com/v1PL2vP.jpg?2")',
  'url("http://i.imgur.com/7yaWUPc.jpg?2")',
  'url("http://i.imgur.com/NABahjE.jpg?2")',
  'url("http://i.imgur.com/m5JWcJs.jpg?2")',
  'url("http://i.imgur.com/HWs6Mym.jpg?2")',
  'url(http://i.imgur.com/WTfFodP.jpg?1)',
  'url(http://i.imgur.com/oebBjiq.jpg?1)',
  'url(http://i.imgur.com/HHNJgI4.jpg?1)',
  'url(http://i.imgur.com/78E3bq8.jpg?1)',
  'url(http://i.imgur.com/j9ZGSEo.jpg?1)',
  'url(http://i.imgur.com/4tHIBRd.jpg?1)',
  'url(http://i.imgur.com/8DdNP7D.jpg?1)',
  'url(http://i.imgur.com/N68ZBQq.jpg?1)',
  'url(http://i.imgur.com/tCsEvH1.jpg?1)',
  'url(http://i.imgur.com/t0UZaxh.jpg?1)',
  'url(http://i.imgur.com/ylZqPy0.jpg?1)',
  'url(http://i.imgur.com/XWEwK0t.jpg?1)',
  'url(http://i.imgur.com/YfvBWpt.jpg?1)',
  'url(http://i.imgur.com/2fAB4Dd.jpg?1)',
  'url(http://i.imgur.com/bPE5EGG.jpg?1)',
  'url(http://i.imgur.com/lkDTmWU.jpg?1)',
  'url(http://i.imgur.com/XvW5rbG.jpg?1)',
  'url(http://i.imgur.com/QpNUSmu.jpg?1)',
  'url(http://i.imgur.com/x5hvRpM.jpg?1)',
  'url(http://i.imgur.com/we5I01I.jpg?1)',
  'url(http://i.imgur.com/Oyulxw2.jpg?1)',
  'url(http://i.imgur.com/SvPUVD4.jpg?1)',
  'url(http://i.imgur.com/Cx4sIMa.jpg?1)',
  'url(http://i.imgur.com/gCyXIMp.jpg?1)',
  'url(http://i.imgur.com/3QO407x.jpg?1)',
  'url(http://i.imgur.com/iFPHLUy.jpg?1)',
  'url(http://i.imgur.com/lepW0fU.jpg?1)',
  'url(http://i.imgur.com/Wznote1.jpg?1)',
  'url(http://i.imgur.com/VReShs1.jpg?1)',
  'url(http://i.imgur.com/uWySC43.jpg?1)',
  'url(http://i.imgur.com/IgkwQ9j.jpg?1)',
  'url(http://i.imgur.com/PyqzPG3.jpg?1)',
  'url(http://i.imgur.com/MdVuE8P.jpg?2)',
  'url(http://i.imgur.com/Cs5bXz2.jpg?1)',
  'url(http://i.imgur.com/Gbbm7bg.jpg?1)',
  'url(http://i.imgur.com/kK5lz2s.jpg?1)',
  'url(http://i.imgur.com/dzj0cfV.jpg?1)',
  'url(http://i.imgur.com/A1QAFxL.jpg?1)',
  'url(http://i.imgur.com/fHBsrxi.jpg?1)',
  'url(http://i.imgur.com/6uw6kdc.jpg?1)',
  'url(http://i.imgur.com/CB0DiJ0.jpg?1)',
  'url(http://i.imgur.com/csQNW88.jpg?1)',
  'url(http://i.imgur.com/aBHrLnf.jpg?2)',
  'url(http://i.imgur.com/UT4ajg4.jpg?1)',
  'url(http://i.imgur.com/myj9KwV.jpg?1)',
  'url(http://i.imgur.com/pQiw6G2.jpg?1)',
  'url(http://i.imgur.com/8c6bicg.jpg?1)',
  'url(http://i.imgur.com/nmW0Ucz.jpg?1)',
  'url(http://i.imgur.com/4LFFRjt.jpg?1)',
  'url(http://i.imgur.com/9cR1z7L.jpg?1)',
  'url(http://i.imgur.com/e6b2N1s.jpg?1)',
  'url(http://i.imgur.com/UGtZFhY.jpg?1)',
  'url(http://i.imgur.com/HOJLRTO.jpg?1)',
  'url(http://i.imgur.com/Saq65n9.jpg?1)',
  'url(http://i.imgur.com/j7jAjSy.jpg?1)',
];

// randomly pulls an image from the urls array to display as the puzzle
var randomUrl = Math.floor(Math.round(Math.random() * (urls.length - 1)))

// USERNAME DISPLAY
// searches the browser window starting from the ? and then separates the string
// at each & sign. These strings are then put into an array and further split
// = sign.
var $data = window.location.search;
$data = $data.split('&');
var $username = $data[0].split('=');
// this calls the first form item submitted (username), which is the first item in the array.



// after DOM loads
$(function(event) {
console.log("Puzzle-d!");

// VARIABLES

// places all of the 'pieces' divs into an array, currentBoard.
var currentBoard = $('#piece').toArray();

// Dimensions of each board (depending on difficulty)
var easyHeight = 169;
var easyWidth = 451;
var mediumHeight = 84.5;
var mediumWidth = 225.5;
var hardHeight = 84.5;
var hardWidth = 112.75;
var expertHeight = 50.7;
var expertWidth = 56.375;

// Functions to load boards (identical functions, except for the
// piece count and the heights and widths).

// EASY PUZZLE
var createGridEasy = function() {
  // creates an array with 3 nested arrays
  for (var i = 0; i < 2; i++) {
    grid[i] =[];
    // creates 3 objects inside each nested array with an x coordinate
    // and a y coordinate
    for (var j = 0; j < 3; j++) {
      grid[i][j] = { x: (i * -easyWidth), y: (j * -easyHeight)};
    }
  }
}

// MEDIUM PUZZLE
var createGridMedium = function() {
  // creates an array with 4 nested arrays
  for (var i = 0; i < 4; i++) {
    grid[i] =[];
    for (var j = 0; j < 6; j++) {
      // creates 6 objects inside each nested array with an x coordinate
      // and a y coordinate
      grid[i][j] = { x: (i * -mediumWidth), y: (j * -mediumHeight)};
    }
  }
}

//HARD PUZZLE
var createGridHard = function() {
  // creates an array with 8 nested arrays
  for (var i = 0; i < 8; i++) {
    grid[i] =[];
    for (var j = 0; j < 6; j++) {
      // creates 6 objects inside each nested array with an x coordinate
      // and a y coordinate
      grid[i][j] = { x: (i * -hardWidth), y: (j * -hardHeight)};
    }
  }
}

//EXPERT PUZZLE
var createGridExpert = function() {
  // creates an array with 16 nested arrays
  for (var i = 0; i < 16; i++) {
    grid[i] =[];
    for (var j = 0; j < 10; j++) {
      // creates 10 objects inside each nested array with an x coordinate
      // and a y coordinate
      grid[i][j] = { x: (i * -expertWidth), y: (j * -expertHeight)};
    }
  }
}

// Function to create the individual divs that will populate the game board.

//EASY
var $container = $('.container');
var createBoardEasy = function() {
  var counter = 0;
  // the first for loop circles through the number of nested arrays
  for (var a = 0; a < grid.length; a++) {
    // the second for loop circles through the number of objects in each nested array
       for(var b  = 0; b < grid[a].length; b++) {
        // create a div called block
         var block = $('<div>');
         // add the class of piece to each block
         block.addClass('piece');
         // add an id of piece# to each block, the first block will be piece0, etc.
         block.attr('id' , 'piece' + counter);
         // style the block and add the background image
         block.css({
           'background-image' : urls[randomUrl],
           // assign coordinates to each image, based off of the objects stored in
           // the grid array
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           // give each div its proper height and width
           'height' : easyHeight,
           'width' : easyWidth
          })
         // append the div to the container and increase counter by one
         $container.append(block);
         counter++;
      }
  }
  // if function is run once, it can't be run again
  this.disabled = true;
}

//MEDIUM
var $container = $('.container');
var createBoardMedium = function() {
  var counter = 0;
  // the first for loop circles through the number of nested arrays
  for (var a = 0; a < grid.length; a++) {
       // the second for loop circles through the number of objects in each nested array
       for(var b  = 0; b < grid[a].length; b++) {
        // create a div called block
         var block = $('<div>');
         // add the class of piece to each block
         block.addClass('piece');
         // add an id of piece# to each block, the first block will be piece0, etc.
         block.attr('id' , 'piece' + counter);
         // style the block and add the background image
         block.css({
           'background-image' : urls[randomUrl],
           // assign coordinates to each image, based off of the objects stored in
           // the grid array
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           // give each div its proper height and width
           'height' : mediumHeight,
           'width' : mediumWidth
          })
         // append the div to the container and increase counter by one
         $container.append(block);
         counter++;
      }
  }
  // if function is run once, it can't be run again
  this.disabled = true;
}

//HARD
var $container = $('.container');
var createBoardHard = function() {
  var counter = 0;
  // the first for loop circles through the number of nested arrays
  for (var a = 0; a < grid.length; a++) {
        // the second for loop circles through the number of objects in each nested array
       for(var b  = 0; b < grid[a].length; b++) {
        // create a div called block
         var block = $('<div>');
         // add the class of piece to each block
         block.addClass('piece');
         // add an id of piece# to each block, the first block will be piece0, etc.
         block.attr('id' , 'piece' + counter);
         // style the block and add the background image
         block.css({
           'background-image' : urls[randomUrl],
           // assign coordinates to each image, based off of the objects stored in
           // the grid array
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           // give each div its proper height and width
           'height' : hardHeight,
           'width' : hardWidth
          })
         // append the div to the container and increase counter by one
         $container.append(block);
         counter++;
      }
  }
  // if function is run once, it can't be run again
  this.disabled = true;
}


//EXPERT
var $container = $('.container');
var createBoardExpert = function() {
  var counter = 0;
  // the first for loop circles through the number of nested arrays
  for (var a = 0; a < grid.length; a++) {
        // the second for loop circles through the number of objects in each nested array
       for(var b  = 0; b < grid[a].length; b++) {
        // create a div called block
         var block = $('<div>');
         // add the class of piece to each block
         block.addClass('piece');
         // add an id of piece# to each block, the first block will be piece0, etc.
         block.attr('id' , 'piece' + counter);
         // style the block and add the background image
         block.css({
           'background-image' : urls[randomUrl],
           // assign coordinates to each image, based off of the objects stored in
           // the grid array
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           // give each div its proper height and width
           'height' : expertHeight,
           'width' : expertWidth
          })
         // append the div to the container and increase counter by one
         $container.append(block);
         counter++;
      }
  }
  // if function is run once, it can't be run again
  this.disabled = true;
}


// Function that shuffles the the puzzle pieces.
var startPuzzle = function() {
  boxes = $('.piece');
  // iterates through each piece in the puzzle
  for(var i = 0; i < boxes.length; i++) {
    // adds the class "clickPiece" to each div (to be useful in the swapTiles function)
    boxes.addClass('clickPiece');
    // shuffles the pieces (found this on stack overflow)
    // http://stackoverflow.com/questions/18483241/random-div-order-on-page-load
    var target = Math.floor(Math.random() * boxes.length - 1) + 1;
    var target2 = Math.floor(Math.random() * boxes.length -1) + 1;
    boxes.eq(target).before(boxes.eq(target2));
  }
  // appends newly shuffled pieces into the currentBoard array (this
  // was meant to be used for the winning condition, no longer necessary)
  currentBoard = $('.piece').toArray();
  // can only shuffle pieces once
  this.disabled = true;
}


// On first click collect piece ID, on second cick switch previous piece with current piece.
function swapTiles() {
  $('.clickPiece').on('click', function() {
  console.log('test!');
  // the first click
  if(turn === 0) {
    console.log('turn 0');
    // assign the div to the variable divA
    divA = this;
    // increase turn counter
    turn++;
    // the second click
    } else if(turn === 1) {
      // assign the second clicked div to variable divB
      divB = this;
      // create a holder variable that holds divB's backgroundPosition
      holder = this.style.backgroundPosition;
      // create another holder variable that holds divB's id
      holderId = this.id;
      console.log('turn 1');
      // give divB divA's backgroundPosition
      divB.style.backgroundPosition = divA.style.backgroundPosition;
      // give divA divB's backgroundPosition
      divA.style.backgroundPosition = holder;
      // give divB divA's id
      divB.id = divA.id;
      // give divA divB's id
      divA.id = holderId;
      // checks to see if you've put the puzzle back together
      checkWin();
      // reset counter to 0
      turn--;
   }
  })
}

// function to check if all of the puzzle pieces are in the correct order on the board.
function checkWin() {
  // define a win variable, set to true
  var win = true;
  // iterate through the number of pieces on the board
  for (var i = 0; i < currentBoard.length; i++) {
    // check to see if each div's id is equal to it's place on the board
    // i.e. is the div with the id piece0 on the first tile on the board?
    // if not all divs are matched to their position, win = false
    if (currentBoard[i].id != ('piece' + i)) {
      win = false;
    }
  }
  console.log(win);
  if(win === true) {
    // if all divs are matched to their position, trigger the win alert
    // after waiting for 1/4th of a second (so the puzzle finishes)
    setTimeout(function() {
      clearInterval(timer);
      alert('You win! Click "New Puzzle" to try again')}, 1250);
  }
}


// Timer function
// learned from stackoverflow:
// http://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript

var startTimer = function(){
  var sec = 0;

  var pad = function(val) {
    return val > 9 ? val : "0" + val;
  }

  timer = setInterval(function () {
    $('#seconds').html(pad(++sec % 60));
    $('#minutes').html(pad(parseInt(sec / 60, 10)));
  }, 1000);

  setTimeout(function() {
    clearInterval(timer);
  }, 9900000);
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

// DISABLE LOAD BUTTONS AFTER PRESSED
$('.load').on('click', function() {
  $('.load').prop('disabled', true);
});


// Generates puzzle
$('.generatePuzzle').on('click', startPuzzle);
$('.generatePuzzle').on('click', swapTiles);
$('.generatePuzzle').on('click', startTimer);



// Logins in the username in the top righthand corner
$('.user-information').text("Good luck, " + $username[1] + "!");

// Re-loads website to generate to puzzle
$('.newPuzzle').on('click', function() {
  window.location.reload();
  });

// Modul popup to alert win
// Taken from JavaScript & jQuery guide by Jon Duckett, still not working.

// var modal = (function() {
//   var $window = $(window);
//   var $modal = $('<div class="modal" />');
//   var $content = $('<div class="modal-content">You won!</div>');
//   var $close = $('<button role="button" class="modal-close">close</button>');

//   $modal.append($content, $close);

//   $close.on('click', function(e){
//     e.preventDefault();
//     modal.close();
//   });

//   return {
//     center : function() {
//       var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
//       var left = Math.max($window.height() - $modal.outerWidth(), 0) / 2;
//       $modal.css({
//         top: top + $window.scrollTop(),
//         left: left + $window.scrollLeft()
//       });
//     },

//     open: function(settings) {
//       $content.empty().append(settings.content);

//       $modal.css({
//         width: settings.width || 'auto',
//         height: settings.height || 'auto'
//       }).appendTo('body');

//       modal.center();
//       $window.on('resize', modal.center);
//     },

//     close: function() {
//       $content.empty();
//       $modal.detach();
//       $(window).off('resize', modal.center);
//     }
//   };
// }());



});



