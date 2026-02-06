const span = document.querySelector('.numero');
const button = document.querySelector('.botao');

/* span.textContent = '' */

let contador = 1;

const clickHandler = () => {
    span.textContent = contador;
    contador++;
}

button.addEventListener('click', clickHandler);