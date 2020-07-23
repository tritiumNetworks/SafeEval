/**
 * @param {String} code String codes for run
 * @param {Object} opt Running Options
 */
function run (code, { allowRequire, allowProcess, allowModule, blacklist = [] } = {}) {
  if (!allowRequire) code = 'require = undefined;\n' + code
  if (!allowProcess) code = 'module?module.require = undefined:undefined; process = undefined;\n' + code
  if (!allowModule) code = 'module = undefined;\n' + code

  if (typeof blacklist === 'string') blacklist = [blacklist]
  let blocked

  blacklist.forEach((black) => {
    if (code.includes(black)) {
      blocked = 'Error: Sorry, keyword "' + black + '" is blocked'
    }
  })

  if (blocked) return blocked

  const box = require('./box')
  box.regCode(code)

  try {
    const res = box.execute()
    delete require.cache[require.resolve('./box.js')]
    return res
  } catch (err) {
    delete require.cache[require.resolve('./box.js')]
    return err
  }
}

module.exports = run
