function aVeryBigSum(ar) {
    // Inicialize uma variável para armazenar a soma como um número grande
    let resultado = BigInt(0);
  
    // Percorra a matriz e adicione cada elemento à soma
    for (let i = 0; i < ar.length; i++) {
      resultado += BigInt(ar[i]);
    }
  
    // Convertendo o resultado de volta para um número
    return Number(resultado);
  }

console.log(
  aVeryBigSum([
    [1000000001],
    [1000000002],
    [1000000003],
    [1000000004],
    [1000000005],
  ])
);