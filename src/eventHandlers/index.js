const coreHandler = require('./coreHandler')

function registerEventHandlers(cy) {
  // could be dynamically loaded...
  coreHandler.init(cy)
}


module.exports  = {
  registerEventHandlers
}
