const reporter = require('beater-html-reporter').default
const { test, fixture } = require('beater').default(reporter())
module.exports = { test, fixture }
