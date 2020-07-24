module.exports = {
  /**
   * this preventation
   * this, globalThis
   */
  this: require('./this.json'),
  /**
   * basic preventation
   * require, process, module
   */
  basic: require('./basic.json'),
  /**
   * prevent infinity loop
   * setInterval, while, for
   */
  infLoop: require('./infloop.json'),
  /**
   * blockAll preventation
   * require, process, module, setInterval, while, for, this
   */
  blockAll: [...require('./basic.json'), ...require('./infloop.json'), ...require('./this.json')]
}
