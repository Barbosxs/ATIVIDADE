// 1 - Soma dos números pares
function somaPares(array) {
  return array.filter(num => num % 2 === 0).reduce((soma, num) => soma + num, 0);
}

// Exemplo:
console.log(somaPares([1, 2, 3, 4, 5, 6])); // 12

// 2 - Palavras com mais de 4 letras
function palavrasGrandes(array) {
  return array.filter(palavra => palavra.length > 4);
}

// Exemplo:
console.log(palavrasGrandes(["amor", "coração", "sol", "liberdade"])); // ["coração", "liberdade"]

// 3 - Contar ocorrência de um número
function contarOcorrencias(array, numero) {
  return array.filter(n => n === numero).length;
}

// Exemplo:
console.log(contarOcorrencias([1, 2, 3, 2, 2, 4, 2], 2)); // 4

// 4 - Multiplicar elementos por um número
function multiplicarArray(array, multiplicador) {
  return array.map(num => num * multiplicador);
}

// Exemplo:
console.log(multiplicarArray([1, 2, 3], 5)); // [5, 10, 15]

// 5 - Inverter ordem das palavras em uma string
function inverterPalavras(frase) {
  return frase.split(" ").reverse().join(" ");
}

// Exemplo:
console.log(inverterPalavras("Olá mundo maravilhoso")); // "maravilhoso mundo Olá"
