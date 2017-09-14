

//define your state
var row1 = ["","",""];
var row2 = ["","",""];
var row3 = ["","",""];

var ticTacToe = [
    row1,
    row2,
    row3
]; //array

var isPlayerXTurn = true; // can also do it later so that turn is up to their guess


// var input =prompt("Guess a number to determine if you're X or O");

 function valueAtPosition(rowIndex, columnIndex) {
   //row is a number between 0 and 2
   //column is a number betwen 0 and 2

   var row = ticTacToe[rowIndex];
   var value = row[columnIndex];
   return value;

  }

// var ticTacToeBoard= [row1, row2, row3];
//   ticTacToeBoard.toString();


  function printBoard() {
    console.log(ticTacToe[0]);
    console.log(ticTacToe[1]);
    console.log(ticTacToe[2]);
    console.log("**************");
}

function setValuePosition(rowIndex, columnIndex) {
  if(isPlayerXTurn) {
    ticTacToe[rowIndex][columnIndex] = "X";
  } else {
    ticTacToe[rowIndex][columnIndex]= "O";
  }
  printBoard();
  isPlayerXTurn =!isPlayerXTurn;

}

function userInput () {

  var chooseRow = prompt("Choose a row. Number under 3.");
  var chooseColumn =prompt("Choose a column. Number under 3.");

    if ((valueAtPosition(chooseRow, chooseColumn)) == "") {
       setValuePosition(chooseRow, chooseColumn);
    } else {
      alert("Invald choice, silly!");
      setValuePosition(chooseRow, chooseColumn);
    }
}


function hasSomeoneWon() {
  var someoneWon = false;
  var winConditions = [
    valueAtPosition(0,0) + valueAtPosition(0,1) + valueAtPosition(0,2), //row1
    valueAtPosition(1,0) + valueAtPosition(1,1) + valueAtPosition(1,2), //row2
    valueAtPosition(2,0) + valueAtPosition(2,1) + valueAtPosition(2,2), //row3

    valueAtPosition(0,0) + valueAtPosition(1,0) + valueAtPosition(2,0), //col1
    valueAtPosition(0,1) + valueAtPosition(1,1) + valueAtPosition(2,1), //col2
    valueAtPosition(0,2) + valueAtPosition(1,2) + valueAtPosition(2,2), //col3

    valueAtPosition(0,0) + valueAtPosition(1,1) + valueAtPosition(2,2), //diag1
    valueAtPosition(0,2) + valueAtPosition(1,1) + valueAtPosition(2,0), //diag2
  ];
for (var i=0; i<8; i++) {

    if(winConditions[i] == "XXX" || winConditions[i] == "OOO") {
      return true
    }
  }

  return false;
}

while (!hasSomeoneWon())  {
  userInput();
}

var victor = "";
if (isPlayerXTurn) {
  victor = "O";
} else {
  victor = "X";
}

alert(victor + "Won!");

// console.log(ticTacToeBoard);
// setValuePosition(0,0);
// setValuePosition(1,0);
// setValuePosition(2,0);
// setValuePosition(2,1);
