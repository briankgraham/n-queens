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
  var solution;
  if(n === 0) {
    return [];
  }  

  var findSolution = function(startCol) {
    // debugger;
    if(startCol === n) {
      return temp.rows();
    }
    //Creat new board object of nxn and assign it to temp variable
    var temp = new Board({'n':n});
    //Toggle piece at start row & columns which starts at index 0, 0
    temp.togglePiece(0, startCol);
    //Iterate through the remainder of the board starting at row at index 1
    for(var row = 1; row < n; row++) {
      //Iterate through the each column of each row
      for (var col = 0; col < n; col++) {
        //Change the value of cell 1,0 from 0 to 1 or to having a queen
        temp.togglePiece(row, col);
        //If this specific row, col cell has a queens conflict 
        console.log('row index = ' + row, 'col index = ' + col, 'row array = ' + temp.rows()[row], 'n = ' + n, 'startCol = ' + startCol)
        console.log('Queens Conflict : ' + temp.hasAnyQueenConflictsOn(row, col))
        if (temp.hasAnyQueenConflictsOn(row, col)) {
          //Revert the value of cell at index row,col to 0 or to have no queen
          temp.togglePiece(row,col);
        } 
      }
      console.log('row index = ' + row, 'row array = ' + temp.rows()[row], 'n = ' + n, 'startCol = ' + startCol)
      //Check if the current row does not have the value 1
      if(temp.rows()[row].indexOf(1) === -1 && (startCol + 1) < n) {
        //Recursively run the findSolution function with an incresed start column
        findSolution(startCol + 1);
      }
    }
    return temp.rows();
  };
  solution = findSolution(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

window.findNQueensSolution(8);

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = []; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


