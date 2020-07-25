const testLog4js = require('log4js');
testLog4js.configure("./src/helpers/logger/log4js.json");

module.exports = testLog4js.getLogger("file");
