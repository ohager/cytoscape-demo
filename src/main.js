const {style} = require('./styles')
const {elements} = require('./elements')

function main() {
  return cytoscape({
    container: document.getElementById('cy'),
    layout: {name: 'preset'},
    style,
    elements
  });
}

module.exports = main
