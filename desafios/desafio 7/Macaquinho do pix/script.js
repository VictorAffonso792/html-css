document.getElementById('placeBet').addEventListener('click', function() {
    const betAmount = document.getElementById('betAmount').value;
    const betChoice = parseInt(document.getElementById('betChoice').value);
    const resultMessage = document.getElementById('resultMessage');
    const monkeyImage = document.getElementById('monkeyImage');

    if (!betAmount || betAmount <= 0 || betChoice < 1 || betChoice > 5) {
        resultMessage.textContent = "Por favor, insira um valor de aposta válido e escolha um número entre 1 e 5.";
        return;
    }

    const randomNumber = Math.floor(Math.random() * 5) + 1;

    if (betChoice === randomNumber) {
        resultMessage.textContent = `Parabéns! Você escolheu ${betChoice} e o macaquinho também escolheu ${randomNumber}. Você ganhou ${betAmount * 5} em Pix!`;
        monkeyImage.src = "happy_monkey.png";  // Imagem do macaquinho feliz
    } else {
        resultMessage.textContent = `Que pena! Você escolheu ${betChoice}, mas o macaquinho escolheu ${randomNumber}. Você perdeu ${betAmount} em Pix.`;
        monkeyImage.src = "sad_monkey.png";  // Imagem do macaquinho triste
    }

    monkeyImage.style.display = "block";
});
