/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// 1. Create N size Board
// 2. Start at 0,0 --> toggle Rook (1)
// 3. Go to next column (or row, might be easier)
// 4. Check for rook conflicts
// 5. If there's a conflict, we increment row (column stays same)
// 6. If Row = length - 1 && we never found a spot, start over
// 7. If we found a spot, toggle it, increment Column, Row starts at 0
// 8. Repeat process, until Col = length - 1

window.findNRooksSolution = function(n) {
  var temp  = new Board({'n' : n});
  var solution;
  for(var row = 0; row < n; row++) {
    for(var col = 0; col < n; col++) {
      temp.togglePiece(row, col);
      if(temp.hasAnyRooksConflicts()) {
        temp.togglePiece(row,col);
      }
    }
  }
  solution = temp.rows();
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = n; //fixme 
  var solutionCount = 1;
  for (var i = solution; i > 0; i--) {
    solutionCount *= i;
  }
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution =[];
  var temp = new Board({'n':n});
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      if(i === 2 || i )
      temp.togglePiece(row, col);
      if (temp.hasAnyQueenConflictsOn(row, col)) {
        temp.togglePiece(row,col);
      } 
    }
  }
  for (var i = 0; i < n; i++) {
    solution.push(temp.attributes[i]);
  }
  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = []; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
