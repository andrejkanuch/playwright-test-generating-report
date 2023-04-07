const { mergeHTMLReports } = require("playwright-merge-html-reports");

mergeHTMLReports([
  process.cwd() + "/playwright-report-1",
  process.cwd() + "/playwright-report-2",
]);
