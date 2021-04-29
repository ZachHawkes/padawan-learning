const forLoops = require('./for-loops');


describe('Find Sum function', () => {
  const basicArray = [1,2,3,4,5,6,7,8,9,10];
  const negativeArray = [-1,-2,-3,-4,-5,0,1,2,5,1,2];
  const getSum = (arr) => {
    return arr.reduce((total, value) => total + value, 0);
  }
  
  it('should find the sum correcctly', () => {
    const actualSum = getSum(basicArray);
    expect(forLoops.findTheSum(basicArray)).toBe(actualSum);
  });

  it('should find the sum correctly with negative numbers', () => {
    const actualSum = getSum(negativeArray);
    expect(forLoops.findTheSum(negativeArray)).toBe(actualSum);
  });
});

describe('find the minimum function', () => {
  const basicArray = [0,1,56,2,3,5,23,41,35,23,52,14];
  const negativeArray = [9,2,365,1,2,6,34,34,12,2,36,57,324,23,4,-123,235,23,4,235];

  it('should find the minimum', () => {
    expect(forLoops.findMinimum(basicArray)).toBe(0);
  });

  it('should find the minimum with negative numbers', () => {
    expect(forLoops.findMinimum(negativeArray)).toBe(-123);
  });
})