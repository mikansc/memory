let listaDeCards = [
  {
    nome: "fries",
    img: "images/fries.png",
  },
  {
    nome: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    nome: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    nome: "pizza",
    img: "images/pizza.png",
  },
  {
    nome: "milkshake",
    img: "images/milkshake.png",
  },
  {
    nome: "hotdog",
    img: "images/hotdog.png",
  },
  {
    nome: "fries",
    img: "images/fries.png",
  },
  {
    nome: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    nome: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    nome: "pizza",
    img: "images/pizza.png",
  },
  {
    nome: "milkshake",
    img: "images/milkshake.png",
  },
  {
    nome: "hotdog",
    img: "images/hotdog.png",
  },
];

listaDeCards.sort(function aleatorio() {
  return 0.5 - Math.random(); // 0.000 a 0.9999
});

function criarElementoImagem(posicao) {
  let card = document.createElement("img");
  card.setAttribute("src", "images/back.png");
  card.setAttribute("data-posicao", posicao);
  card.addEventListener("click", virarImagem);
  return card;
}

function criarTabuleiro() {
  let grid = document.querySelector(".grid");

  // listaDeCards.forEach(function (objetoCard) {});

  for (let controle = 0; controle < listaDeCards.length; controle++) {
    let cardImagem = criarElementoImagem(controle);
    grid.appendChild(cardImagem);
  }
}

criarTabuleiro();

// --------------

let cardsViradosNome = [];
let cardsViradosNumero = [];

function virarImagem() {
  let posicao = this.getAttribute("data-posicao");

  this.setAttribute("src", listaDeCards[posicao].img);
  cardsViradosNome.push(listaDeCards[posicao].nome);
  cardsViradosNumero.push(posicao);

  // se já virou 2 cards
  if (cardsViradosNome.length === 2) {
    // verifica se são iguais
    setTimeout(checarIgualdade, 300);
  }
}

let cardsDescobertos = [];

function checarIgualdade() {
  let cards = document.querySelectorAll("img");

  let posicaoCardEscolhidoUm = cardsViradosNumero[0];
  let posicaoCardEscolhidoDois = cardsViradosNumero[1];

  let nomePrimeiraImagemEscolhida = cardsViradosNome[0];
  let nomeSegundaImagemEscolhida = cardsViradosNome[1];

  if (posicaoCardEscolhidoUm === posicaoCardEscolhidoDois) {
    cards[posicaoCardEscolhidoUm].setAttribute("src", "images/back.png");
    cards[posicaoCardEscolhidoDois].setAttribute("src", "images/back.png");
    alert("Você escolheu a mesma imagem duas vezes!");
  } else if (nomePrimeiraImagemEscolhida === nomeSegundaImagemEscolhida) {
    alert("Você encontrou um par!");
    cards[posicaoCardEscolhidoUm].removeEventListener("click", virarImagem);
    cards[posicaoCardEscolhidoDois].removeEventListener("click", virarImagem);
    cardsDescobertos.push(cardsViradosNome);
  } else {
    cards[posicaoCardEscolhidoUm].setAttribute("src", "images/back.png");
    cards[posicaoCardEscolhidoDois].setAttribute("src", "images/back.png");
    alert("Tente novamente!");
  }

  cardsViradosNome = [];
  cardsViradosNumero = [];

  if (cardsDescobertos.length === listaDeCards.length / 2) {
    alert("Parabéns, você encontrou todos os pares!");
  }
}
