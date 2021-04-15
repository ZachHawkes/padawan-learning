


// add two elements together.
// elements could be strings or numbers
// two strings hello, world should return "hello world"
// two number should 1, 3 should return 4
function add(x, y) {
    const typeOfX = typeof x;
    const typeOfY = typeof y;
    if (typeOfX === 'string' || typeOfY === 'string') {
        console.log(`${x} ${y}`);
        //console.log(x + " " + y);
    }
    else {
        console.log(x + y);
    }

}

add();