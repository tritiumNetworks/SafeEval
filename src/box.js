/* eslint-disable no-eval */

let code = 'code = undefined;\n'

module.exports.regCode = (c) => {
  code += c
}

module.exports.execute = () => {
  this.execute = undefined
  this.regCode = undefined

  return eval(code)
}
