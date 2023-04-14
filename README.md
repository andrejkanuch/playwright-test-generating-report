# Title: Playwright Test Sharding and Report Merging

## Description:
This repository provides a solution for running sharded Playwright tests and merging the resulting reports into a single artifact. It contains a GitHub Actions workflow that manages the entire process, from sharding the tests to merging the test results using the merge-playwright-report utility.

## Key features of this repository:

* Sharded Playwright tests: The provided GitHub Actions workflow allows you to run Playwright tests in parallel, effectively sharding your test suite for faster execution.
* Merging test results: After running the sharded tests, the workflow uses the merge-playwright-report utility to merge individual test reports into a single JSON report.
* GitHub Actions integration: The entire process is seamlessly integrated with GitHub Actions, automating the testing and report merging process in your repository.
Get started by following the instructions in the README.md file, and enhance your testing experience with sharded Playwright tests and consolidated test reports.
