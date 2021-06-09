module.exports = {
    launch: {
        headless: false, //process.env.CI === "true",
        ignoreDefaultArgs: ["--disable-extensions"],
        args: ["--no-sandbox"]
    }
};