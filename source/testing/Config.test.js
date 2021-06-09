/**
 * @file Unit tests for source/config/secret.js
 * @author Group 14 (testers)
 */

// test decryption / encryption
test("Check that encrypted string is correct when decrypted", () => {
    const Cryptr = require("cryptr");
    const cryptr = new Cryptr("random");
    const testString = cryptr.encrypt("test string");
    expect(cryptr.decrypt(testString)).toBe("test string");
});

test("Check that encryopted string is different from original string", () => {
    const Cryptr = require("cryptr");
    const cryptr = new Cryptr("random");
    const testString = cryptr.encrypt("test string");
    expect(cryptr.encrypt(testString)).not.toBe("test string");
});
