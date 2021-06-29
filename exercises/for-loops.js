const arr = [400, 832, 80, -10, 1, 34, 12, 365, 43, 17, 45, 14, 88, 100, 335, 100];  //sum = 1154, min = -10
const testArray = [1, 2, 3, 4, 5];

// find the minimum of an array
function findMinimum(array) {
  let minimum = 100000;
  for (let i = 0; i < array.length; i++) {
    const localValue = array[i];
    if (localValue < minimum) {
      minimum = localValue;
    }
  }
  return minimum;
}


// sum the array
function findTheSum(array) {
  let totalSum = 0; // totalSum starts at 0
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum;
}

// find all of the odd numbers and return them in an array
const oddNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findAllOddNumbers(array) {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if ((value % 2) != 0) {
      answer.push(value)
    }
  }
  return answer;
}


// find the sum of all the even numbers
const evenNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNumberSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if ((array[i]) % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

const totalEvenNumbers = evenNumberSum(evenNumbersArray);


const testString = "a;sdlfasj;alskdjfalksdofinwelfaksdnofiasodfij";
//find the number of A's in a string
function findTheA(parameter) {
  let countOfA = 0
  for (let i = 0; i < parameter.length; i++) {
    if (parameter[i] == "a") {
      countOfA += 1;
    }
  }
  return countOfA;
}

function findPrimes(n) {
  // answer variable holder
  const answer = [];
  // first for loop that loops through up to the parameter n
  for (let i = 2; i < n; i++) {
    // create a variable and set the value to true (initial assumption for if the number i is prime)
    let isPrime = true
    // second for loop that loops up to every value of i; for every i it goes from 2 up to i
    for (let j = 2; j < i; j++) {
      // if i / j is a whole number than it is not prime, we do not want those numbers
      if (i % j === 0) {
        // reassigning the variable isPrime to false/ updating initial assumption.
        isPrime = false;
        // if i % j === 0 then we break out of the inner for loop/ short circuit so we don't have to loop through every number after the first value meets the condition.
        break;
      }
    }
    // if 
    if (isPrime === true) {
      answer.push(i);
    }
  }
  return answer;
}

// find the value of n!
// 6! = 6 * 5 * 4 * 3 * 2 * 1
// 3! = 3 * 2 * 1
function findFactorial(n) {
  // Starting variable 
let total = 1;
  // for loop to iterate through n going from n to 1. 
  for (let i = n; i >= 1; i--) {
    // times n by each iteration of i and then store it in the starting variable
    total *= i;
  }
  //return total.
  return total;
}

console.log(findPrimes(100));

module.exports = {
  findMinimum,
  findTheSum,
  findAllOddNumbers,
  evenNumberSum,
}