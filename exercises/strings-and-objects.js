// add two elements together.
// elements could be strings or numbers
// two strings hello, world should return "hello world"
// two number should 1, 3 should return 4
function add(x, y) {
  const typeOfX = typeof x;
  const typeOfY = typeof y;
  if (typeOfX === "string" || typeOfY === "string") {
    return `${x} ${y}`;
  } else {
    return x + y;
  }
}

function addVersion2(x, y) {
  if (!isNaN(x) || !isNaN(y)) {
    return `${x} ${y}`;
  }
  return x + y;
}

// const helloWorld = add('hello', 'world');
// console.log(helloWorld);

// return the string in reverse order ie "hello" => "olleh";
// HINT: Convert the string to an array
function reverseString(str) {
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer = answer + str[i];
  }
  return answer;
  // Option 2:
  // const stringArray = str.split('');
  // stringArray.reverse();
  // return stringArray.join('');
}

// return true if the property is on the provided obj
// return false if the property is not on the provided obj
function isPropertyInObject(property, obj) {
  return Boolean(obj[property]);
}

module.exports = {
  add,
  addVersion2,
  reverseString,
  isPropertyInObject,
};
