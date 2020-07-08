# Cypress Testing

## Tutorial Details:

- https://www.valentinog.com/blog/cypress/

## Cypress Documentation

### Cypress Configurations: https://docs.cypress.io/guides/references/configuration.html

### Code Coverage: https://docs.cypress.io/guides/tooling/code-coverage.html#Introduction

## Packages Required:

- cypress
  > npm i cypress --save-dev
- @cypress/code-coverage // to get code coverage with cypress
  > npm i -D @cypress/code-coverage
- nyc (istanbul) // to generate code for code coverage
  > npm install --save-dev nyc

## Commands Used:

### To Serve Code from port 5001 and folder ./instrumented

> npx serve -l 5001 instrumented

This will host the files in "./instrumented" folder on a port 5001. Url will be: http://localhost:5001

### To Generate Code for Code Coverage

> npx nyc instrument --compact=false src instrumented

### To Run Cypress UI

> npm run test:open

### To run Cypress Test from Console

> npm run test:run

### To Read Code-Coverage Summary Report

> npx nyc report --reporter=text-summary
