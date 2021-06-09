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

// return the numbers both string and num types from obj in an obj
// don't do anything with strings that cannot be converted to numbers
const object1 = {
  "a": 1,
  "b": "2",
  "c": "hello"
}; 
// would turn into 
/*
{"a": 1, "b": 2};
*/
function getNumbersFromObject(obj) {
  const objToArr = Object.entries(obj);
  
  // iterate over each key, value pair in object
  objToArr.forEach(([key, value]) => {
     // delete that key from the obj;
      if (isNaN(value) === true) {
         delete obj[key];
      } else {
        // can be done here
      }

  });
  // return the obj;
  return obj;
}

console.log(getNumbersFromObject(object1));

// take 2d array and return an obj with first column as key
// and the 2nd column as value
// 2d array looks like [['key', 'value], ['key', 'value']]
// obj should look like {key: 'value', key: 'value'}

const twoDArr = [["Tanner", "software tester"], ["Zach", "developer"]];
function convert2dArrayToObj(arr) {
  return arr.reduce((acc, val) => { 
    const [key, value] = val; // destructuring
    acc[key] = value;
    return acc;
   }, {});
};

function test(arr) {
  const returnObj = {};
  for(let i = 0; i < arr.length; i++) {
    const key = arr[i][0];
    const value = arr[i][1];
    returnObj[key] = value;
  }
  return returnObj;
}

// swap the keys with the values of an obj
// return the switched obj
// obj = {a: 'z', b: 'y'} --> obj = {z: a, y: b};
const obj = {
  a: 'z',
  b: 'y',
};
function swapKeysAndValues(obj) {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    const valueOfKey = obj[key];
    newObj[valueOfKey] = key;
  });
  return newObj;
}

//schema is an object with key and dataType for that key
//obj is object to compare against.
//keys in obj and schema should match and datatypes of each should match
//return true if object matches schema. 
// schema key value pair 'a': 'string'
// obj key value pair 'a': 'hello world' -- VALID return true
// obj key value pair 'a': 1 -- INVALID return false
function hasCleanData(obj, schema) {
  const firstNameEqual = typeof obj.firstName == schema.firstName;
   const ageEqual = typeof obj.age == schema.age;
   return firstNameEqual, ageEqual; 

}

const schema = {
  firstName: 'string',
  age: 'number'
}
const obj1 = {
  firstName : "Tanner",
  age : 27
};




module.exports = {
  add,
  addVersion2,
  reverseString,
  isPropertyInObject,
};
