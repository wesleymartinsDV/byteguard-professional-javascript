const value = document.querySelector(".counter__value");

const botaoAdd = document.querySelector(".counter__butto--increase");

const botaoRem = document.querySelector(".counter__button--decrease");

const botaoReset = document.querySelector(".counter__reset-button");

const title = document.querySelector(".counter__title");

const counterEl = document.querySelector(".counter");



/* const titleLimite = () => {
    const currentValue = value.textContent;
    if (currentValue > 4) {
        title.textContent = `Limite foi atigindo`
    }
}
botaoAdd.addEventListener('click', titleLimite); */

botaoReset.addEventListener("click", function () {
  value.textContent = 0;
  counterEl.classList.remove("counter--limit");
  title.textContent = "Fancy Counter"
      botaoAdd.disabled = false;
    botaoRem.disabled = false;
});

const fancyCounterIn = () => {
  const contador = value.textContent;
  let currentValue = +contador;
  let newValue = currentValue + 1;
  if (newValue > 5) {
    newValue = 5;
    counterEl.classList.add("counter--limit");
    title.innerHTML = `<b>Limite</b> foi atigindo`;
    botaoAdd.disabled = true;
    botaoRem.disabled = true;
  }
  value.textContent = newValue;
};
botaoAdd.addEventListener("click", fancyCounterIn);

const fancyCounterDe = () => {
  let currentValue = value.textContent;
  +currentValue;
  currentValue = currentValue - 1;
  value.textContent = currentValue;
  if (value.textContent < 0) {
    value.textContent = 0;
  }
};
botaoRem.addEventListener("click", fancyCounterDe);
