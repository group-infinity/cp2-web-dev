// JS DO QUIZ
alert("Seja bem-vindo(a) ao quiz do infinity cars");
const quizForm = document.getElementById("quiz-form");

if (quizForm) {
  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const respostas = [];
    for (let i = 1; i <= 6; i++) {
      const resposta = document.querySelector(`input[name="q${i}"]:checked`);
      // Validação das perguntas
      if (!resposta) {
        alert(`Por favor, responda a pergunta ${i}.`);
        return;
      }
      respostas.push(resposta.value);

      // Calculo da pontuação
      let pontuacao = 0;
      for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] === "A") {
          pontuacao += 2;
        } else {
          pontuacao += 1;
        }
      }

      // Resultados possiveis
      let carroIdeal = "";
      if (pontuacao <= 7) {
        carroIdeal = "GWM Ora 03 2024";
      } else if (pontuacao <= 9) {
        carroIdeal = "BYD Shark 2025";
      } else if (pontuacao <= 11) {
        carroIdeal = "BYD Seal 2025";
      } else {
        carroIdeal = "Porsche Taycan Turbo S 2026";
      }

      // Mostrar resultado na tela
      const resultadoContainer = document.getElementById("resultado-container");

      const resultadoEl = document.getElementById("resultado");
      resultadoContainer.style.display = 'block';
      resultadoEl.innerText = `Com base nas suas respostas, o carro ideal para você é: ${carroIdeal}`;
    }
  });
}
