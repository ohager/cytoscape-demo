const coreHandler = require('./coreHandler')
const collapseHandler = require('./collapseHandler')

function registerEventHandlers(cy) {
  // could be dynamically loaded...
  coreHandler.init(cy)
  collapseHandler.init(cy)
}


module.exports  = {
  registerEventHandlers
}
