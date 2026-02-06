const textareaEl = document.querySelector('.textarea');
const numberWordsEl = document.querySelector('.stat__number--words');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const charactersNumberEl = document.querySelector('.stat__number--characters');

const inputHandler = () => {
        // exemplo de validação
    if (textareaEl.value.includes('<script></script>')) {
        alert('You cannot use that');
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

   // determinando novos números
    const numberWords = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberWords;
    const facebookCharactersLeft = 10 - numberWords;
    let numberCharacters = textareaEl.value.split(' ').length;
    if (textareaEl.value.length === 0) {
        numberCharacters = 0;
    }

    // adicionando indicador visual para excesso
    if (twitterCharactersLeft < 0) {
        twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }
    if (facebookCharactersLeft < 0) {
       facebookNumberEl.classList.add('stat__number--limit');
    } else {
        facebookNumberEl.classList.remove('stat__number--limit');
    }

   // setando novos numeros
    numberWordsEl.textContent = numberWords;
    twitterNumberEl.textContent = twitterCharactersLeft;
    facebookNumberEl.textContent = facebookCharactersLeft;
    charactersNumberEl.textContent = numberCharacters;
};

textareaEl.addEventListener('input', inputHandler)