/**
 * @param {String} code String codes for run
 * @param {Object} opt Running Options
 * @param {String | String[]} opt.dangerlist List of danger items
 */
function run (code, { dangerlist = [] } = {}) {
  if (typeof dangerlist === 'string') dangerlist = [dangerlist]

  let blocked
  dangerlist.forEach((danger) => {
    const box = require('./directbox')
    const tgcode = danger + '=undefined;\n'
    if (!(box.execute(tgcode) instanceof Error)) code = tgcode + code
    else if (code.includes(danger)) blocked = 'Error: Sorry keyword "' + danger + '" has been blocked'
    delete require.cache[require.resolve('./directbox.js')]
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
