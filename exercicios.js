// exercicios de JavaScript
// Atividade1

let Nome = "Victor";

console.log("O" , Nome , "ama a Ana Beatriz")

// Atividade2

let nome = "Victor";
let idade = 17;

console.log("Meu nome é" , nome , "e eu tenho" , idade , "anos e amo a Ana Beatriz");

// Atividade3

let n = "Victor";
let i = "17";
let c = "Cruzeiro";

console.log("Meu nome é" , n , ",eu tenho" , i , "anos e eu moro em" , c , ", e eu amo a Ana Beatriz");

// Atividade4

const valor = 3.14;
const v1 = 5.5;
const v2 = 6.7;

console.log("O dobro de pi é:" , valor * 2);
console.log("A soma de de 5.5 com 6.7 é igual:" , v1 + v2);

// Operadores aritméticos
// Atividade1

const num1 = 450;
const num2 = 50;

console.log("A soma dos números 450 e 50 é:" , num1 + num2);
console.log("A diferença entre os números 450 e 50 é:" , num1 - num2);
console.log("O produto dos números 450 e 50 é:" , num1 * num2);
console.log("A divisão entre os números 450 e 50 é:" , num1 / num2);
console.log("O resto da divisão entre os números 450 e 50 é:" , num1 % num2);

// Atividade2

let nota1 = 10;
let nota2 = 8.5;
let nota3 = 7.5;
let media = (nota1 + nota2 + nota3) /3

console.log("A média das notas:" , media)

// Atividade3

let numero1 = 30;
let numero2 = 50;

console.log("O dobro do número 30 é:" , numero1 * 2);
console.log("O triplo do número 50 é:" , numero2 * 3);

// Atividade4

let celsius = 30

console.log("Conversão de celsius para fahrenheit:");
console.log("30 graus celsius em Fahrenheit=", celsius * 1.8 + 32);

//Operadores relacionais e lógicos
//Atividade1

let n1 = 35;
let n2 = 10;

console.log("35 é maior que 10?")
console.log(n1 > n2);

//Atividade2

let idade2 = 25

console.log(idade2 >= 18);

//Atividade3

let variavel1 = 30;
let variavel2 = 30;

console.log("Esses dois números são iguais?")
if (variavel1 == variavel2) {
    console.log("Esses números são iguais!")
} else {
    console.log("Esses números não são iguais!")
}

//Atividade4

let temCarteira = true;
let temIdade = true;

console.log("Você pode dirigir?")
if (temCarteira && temIdade) {
    console.log("Sim, você pode")
} else {
    console.log("Você não pode!")
}
    
// Atividade5

let npar = 10;

if (npar > 0 && npar % 2 === 0) {
    console.log("esse numero é par e positivo")
} else {
    console.log("esse numero é impar e negativo")
}