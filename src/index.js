require('./extension/registerExtensions')
const main = require('./main')

document.addEventListener('DOMContentLoaded', function(){
  const cy = window.cy = main()
  cy.elements().demoExtension( /* args... */ );
});
