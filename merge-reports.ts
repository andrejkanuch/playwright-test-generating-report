const { mergeHTMLReports } = require("playwright-merge-html-reports");

mergeHTMLReports(
  [
    process.cwd() + "/playwright-report-1",
    process.cwd() + "/playwright-report-2",
  ],
  { outputBasePath: process.cwd() + "/playwright-report-folder/andrej-test" }
);
