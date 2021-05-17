/**
 * Filename: sum.test.js
 * Author: Group 14 (workflow)
 * Purpose: Temporary file for testing integration of jest
 */
const sum = require("../config/sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});