const heading = document.querySelector('.container h1');
const botao = document.querySelector('.btn-enviar');
const input = document.querySelector('.campo-nome');

const onClick = () => {
    let nome = input.value;
    heading.textContent = `Ola ${nome}`;
}

botao.addEventListener('click', onClick);