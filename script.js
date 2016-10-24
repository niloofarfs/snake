//document.getElementById("34").style.backgroundColor="red";
//var snake[0]= "44";
var interval;
var gameOn= true;
var direction;
var cntDirection;
var snake=[34,24,14];
var a;
var mouse;
for(a=0; a<snake.length; a++){
	document.getElementById(snake[a]).style.backgroundColor="red";
}
createMouse();

//interval= setInterval(move, 1000, 40);

function createMouse(){
	var rnd= Math.round(Math.random()*100);
	while(rnd == 100)
		rnd =rnd= Math.round(Math.random()*100);
	var i;
	for(i=0;i< snake.length; i++){
		if(snake[i] == rnd){
			rnd= Math.round(Math.random()*100);
			while(rnd == 100)
				rnd= Math.round(Math.random()*100);
			i= -1;
		}
	}
	if(rnd < 10)
		rnd= "0"+ rnd;
	mouse = rnd;
	document.getElementById(mouse).style.backgroundColor= "blue";
}

function makeRed(id){
	if(id<10)
		id= "0" + id;//fix this
	document.getElementById(id).style.backgroundColor="red";
}

function makeYellow(id){
	if(id<10)
		id= "0" + id;//fix this
	document.getElementById(id).style.backgroundColor="yellow";
}

function hitSelf(head){
	var rtn;
	var i;
	for(i=0; i<snake.length; i++){
		if(snake[i] == head){
			return true;
		}
		else{
			rtn= false;
			continue;
		}
	}
	return rtn;
}

function keydown(e){
	if(gameOn){
		event = window.event ? window.event : e;
		if(event.keyCode == 37 ||event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40 ){
			if(event.keyCode != direction && event.keyCode != cntDirection){
				move(event.keyCode);
				clearInterval(interval);
				if(gameOn)
					interval= setInterval(move, 500, event.keyCode);
			}
		}
	}
}


function move(key){
    switch(key){
    	case 37: //left
    	
			direction= 37;
			cntDirection = 39;
			
    	    if(snake[0] % 10 == 0 || hitSelf(snake[0]-1)){
    			clearInterval(interval);
    			gameOn = false;
    			alert('Game Over');
    	    }
    	    else if(snake[0]-1 == mouse){
    	    	console.log('catch');
    	    	snake.unshift(parseInt(snake[0])-1);
				makeRed(snake[0]);
				createMouse();
    	    }
    	    else{
    	    	makeYellow(snake[snake.length-1]);  	
    	    	snake.unshift(parseInt(snake[0])-1);
    	    	snake.pop();
				makeRed(snake[0]);

				direction= 37;
				cntDirection = 39;
    		}
    		break;
    		
    	case 38: //up
    	
    		direction= 38;
			cntDirection = 40;
			
    	    if(snake[0] < 10 || hitSelf(snake[0]-10) ){
    			clearInterval(interval);
    			gameOn = false;
    			alert('Game Over');
    	    }
    	    else if(snake[0]-10 == mouse){
    	    	console.log('catch');
    	    	snake.unshift(parseInt(snake[0])-10);
				makeRed(snake[0]);
				createMouse();
    	    }
    	    else{
    	    	makeYellow(snake[snake.length-1]);  	
    	    	snake.unshift(parseInt(snake[0])-10);
    	    	snake.pop();
				makeRed(snake[0]);
    		}
    		break;
    		
    	case 39: //right
    	
			direction= 39;
			cntDirection = 37;
			
    	    if(snake[0] % 10 == 9 || hitSelf(snake[0]+ 1) ){
    			clearInterval(interval);
    			gameOn = false;
    			alert('Game Over');
    	    }
    	    else if(snake[0]+1 == mouse){
    	    	console.log('catch');
    	    	snake.unshift(parseInt(snake[0])+1);
				makeRed(snake[0]);
				createMouse();
    	    }
    	    else{
    	    	makeYellow(snake[snake.length-1]);  	
    	    	snake.unshift(parseInt(snake[0]) +1);
    	    	snake.pop();
				makeRed(snake[0]);
    		}
    		break;
    		
    	case 40: //down
    	
   			direction= 40;
			cntDirection= 38;
			
    	    if(parseInt(snake[0]) > 89 || hitSelf(snake[0]+ 10) ){
    			clearInterval(interval);
    			gameOn = false;
    			alert('Game Over');
    	    }
			else if(snake[0]+10 == mouse){
    	    	console.log('catch');
    	    	snake.unshift(parseInt(snake[0])+10);
				makeRed(snake[0]);
				createMouse();
    	    }
    	    else{	
    	    	makeYellow(snake[snake.length-1]);  	
    	    	snake.unshift(parseInt(snake[0]) +10);
    	    	snake.pop();
				makeRed(snake[0]);
    		}
    		break;
    }
}

