// tests/module2.test.mjs
import pkg from '../module2.js'; // Import the entire module
const { performAction } = pkg; // Destructure the required function

import { expect } from 'chai';

describe('Module 2', () => {
    it('should perform correctly', () => {
        expect(performAction()).to.equal('Action performed in Module 2!');
    });
});
