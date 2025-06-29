var prompt = require("prompt-sync")(); // Linha necessária para entrada de dados no Node.js. Use o comando "npm install prompt-sync" caso queira testar.
var num_div = 0, times = 1; // num_div é o número de divisores e times é a quantidade de vezes que a divisão aconteceu.
var div = []; // Array contendo os divisores de n - 1.

var coconuts = parseInt(prompt("Digite o numero de cocos: ")); // Entrada de dados.

for (let i = 1; i <= coconuts; i++) {
    // Adicionando os divisores ao array div[] e obtendo a quantidade deles.
    if ((coconuts - 1) % i == 0) {
        div.push(i);
        num_div++;
    }
}

var copy = coconuts; // Cópia da quantidade de cocos inicial.

for (let i = num_div - 1; i >= 0; i--) {
    // O primeiro laço checa um divisor por vez para checar se ele é a quantidade de pessoas.
    for (let j = 0; j < div[i]; j++) {
        // O segundo laço é para fazer a verificação com o "divisor da vez".
        if ((copy - 1) % div[i] === 0) {
            // Caso n - 1 / "divisor da vez" não tenha resto
            copy = copy - 1 - (copy - 1) / div[i]; // Retira-se 1/5 da cópia e 1 coco vai para o macaco.
        } else {
            break; // Caso n - 1 / "divisor da vez" tenha resto, a repetição é interrompida, economizando tempo e memória.
        }

        times++; // Se o laço não for interrompido, mais uma etapa.
    }

    if (copy % div[i] === 0 && times === div[i] && div[i] !== 1) {
        // Caso n / "divisor da vez" não tiver resto, a quantidade de etapas for igual ao "divisor da vez" e 1 não seja o "divisor da vez", a maior quantidade de pessoas foi encontrada e o programa é encerrado.
        return console.log(`${coconuts} cocos, ${div[i]} pessoas e 1 macaco\n`);
    }

    copy = coconuts; // A cada fim do primeiro laço, a cópia e as etapas se reiniciam para o valor original.
    times = 0;
}

console.log(`${coconuts} cocos, sem solucao`); // Caso não tenha solução para a quantidade de cocos fornecida.