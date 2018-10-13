# Demo to show how to get code coverage directly from V8.

### Setup
1. Clone the Repo
2. Install Dependencies `npm install`
3. Run `npm run coverage`

### Explanation
* To extract coverage, all you need to do is to set environment variable `NODE_V8_COVERAGE` & Node.js will begin outputting V8 JavaScript code coverage to the directory provided as an argument.

    e.g `NODE_V8_COVERAGE=coverage node src/main.js`

* To get report in human readable format you can use [c8](https://github.com/bcoe/c8) 


    e.g `NODE_V8_COVERAGE=coverage c8 node src/main.js`
