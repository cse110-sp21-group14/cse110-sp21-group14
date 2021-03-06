/**
 * @file This module will allow for easy encryption via cryptr module
 *       Use this module when encrypting and decrypting to ensure that
 *       all the encryption/decryption calls use the same seed.
 * @author Group 14 (backend)
 */
const Cryptr = require("cryptr");
const secret = new Cryptr("prince"); // methods: encrypt(String), decrypt(String)

module.exports = secret;