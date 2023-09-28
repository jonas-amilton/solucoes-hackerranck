function birthdayCakeCandles(candles) {
    // Write your code here
  
    // Encontre a altura máxima das velas desestruturando o array
    const alturaMaxima = Math.max(...candles);
  
    // Conte quantas velas têm a altura máxima
    const velasMaisAltas = candles.filter((altura) => altura === alturaMaxima);
  
    return velasMaisAltas.length;
  }
  
  console.log(birthdayCakeCandles([3, 2, 1, 3]));
  