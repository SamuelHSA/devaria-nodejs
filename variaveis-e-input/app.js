const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constant';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Por favor informe sua idade:', input => {
    leituraDeCampo = input; 
    console.log(`o usuario digitou: ${leituraDeCampo}`);
});