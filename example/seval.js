const seval = require('../index')
const { blockAll: dangerlist } = require('../presets')
const code = 'while (true)'

console.log(seval(code, { dangerlist }))
console.log('Execute Ended')
