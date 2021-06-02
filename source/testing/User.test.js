/**
 * @file Unit tests for source/models
 * @author Group 14 (testing)
 */

/* global describe */
const userModel = require("../models/User.js");

// create new dailyModel to test
const testModel = new userModel();

// add tests for Page model
describe("test daily model googleId values", () => {
    test("check googleId type", () => {
        let expected = String;
        let actual = testModel.schema.paths.googleId.options.type;
        expect(actual).toBe(expected);
    });
    test("check googleId required", () => {
        let expected = true;
        let actual = testModel.schema.paths.googleId.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model email values", () => {
    test("check email type", () => {
        let expected = String;
        let actual = testModel.schema.paths.email.options.type;
        expect(actual).toBe(expected);
    });
    test("check email required", () => {
        let expected = true;
        let actual = testModel.schema.paths.email.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model displayName values", () => {
    test("check displayName type", () => {
        let expected = String;
        let actual = testModel.schema.paths.displayName.options.type;
        expect(actual).toBe(expected);
    });
    test("check displayName required", () => {
        let expected = true;
        let actual = testModel.schema.paths.displayName.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model createdAt values", () => {
    test("check createdAt type", () => {
        let expected = Date;
        let actual = testModel.schema.paths.createdAt.options.type;
        expect(actual).toBe(expected);
    });
    test("check createdAt default", () => {
        let expected = Date.now;
        let actual = testModel.schema.paths.createdAt.options.default;
        expect(actual).toBe(expected);
    });
});