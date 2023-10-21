let turn = "X";
let gameOver = false;

let player_1 = document.getElementById("player-1").value;
let player_2 = document.getElementById("player-2").value;

let turn2 = player_1;
const changeTurn2 = ()=>{
  return turn2 === player_1?player_2:player_1;
}

let audio = new Audio("/Click2.mp3");
audio.oncanplaythrough = function(){
audio.play();
}

let audio2 = new Audio("/Win3.mp3");
audio2.oncanplaythrough = function(){
  audio2.play();
}

const changeTurn = ()=>{
  return turn === "X"?"O":"X";
}

const checkWin = ()=> {
  let boxtexts = document.getElementsByClassName('boxtext');
  let wins =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  wins.forEach(e =>{
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== '')){
      document.querySelector('.info2').innerText = boxtexts[e[0]].innerText +  " " + "Won"
      gameOver = true;
      audio2.play();
    }
  })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', ()=>{
    audio.play();
    if(boxtext.innerText === ''){
      boxtext.innerText = turn;
     turn = changeTurn();
      checkWin();
      if(!gameOver) {
        document.getElementsByClassName("info")[0].innerText = turn + "'s" + " " + "Turn";
      } else if (gameOver) {
        document.getElementsByClassName("info")[0].innerText = "Game Over";
        turn = " ";
      }
    }
  })
})

reset.addEventListener('click', ()=> {
  let boxtext = document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(element => {
    element.innerText = "";
  });
  turn = "X";
  gameOver = false; 
  document.getElementsByClassName("info")[0].innerText = turn + "'s" + " " + "Turn";
  document.getElementsByClassName("info2")[0].innerText = " ";
})