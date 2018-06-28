// Create 2 variables with values of 0 and 1

let fibo = (n) => {
if(n === 1) {
  return 0;
   } else {
       let myArray = [0,1];
  for (i = 2; i < n; i++) {
    myArray[i] = myArray[i-1] + myArray[i-2];
  }
  return myArray;
   }
};
console.log(fibo(3));
