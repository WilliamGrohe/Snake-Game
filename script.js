let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
	x: 8 * box,
	y: 8 * box
}
let direcao = "direita";

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

function iniciarJogo(){
	criarBG();
	criarCobrinha();

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if (direcao == "direita") snakeX += box;
	if (direcao == "esquerda") snakeX -= box;
	if (direcao == "cima") snakeY -= box;
	if (direcao == "baixo") snakeY += box;

	//elimina a "bunda" da cobra para após acrescentar a frente a "cabeça"
	snake.pop();

	let novaCabeca = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(novaCabeca);
}

let jogo = setInterval(iniciarJogo, 100);
