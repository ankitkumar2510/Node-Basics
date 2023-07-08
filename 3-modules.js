// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const alterData = require('./6-alternative-flavor')
require('./7-mind-grenade')

console.log(alterData)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)