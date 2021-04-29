// add two elements together.
// elements could be strings or numbers
// two strings hello, world should return "hello world"
// two number should 1, 3 should return 4
// support decimals/floats
function add(x, y) {
  const convertedX = parseFloat(x);
  const convertedY = parseFloat(y);
  if(!isNaN(convertedX) && !isNaN(convertedY)) {
    return convertedX + convertedY;
  } else {
    return `${x} ${y}`;
  }
}

// two strings add together as numbers a little more efficient
function addStrings(str1, str2) {
  return parseInt(str1) + parseInt(str2);
}

function addVersion2(x, y) {
  if (!isNaN(x) || !isNaN(y)) {
    return `${x} ${y}`;
  }
  return x + y;
}

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
