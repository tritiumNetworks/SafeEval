const seval = require('../index')
const code = '1+1'

const option = {
  allowRequire: false,
  allowProcess: false,
  allowModule: false,
  blacklist: '+'
}

console.log(seval(code, option))
console.log('Execute Ended')
