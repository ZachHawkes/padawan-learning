


// add two elements together.
// elements could be strings or numbers
// two strings hello, world should return "hello world"
// two number should 1, 3 should return 4
function add(x, y) {
    const typeOfX = typeof x;
    const typeOfY = typeof y;
    if (typeOfX === 'string' || typeOfY === 'string') {
        // console.log(`${x} ${y}`);
        // console.log(x + " " + y);
        return `${x} ${y}`;
    }
    else {
        // console.log(x + y);
        return x + y;
    }
}

function addVersion2(x, y) {
  if(!isNaN(x) || !isNaN(y)) {
    return `${x} ${y}`; 
  }
  return x + y;
}

// const helloWorld = add('hello', 'world');
// console.log(helloWorld);

// return the string in reverse order ie "hello" => "olleh";
// HINT: Convert the string to an array
function reverseString(str) {

}

// return true if the property is on the provided obj
// return false if the property is not on the provided obj
function isPropertyInObject(property, obj) {
  return Boolean(obj[property]);
}

const person = {
  firstName: 'Mario',
  lastName: 'Smith',
  phoneNumber: 7,
  occupation: 'Plumber',
};

console.log(isPropertyInObject('occupation', person));
