const seval = require('../index')
const code = 'console.log()'

const option = {
  allowRequire: false,
  allowProcess: false,
  allowModule: false
}

console.log(seval(code, option))
console.log('Execute Ended')
