/* eslint-disable no-eval */

module.exports.execute = (code) => {
  code = 'code=undefined;\n' + code
  this.execute = undefined

  try { eval(code); return } catch (error) { return error }
}
