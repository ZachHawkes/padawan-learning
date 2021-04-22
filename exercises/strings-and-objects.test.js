const stringsObjects = require('./strings-and-objects');


describe('add function', () => {
  it('should add two numbers together', () => {
    expect(stringsObjects.add(1, 235)).toBe(236);
  });

  it('should add two strings together', () => {
    expect(stringsObjects.add('Hello', 'World')).toBe('Hello World');
  });

  it.skip('should treat numberStrings as numbers', () => {
    expect(stringsObjects.add('1', '2')).toBe(3);
  });
});

describe('Reverse string function', () => {
  it('should return reverse string', () => {
    expect(stringsObjects.reverseString('hello')).toBe('olleh');
  });

  it('should return reverse string that has spaces in it', () => {
    expect(stringsObjects.reverseString('hello world')).toBe('dlrow olleh');
  })
})