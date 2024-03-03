let canvas = document.getElementById('canvas');
let container = canvas.getContext("2d");

 container.fillStyle='#8b8b8b'
 let jogador1 = {
     px: 100,
     py:160,
     tx:30,
     ty:100,
     dir:0
      }


 let jogador2 ={
     px:900,
     py:160,
     tx:30,
     ty:100
 }

 let ball={
     px:960/2-15,
     py:420/2-15,
     tx:30,
     ty:30,
	 dir:10
 }

container.font="20px Arial"
 let pts1 = 0;
 let pts2 = 0;




 document.addEventListener("keydown",function(e){
	 if (e.keyCode === 38){
		 jogador1.dir = -8
	 }else if (e.keyCode===40){
		 jogador1.dir = 8
	 }
 })

 document.addEventListener("keyup",function(e){
  if (e.keyCode === 38){
    jogador1.dir = 0
  }else if (e.keyCode===40){
    jogador1.dir = 0
  }
 })


 function Move_player1(){
   jogador1.py += jogador1.dir
if(jogador1.py<0){
  jogador1.py = 0
}else if (jogador1.py>320){
   jogador1.py = 320
}

 }


 function Move_Ball(){
    ball.px += ball.dir

	 if (ball.px > 890){
	 ball.dir*=-1
 }else if(ball.px <110){
	 ball.dir *= -1
 }
 }



 function Draw(){
  container.fillRect(jogador1.px,jogador1.py,jogador1.tx,jogador1.ty)
  container.fillRect(jogador2.px,jogador2.py,jogador2.tx,jogador2.ty)
  container.fillRect(ball.px,ball.py,ball.tx,ball.ty)
  container.fillText("Score 1: " + pts1, 200,50)
  container.fillText("Score 2: " + pts2, 750,50)
 }

function Main(){
    container.clearRect(0,0,1020,420)
    Draw()
    console.log("estou vendo");
    Move_Ball()
    Move_player1()
}



 setInterval(Main,20)