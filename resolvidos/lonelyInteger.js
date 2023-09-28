function lonelyinteger(a) {
    // Write your code here
  
    let resultado = 0;
    
    for (let i = 0; i < a.length; i++) {
      // O operador lógico XOR, também conhecido como “ou exclusivo”,
      // é um operador utilizado na linguagem de programação JavaScript
      // para realizar operações de comparação entre dois valores booleanos.
      // Ele retorna verdadeiro (true) se somente um dos valores
      // for verdadeiro, e falso (false) caso contrário.
      resultado ^= a[i]
    }
    
    return resultado;
  }
  
  console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));