function plusMinus(arr) {
  // Write your code here

  let positivo = 0;
  let negativo = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      positivo += 1;
    } else if (arr[i] < 0) {
      negativo += 1;
    } else {
      zero += 1;
    }
  }

  console.log((positivo / arr.length).toFixed(6));
  console.log((negativo / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
