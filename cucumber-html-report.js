const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "jsonlogs", // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "94",
        },
        device: "GitLab CI",
        platform: {
            name: "linux",
            version: "Debian",
        },
    },
});
