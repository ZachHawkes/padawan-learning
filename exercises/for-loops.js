const arr = [400, 832, 80, -10, 1,34,12,365,43,17,45,14,88,100,335,100];  //sum = 1154, min = -10
const testArray = [1,2,3,4,5];

// find the minimum of an array
function findMinimum(array) {
  let minimum = 100000;
  for(let i = 0; i < array.length; i++) {
    const localValue = array[i];
    if(localValue < minimum) {
      minimum = localValue;
    }
  }
  return minimum;
}


// sum the array
function findTheSum(array) {
  let totalSum = 0; // totalSum starts at 0
  for(let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum;
}

// const minimum = findMinimum(testArray);
// console.log("Minimum of Array is", minimum);
const sum = findTheSum(arr);
console.log("Sum of array is", sum);