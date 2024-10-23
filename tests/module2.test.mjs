import { expect } from 'chai';
import { anotherFunction } from '../module2.js';

describe('Module 2', function () {
  it('should perform correctly', function () {
    const result = anotherFunction();
    expect(result).to.be.true;
  });
});
