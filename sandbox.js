const person = {
  firstName: 'Joe',
  lastName: 'Schmoe',
  phoneNumber: 4,
  occupation: () => {
    console.log('I\'m a reporter!');
  }
};

console.log(person['friends']);
console.log(person['occupation']);


if(!person['parents']) {
  console.log('I do not have parents');
}