/* eslint-disable no-eval */
/* eslint-disable no-new-func */

let code = 'code = undefined; scope = undefined;\n'

module.exports.regCode = (c) => {
  code += c
}

module.exports.execute = () => {
  this.execute = undefined
  this.regCode = undefined
  this.regScope = undefined

  return eval(code)
}
