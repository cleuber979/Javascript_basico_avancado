let canvas = document.getElementById('canvas');
let container = canvas.getContext("2d");

 container.fillStyle='#8b8b8b'
 let jogador1 = {
     px: 100,
     py:100,
     tx:30,
     ty:200
      }
 

 let jogador2 ={
     px:900,
     py:100,
     tx:30,
     ty:200
 }
 
 let ball={
     px:960/2-15,
     py:420/2-15,
     tx:30,
     ty:30
 }


 let pts1 = 0;
 let pts2 = 0;
 let Score = container.fillText("Score 1: " + pts1, 200,50);
 let Score = container.fillText("Score 2: " + pts, 950,50);
 
 function Draw(){
     
 };

