//DECLARANDO O ARRAY DE IMAGENS
let imagens = [
  "src/assets/carrossel/imagem0.jpg",
  "src/assets/carrossel/imagem1.jpg",
  "src/assets/carrossel/imagem2.jpg",
  "src/assets/carrossel/imagem3.jpg"
];

//DECLARANDO AS VARIAVEIS
let i = 0;
let tempo = 2000;

//CRIANDO A FUNÇAO SLIDESHOW
function slideShow() {
  document.getElementById("hero").style.backgroundImage = `var(--gradient), url(${imagens[i]})`;
  i++;
  if (i == imagens.length) {
    i = 0;
  }
  setTimeout("slideShow()", tempo);
}
slideShow();
