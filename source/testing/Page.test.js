/**
 * @file Unit tests for source/models
 * @author Group 14 (testing)
 */

/* global describe */
const pageModel = require("../models/Page.js");

// create new dailyModel to test
const testModel = new pageModel();

// add tests for Journal model
describe("test Journal model title values", () => {
    test("check title type", () => {
        let expected = String;
        let actual = testModel.schema.paths.title.options.type;
        expect(actual).toBe(expected);
    });
    test("check title trim", () => {
        let expected = true;
        let actual = testModel.schema.paths.title.options.trim;
        expect(actual).toBe(expected);
    });
    test("check title required", () => {
        let expected = true;
        let actual = testModel.schema.paths.title.options.required;
        expect(actual).toBe(expected);
    });
});
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
describe("test daily model journalId values", () => {
    test("check journalId type", () => {
        let expected = String;
        let actual = testModel.schema.paths.journalId.options.type;
        expect(actual).toBe(expected);
    });
    test("check journalId required", () => {
        let expected = true;
        let actual = testModel.schema.paths.journalId.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model lastModified values", () => {
    test("check lastModified type", () => {
        let expected = Date;
        let actual = testModel.schema.paths.lastModified.options.type;
        expect(actual).toBe(expected);
    });
    test("check lastModified default", () => {
        let expected = Date.now;
        let actual = testModel.schema.paths.lastModified.options.default;
        expect(actual).toBe(expected);
    });
    test("check lastModified required", () => {
        let expected = true;
        let actual = testModel.schema.paths.lastModified.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model importance values", () => {
    test("check importance type", () => {
        let expected = Number;
        let actual = testModel.schema.paths.importance.options.type;
        expect(actual).toBe(expected);
    });
    test("check importance default", () => {
        let expected = 0;
        let actual = testModel.schema.paths.importance.options.default;
        expect(actual).toBe(expected);
    });
    test("check importance required", () => {
        let expected = true;
        let actual = testModel.schema.paths.importance.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model content values", () => {
    test("check content type", () => {
        let expected = String;
        let actual = testModel.schema.paths.content.options.type;
        expect(actual).toBe(expected);
    });
    test("check content default", () => {
        let expected = "";
        let actual = testModel.schema.paths.content.options.default;
        expect(actual).toBe(expected);
    });
    test("check content required", () => {
        let expected = true;
        let actual = testModel.schema.paths.content.options.required;
        expect(actual).toBe(expected);
    });
});