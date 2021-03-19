'use strict'

let squares = document.querySelectorAll('.tac');
let gameReset = document.querySelector('.reset');
let x = document.querySelector('.letter-x');
let o = document.querySelector('.letter-o');
let emptySquares;
let letter1 = 'x';
let letter2 = 'o';
let xScore = 0;
let oScore = 0;
x.innerHTML = xScore;
o.innerHTML = oScore;
let clicked = false;
let val = 0;
let num;

for (let i = 0; i < squares.length; i++) {
	squares[i].innerHTML = "";
	squares[i].addEventListener("click", function(){
    clicked = !clicked;
    if (clicked) {
      play('x', this);
    } else {
      play('o', this);
    }
	})
}

// for (let i = 0; i < squares.length; i++) {
//   squares[i].innerHTML = "";
// 	squares[i].addEventListener("click", function(){
//     val++;
//     clicked = !clicked;
//     let res = play('x', this);
//     if(res === 'x'){
//       return;
//     }
//     let res1 = autoMode('o');
//     if (res1 === 'o'){
//       return;
//     }
// 	})
// }

function play(character, that){
  that.innerHTML = character;
  that.style.pointerEvents = 'none';
  that.style.readOnly = true;
  checkMatch(character);
  if (that.style.background == 'blue') {
    end();
    if (character === 'x'){
      xScore++;
      x.innerHTML = xScore;
    } else if (character === 'o') {
      oScore++;
      o.innerHTML = oScore;
    }
    return character;
  }
}

function autoMode(char){
  emptySquares = [];
  for (let i = 0; i < squares.length; i++){
    if (squares[i].innerHTML == ''){
      emptySquares.push(i);
    }
  }
  num = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  val++;
  if (val == 10){
    return;
  }
  let res2 = play(char, squares[num]);
  if (res2 === char) {
    return char;
  }
}

// function checkMatch(letter){
//   if (squares[0].innerHTML === letter && squares[1].innerHTML === letter && squares[2].innerHTML === letter) {
//     squares[0].style.background = "blue";
//     squares[0].style.color = "white";
//     squares[1].style.background = "blue";
//     squares[1].style.color = "white";
//     squares[2].style.background = "blue";
//     squares[2].style.color = "white";
//   } else if (squares[3].innerHTML === letter && squares[4].innerHTML === letter && squares[5].innerHTML === letter) {
//     squares[3].style.background = "blue";
//     squares[3].style.color = "white";
//     squares[4].style.background = "blue";
//     squares[4].style.color = "white";
//     squares[5].style.background = "blue";
//     squares[5].style.color = "white";
//   } else if (squares[6].innerHTML === letter && squares[7].innerHTML === letter && squares[8].innerHTML === letter) {
//     squares[6].style.background = "blue";
//     squares[6].style.color = "white";
//     squares[7].style.background = "blue";
//     squares[7].style.color = "white";
//     squares[8].style.background = "blue";
//     squares[8].style.color = "white";
//   } else if (squares[0].innerHTML === letter && squares[3].innerHTML === letter && squares[6].innerHTML === letter) {
//     squares[0].style.background = "blue";
//     squares[0].style.color = "white";
//     squares[3].style.background = "blue";
//     squares[3].style.color = "white";
//     squares[6].style.background = "blue";
//     squares[6].style.color = "white";
//   } else if (squares[1].innerHTML === letter && squares[4].innerHTML === letter && squares[7].innerHTML === letter) {
//     squares[1].style.background = "blue";
//     squares[1].style.color = "white";
//     squares[4].style.background = "blue";
//     squares[4].style.color = "white";
//     squares[7].style.background = "blue";
//     squares[7].style.color = "white";
//   } else if (squares[2].innerHTML === letter && squares[5].innerHTML === letter && squares[8].innerHTML === letter) {
//     squares[2].style.background = "blue";
//     squares[2].style.color = "white";
//     squares[5].style.background = "blue";
//     squares[5].style.color = "white";
//     squares[8].style.background = "blue";
//     squares[8].style.color = "white";
//   } else if (squares[0].innerHTML === letter && squares[4].innerHTML === letter && squares[8].innerHTML === letter) {
//     squares[0].style.background = "blue";
//     squares[0].style.color = "white";
//     squares[4].style.background = "blue";
//     squares[4].style.color = "white";
//     squares[8].style.background = "blue";
//     squares[8].style.color = "white";
//   } else if (squares[2].innerHTML === letter && squares[4].innerHTML === letter && squares[6].innerHTML === letter) {
//     squares[2].style.background = "blue";
//     squares[2].style.color = "white";
//     squares[4].style.background = "blue";
//     squares[4].style.color = "white";
//     squares[6].style.background = "blue";
//     squares[6].style.color = "white";
//   }
// }

function checkMatch(letter){
  let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < win.length; i++) {
    let wins = win[i];
    if(squares[wins[0]].innerHTML === letter && squares[wins[1]].innerHTML === letter && squares[wins[2]].innerHTML === letter){
      squares[wins[0]].style.background = "blue";
      squares[wins[0]].style.color = "white";
      squares[wins[1]].style.background = "blue";
      squares[wins[1]].style.color = "white";
      squares[wins[2]].style.background = "blue";
      squares[wins[2]].style.color = "white";
    }
  }
}


function reset(){
	for (let i = 0; i < squares.length; i++){
		squares[i].innerHTML = '';
		squares[i].style.pointerEvents = '';
    squares[i].style.backgroundColor = '';
    squares[i].style.readOnly = '';
    squares[i].style.color = 'green';
	}
  clicked = false;
  val = 0;
}

function end(){
	for (let i = 0; i < squares.length; i++) {
    squares[i].style.pointerEvents = 'none';
    squares[i].readOnly = true;
	}
}
