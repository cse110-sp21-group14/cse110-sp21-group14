/**
 * @file Temporary file for testing integration of jest
 * @author Group 14 (workflow)
 */
const sum = require("../config/sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});