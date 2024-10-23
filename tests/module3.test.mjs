// tests/module3.test.mjs
import pkg from '../module3.js'; // Import the entire module
const { calculate } = pkg; // Destructure the required function

import { expect } from 'chai';

describe('Module 3', () => {
    it('should return correct output', () => {
        expect(calculate()).to.equal(42);
    });
});
