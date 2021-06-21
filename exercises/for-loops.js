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

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// find the prime numbers less than n
function findThePrimes(n) {
  const answer = []
  // loop through the array
  for (let i = 0; i < numArray.length; i++) {
    // find the numbers that are prime numbers
    //Will not get 1, 2, 3, 5, 7,
    if (!Number.isInteger(numArray[i]/2) && !Number.isInteger(numArray[i]/3) && !Number.isInteger(numArray[i]/5) && !Number.isInteger(numArray[i]/7) && numArray[i] < n && numArray[i] > 1) {
    // return each of the prime numbers that are less than the parameter (n)
      answer.push(numArray[i]);
    }
 }
 return answer;

}

module.exports = {
  findMinimum,
  findTheSum,
  findAllOddNumbers,
  evenNumberSum,
}