import { expect } from 'chai'; // ES module import for Chai
import { someFunction } from '../module1.js'; // Update to the path of your actual module

describe('Module 1', function () {
  it('should return the correct value', function () {
    const result = someFunction();
    expect(result).to.equal('expected value');
  });
});
