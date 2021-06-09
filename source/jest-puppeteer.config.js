module.exports = {
    launch: {
        headless: true, //process.env.CI === "true",
        ignoreDefaultArgs: ["--disable-extensions"],
        args: ["--no-sandbox"]
    }
};
