function compareTriplets(a, b) {
    let pontuacaoAlice = 0;
    let pontuacaoBob = 0;
    let ninguemPontua = 0;
  
    for (let i = 0; i < 3; i++) {
      if (a[i] > b[i]) {
        pontuacaoAlice += 1;
      } else if (a[i] < b[i]) {
        pontuacaoBob += 1;
      } else {
        ninguemPontua += 1;
      }
    }
  
    return [pontuacaoAlice, pontuacaoBob];
  }
  
  const result = compareTriplets([15, 28, 30], [99, 16, 8]);
  console.log(result);
  