import { expect } from 'chai';
import { thirdFunction } from '../module3.js';

describe('Module 3', function () {
  it('should return correct output', function () {
    const result = thirdFunction();
    expect(result).to.equal('output');
  });
});
