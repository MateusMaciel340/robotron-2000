const robotron = document.querySelector('#robotron');

robotron.addEventListener('click', () => {
    console.log("Cliquei no robo!");
});

function dizOi(nome) {
    console.log("Oi, " + nome);
    console.log("Bem-vindo ao robotron 2000!");
}

dizOi("Mateus");