function miniMaxSum(arr) {
    // Ordenando o array em ordem crescente
    arr.sort((a, b) => a - b);
    
    // Calculando a soma mínima: somando os primeiros quatro números do array
    let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    
    // Calculando a soma máxima: somando os últimos quatro números do array
    let maxSum = arr.slice(-4).reduce((a, b) => a + b, 0);
    
    // Imprimindo as somas mínima e máxima
    console.log(minSum, maxSum);
}

// Definindo um array para testar a função
let arr = [1, 3, 5, 7, 9];

// Chamando a função miniMaxSum com o array definido
miniMaxSum(arr);
