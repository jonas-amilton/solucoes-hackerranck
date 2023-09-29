function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      // Se o número atual do loop 'i' é divisível por 15 (ou seja, divisível por 3 e 5),
      // "FizzBuzz" é impresso no console.
      if (i % 15 == 0) console.log("FizzBuzz");
      // Se o número 'i' não é divisível por 15, mas é divisível por 3,
      // "Fizz" é impresso no console.
      else if (i % 3 == 0) console.log("Fizz");
      // Se o número 'i' não é divisível nem por 15 nem por 3, mas é divisível por 5,
      // "Buzz" é impresso no console.
      else if (i % 5 == 0) console.log("Buzz");
      // Se o número 'i' não é divisível por 3 nem por 5,
      // o próprio número 'i' é impresso no console.
      else console.log(i);
    }
  }
  
  fizzBuzz(15);
  