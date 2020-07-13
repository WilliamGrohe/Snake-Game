let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
	x: 8 * box,
	y: 8 * box
}
let direcao = "direita";
let comida = [];
comida = {
	x: Math.floor(Math.random() * 15 + 1) * box, 
	y: Math.floor(Math.random() * 15 + 1) * box
}




function criarBG(){
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
	for (i=0; i<snake.length; i++) {
		context.fillStyle = "green";
		context.fillRect(snake[i].x, snake[i].y, box, box);

	}
}

//criando a comida
function criarComida() {
	context.fillStyle = "red";
	context.fillRect(comida.x, comida.y, box, box);
}


//recupera o evento de clique da tecla
document.addEventListener('keydown', update);
function update(evento){
	if (evento.keyCode == 37 && direcao != "direita") { direcao = "esquerda"};
	if (evento.keyCode == 38 && direcao != "baixo") { direcao = "cima"};
	if (evento.keyCode == 39 && direcao != "esquerda") { direcao = "direita"};
	if (evento.keyCode == 40 && direcao != "cima") { direcao = "baixo"};
}



function iniciarJogo(){
	//criar o limite do campo para ao cruzar, resurgir do lado oposto
	if (snake[0].x > 15 * box && direcao == "direita" ) {snake[0].x = -1};
	if (snake[0].x < 0 && direcao == "esquerda" )	    {snake[0].x = 16 * box};
	if (snake[0].y > 15 * box && direcao == "baixo" )   {snake[0].y = -1};
	if (snake[0].y < 0 && direcao == "cima" )		    {snake[0].y = 16 * box};


	criarBG();
	criarCobrinha();
	criarComida();

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if (direcao == "direita") snakeX += box;
	if (direcao == "esquerda") snakeX -= box;
	if (direcao == "cima") snakeY -= box;
	if (direcao == "baixo") snakeY += box;


	if (snakeX != comida.x || snakeY != comida.y){
		//elimina a "bunda" da cobra para após acrescentar a frente a "cabeça"
		snake.pop();
	} else {
		comida.x = Math.floor(Math.random() * 15 + 1) * box;
		comida.y = Math.floor(Math.random() * 15 + 1) * box;
	}

	
	//cria a cabeca
	let novaCabeca = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo, 100);
