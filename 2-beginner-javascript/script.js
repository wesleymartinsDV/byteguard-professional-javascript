// variables
/* const description = "We need a new floor."
const squareMeters = 100;
const specialCoating = false;
const floorOptions = [
    "carpet", "hardwood", "titles",
    99, true, false
];
const renovationJob = {
    ownerName: "Wesley",
    maxiumPrice: 500,
    category: "bathroom",
    newShower: true,
    colorOptions: ["green", "blue"]
}

console.log(renovationJob.colorOptions[1])

function calculatePrice(sqMeters) {
    const price = sqMeters + 3000;
    return price;
}

var calculatePrice = function(sqMeters) {
} */

/* const calculatePrice = (sqMeters) => {
    const price = sqMeters + 3000;
    return price;
};
 */
/* const calculatePrice = sqMeters => sqMeters + 3000;
console.log(calculatePrice(100)); */
//
/* const headingEl = document.querySelector(".heading")

const onClick = () => {
    headingEl.style.color = "red";
    console.log("change color")
}

headingEl.addEventListener("click", onClick) */

/* const price = "10000";
const weather = "bad";

if (price === 10000 || weather == "bad") {
    console.log(`true`);
}   else {
    console.log(`of`);
}

price > 3000 ? console.log(`Hello`) : console.log(`blabla`); */

if (5000) {
  let hello = 5;
} else {
  let hi = 10;
}

const headingEL = document.querySelector(".heading");

/* headingEL.textContent = `Hello World!`;
headingEL.innerHTML = `Hello <span class="big">World</span>` */

/* headingEL.insertAdjacentHTML(`beforebegin`, `"sss"`);

headingEL.style.fontSize = '1rem' */

const clickHandler = () => {
    headingEL.classList.add('big');
}

headingEL.addEventListener('click', clickHandler);


// EXTRA exercício 1
/* let jogador = {
    name: "Caleri",
    jogos: 10,
    gols: 7,
    salarioDesejado: 1000
}

const calculateMediaGols = (gols, jogos) => gols / jogos;

const verificarContratacao = () => {
    const result = calculateMediaGols(jogador.gols, jogador.jogos);
    if (result > 0.5) {
        return "Contrate o " + jogador.name;
    } else {
        return "Não vale a pena"
    }
}

console.log(verificarContratacao()) */

// 2

/* let paciente = {
    nome: "Jorge",
    peso: 800,
    altura: 1.80,
}

const calcularIMC = (peso, altura) => {
    return peso / (altura * altura);
}

const gerarRelatorio = () => {
    const IMC = calcularIMC(paciente.peso, paciente.altura)
        if (IMC > 25) {
            return "Cuidado " + paciente.nome + ", você está acima do peso."
        } else if (IMC <= 25) {
                return paciente.nome + ", você está no peso ideal"
            }
}

console.log(gerarRelatorio()) */

// 3
/* const calcularMedia = (a, b, c) => (a + b + c) / 3;

const verificarSituacao = (media) => {
    if (media >= 7) {
        return "Parábens, aprovado!"
    } else if (media < 7 && media >= 5) {
        return "Você está de recuperação."
    } else {
        return "Você está reprovado."
    }
}

const mediaFinal = calcularMedia(6, 6, 6)

console.log(verificarSituacao(mediaFinal)) */

// 4
/* const carrinho = [
    {
        name: "leite",
        preco: 5,
    },
    {
        name: "pao",
        preco: 1,
    },
    {
        name: "arroz",
        preco: 20,
    }
]

const calcularTotal = (carrinho) => carrinho[0].preco + carrinho[1].preco + carrinho[2].preco;

const verificarDesconto = (valorTotal) => {
    if (valorTotal > 100) {
        return "Com desconto: " + valorTotal * 0.9;
    } else {
        return "Sem desconto: R$: " + valorTotal;
    }
}

const total = calcularTotal(carrinho);

console.log(verificarDesconto(total)) */

// 5
/* 
const carros = [
    {
        modelo: "Gol",
        preco: 10000,
    },
    {
        modelo: "Celta",
        preco: 20000,
    },
    {
        modelo: "Palio",
        preco: 30000,
    },
]

const compraCarro = (qualCarro, carteira) => {
    const precoDoCarro = carros[qualCarro].preco;
    const nomeDoCarro = carros[qualCarro].modelo;

    if (carteira >= precoDoCarro) {
        return "Você pode comprar o carro " + nomeDoCarro;
    } else {
        return "Você nao tem dinheiro disponivel"
    }
}

console.log(compraCarro(1, 9000)) */
