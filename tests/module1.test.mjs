// tests/module1.test.mjs
import pkg from '../module1.js'; // Import the entire module
const { someFunction } = pkg; // Destructure the required function

import { expect } from 'chai';

describe('Module 1', () => {
    it('should return the correct value', () => {
        expect(someFunction()).to.equal('Hello from Module 1!');
    });
});
