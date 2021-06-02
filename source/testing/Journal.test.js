/**
 * @file Unit tests for source/models
 * @author Group 14 (testing)
 */
 const dailyModel = require("../models/Journal.js");

// create new dailyModel to test
const testModel = new dailyModel();

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
describe("test daily model pages values", () => {
    test("check pages type", () => {
        let expected = [String];
        let actual = testModel.schema.paths.pages.options.type;
        expect(actual).toEqual(expected);
    });
    test("check pages default", () => {
        let expected = [];
        let actual = testModel.schema.paths.pages.options.default;
        expect(actual).toEqual(expected);
    });
    test("check pages required", () => {
        let expected = true;
        let actual = testModel.schema.paths.pages.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model pageIds values", () => {
    test("check pageIds type", () => {
        let expected = [String];
        let actual = testModel.schema.paths.pageIds.options.type;
        expect(actual).toEqual(expected);
    });
    test("check pageIds default", () => {
        let expected = [];
        let actual = testModel.schema.paths.pageIds.options.default;
        expect(actual).toEqual(expected);
    });
    test("check pageIds required", () => {
        let expected = true;
        let actual = testModel.schema.paths.pageIds.options.required;
        expect(actual).toBe(expected);
    });
});