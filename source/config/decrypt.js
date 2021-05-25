/**
 * Filename: decrypt.js
 * Author: Stephen (backend)
 * Date: May 17th
 * Purpose: Decrypt journals from database
 */

const secret = require("../config/secret");
const edjsHTML = require("editorjs-html");
const edjsParser = edjsHTML();

module.exports = {
    // get all journals from a user
    getDecryptedJournals: function (encryptedJournals) {
        let decryptedJournals = [];
    
        // decrypting each journal
        encryptedJournals.forEach(journal => {
            // getting page names for a journal
            let encryptedPages = journal.pages;
            let decryptedPages = [];
    
            // decrypting page names for a journal
            for (let i = 0; i < encryptedPages.length; i++) {
                let newPage = {
                    pageTitle: secret.decrypt(encryptedPages[i]),
                    pageId: journal.pageIds[i]
                };
                decryptedPages.push(newPage);
            }
    
            let decrypted = {
                journalId: journal._id,
                title: secret.decrypt(journal.title),
                googleId: journal.googleId,
                pages: decryptedPages
            };
    
            // adding decrypted journal
            decryptedJournals.push(decrypted);
        });
    
        return decryptedJournals;
    },

    // get all pages of a journal
    getDecryptedJournal: function (encryptedJournal) {
        let encryptedPages = encryptedJournal.pages;
        let decryptedPages = [];

        // decrypting page names for a journal
        for (let i = 0; i < encryptedPages.length; i++) {
            let newPage = {
                pageTitle: secret.decrypt(encryptedPages[i]),
                pageId: encryptedJournal.pageIds[i]
            };
            decryptedPages.push(newPage);
        }

        let decryptedJournal = {
            journalId: encryptedJournal._id,
            title: secret.decrypt(encryptedJournal.title),
            googleId: encryptedJournal.googleId,
            pages: decryptedPages,
        };

        return decryptedJournal;
    },

    // get all info for a page
    getDecryptedPage: function (encryptedPage, pageId, googleId) {
        let stringValue = secret.decrypt(encryptedPage.content);

        let decryptedPage = {
            pageId: pageId,
            title: secret.decrypt(encryptedPage.title),
            googleId: googleId,
            journalId: encryptedPage.journalId,
            lastModified: encryptedPage.lastModified,
            importance: encryptedPage.importance,
            content: stringValue
        };
        
        return decryptedPage;
    }
};



