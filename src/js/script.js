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

// JS DO QUIZ
function irParaQuiz() {
  alert("Seja bem-vindo(a) ao quiz do infinity cars");
  window.location.href = "./src/pages/quiz.html";
}

document.addEventListener('DOMContentLoaded', function () {
  const quizForm = document.getElementById('quiz-form');

  if (quizForm) {
    quizForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Mostrar a mensagem final (alert ou no HTML)
      const mensagem = "Obrigada por responder o nosso quiz. Analisaremos suas preferências.";

      // Exibe no alerta
      alert(mensagem);

      // Ou exibe na tela (se preferir)
      const resultadoDiv = document.getElementById('resultado');
      if (resultadoDiv) {
        resultadoDiv.innerText = mensagem;
      }
    });
  }
});

