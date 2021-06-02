/**
 * @file Unit tests for source/models
 * @author Group 14 (testing)
 */

/* global describe */
const dailyModel = require("../models/Daily");

// create new dailyModel to test
const testModel = new dailyModel();

// add tests for daily model
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
describe("test daily model dateObj values", () => {
    test("check dateObj type", () => {
        let expected = Date;
        let actual = testModel.schema.paths.dateObj.options.type;
        expect(actual).toBe(expected);
    });
    test("check dateObj required", () => {
        let expected = true;
        let actual = testModel.schema.paths.dateObj.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model details values", () => {
    test("check details type", () => {
        let expected = [String];
        let actual = testModel.schema.paths.details.options.type;
        expect(actual).toEqual(expected);
    });
    test("check details required", () => {
        let expected = true;
        let actual = testModel.schema.paths.details.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model date values", () => {
    test("check date type", () => {
        let expected = Number;
        let actual = testModel.schema.paths.date.options.type;
        expect(actual).toBe(expected);
    });
    test("check date min", () => {
        let expected = 1;
        let actual = testModel.schema.paths.date.options.min;
        expect(actual).toBe(expected);
    });
    test("check date max", () => {
        let expected = 31;
        let actual = testModel.schema.paths.date.options.max;
        expect(actual).toBe(expected);
    });
    test("check date required", () => {
        let expected = true;
        let actual = testModel.schema.paths.date.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model month values", () => {
    test("check month type", () => {
        let expected = Number;
        let actual = testModel.schema.paths.month.options.type;
        expect(actual).toBe(expected);
    });
    test("check month min", () => {
        let expected = 1;
        let actual = testModel.schema.paths.month.options.min;
        expect(actual).toBe(expected);
    });
    test("check month max", () => {
        let expected = 12;
        let actual = testModel.schema.paths.month.options.max;
        expect(actual).toBe(expected);
    });
    test("check month required", () => {
        let expected = true;
        let actual = testModel.schema.paths.month.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model year values", () => {
    test("check year type", () => {
        let expected = Number;
        let actual = testModel.schema.paths.year.options.type;
        expect(actual).toBe(expected);
    });
    test("check year min", () => {
        let expected = 0;
        let actual = testModel.schema.paths.year.options.min;
        expect(actual).toBe(expected);
    });
    test("check year required", () => {
        let expected = true;
        let actual = testModel.schema.paths.year.options.required;
        expect(actual).toBe(expected);
    });
});
describe("test daily model title values", () => {
    test("check title type", () => {
        let expected = String;
        let actual = testModel.schema.paths.title.options.type;
        expect(actual).toBe(expected);
    });
    test("check title default", () => {
        let expected = "view";
        let actual = testModel.schema.paths.title.options.default;
        expect(actual).toBe(expected);
    });
    test("check title required", () => {
        let expected = true;
        let actual = testModel.schema.paths.title.options.required;
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
