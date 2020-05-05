require('./extension/registerExtensions')
const main = require('./main')
const {registerEventHandlers} = require('./eventHandlers')

document.addEventListener('DOMContentLoaded', function(){
  const cy = window.cy = main()
  cy.elements().demoExtension( /* args... */ );
  registerEventHandlers(cy)
});
