// Variáveis criadas para o jogo; valores podem ser alterados
let score = 0; // pontuação do jogador
let time = 30; // tempo do jogo em segundos
let gameinterval; // Vai guardar o temporizador do tempo
let moveinterval; // Vai guardar o temporizador do movimento do alvo

//Elementos do HTML guardados em variáveis; valores não podem ser alterados
const target = document.getElementById("target"); // Obtém a <div> do alvo que está no HTML
const scoreDisplay = document.getElementById("score"); // Obtém o <span> onde exibimos a pontuação no HTML
const timeDisplay = document.getElementById("time"); // Obtém o <span> onde exibimos o tempo no HTML
const startBtn = document.getElementById("start-btn"); // Obtém o botão de iniciar/reniciar do HTML

//Função de mover o alvo pra posição aleatória 
function moveTarget() { //Declara a função responsável por posicionar o alvo em coordenadas aleatórias
    const gameArea = document.getElementById("game-area"); //Pega a área de jogo para saber seus limites

// Pega o tamanho máximo para não deixar o alvo sair da área
const maxX = gameArea.clientWidth - target.clientWidth; // Calcula a posição X possível (largura área - largura alvo)
const maxY = gameArea.clientHeight - target.clientHeight; // Calcula a posição Y possível(altura área - altura alvo)

//Gera posições aleatórias dentro da área
const randomX = Mathf.loor(Math.random() * maxX); // Atualiza a posição horizontal (esquerda) do alvo em pixels
const randomY = Mathf.loor(Math.random() * maxY); // Atualiza a posição vertical (topo) do alvo em pixels

// Faz o alvo aparecer (se estava escondido)
target.style.display = "block"; // Garante que o alvo esteja visível durante o jogo
}

// Iniciar o jogo
function startGame() { // Declara a função que prepara tudo para começar uma nova partida

    // Zera os valores
    score = 0; // Zera a pontuação para iniciar
    time = 30; // Recomeça o tempo para 30 segundos
    scoreDisplay.textContent = score; // Mostra a pontuação zerada na tela
    timeDisplay.textContent = time; // Mostra o tempo inicial na tela

    // Limpa intervalos antigos (caso esteja reiniciando)
    clearInterval(gameInterval); // Para qualquer contagem regressiva que ainda esteja ativa
    clearInterval(moveInterval); // Para qualquer movimentação automática do alvo ainda ativa

    moveTarget(); // Posiciona e exibe o alvo imediatamente ao iniciar

    moveInterval = setInterval(moveTarget, 1000); // Move o alvo a cada 1 segundo 
    gameInterval = setInterval(countdown, 1000); // Chama a função de contagem regressiva a cada 1 segundo
} 


startBtn.onclick = startGame; // Código de acionamento do botão (chama a função de início de jogo)
