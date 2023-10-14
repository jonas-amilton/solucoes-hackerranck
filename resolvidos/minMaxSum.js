// function miniMaxSum(arr) {
//     // Ordenando o array em ordem crescente
//     arr.sort((a, b) => a - b);
    
//     // Calculando a soma mínima: somando os primeiros quatro números do array
//     let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    
//     // Calculando a soma máxima: somando os últimos quatro números do array
//     let maxSum = arr.slice(-4).reduce((a, b) => a + b, 0);
    
//     // Imprimindo as somas mínima e máxima
//     console.log(minSum, maxSum);
// }

function miniMaxSum(arr) {
    // Write your code here
  
    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      sum += arr[i];
  
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    console.log(sum - max, sum - min);
  }

// Definindo um array para testar a função
let arr = [1, 3, 5, 7, 9];

// Chamando a função miniMaxSum com o array definido
miniMaxSum(arr);
