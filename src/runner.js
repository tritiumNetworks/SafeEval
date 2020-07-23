/**
 * @param {String} code String codes for run
 * @param {Object} opt Running Options
 */
function run (code, { allowRequire, allowProcess, allowModule } = {}) {
  const box = require('./box')

  if (!allowRequire) code = 'require = undefined;\n' + code
  if (!allowProcess) code = 'module?module.require = undefined:undefined; process = undefined;\n' + code
  if (!allowModule) code = 'module = undefined;\n' + code

  box.regCode(code)

  try {
    return box.execute()
  } catch (err) { return err }
}

module.exports = run
