function simpleArraySum(ar) {
    // Write your code here
  
    return ar.reduce((previousValue, currentValue) => previousValue + currentValue)
  }
  
  console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
  