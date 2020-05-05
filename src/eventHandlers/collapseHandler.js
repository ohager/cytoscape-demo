function init(cy) {
  cy.$('#clickme').on('click', ({target}) => {
    const edges = target.parent().connectedEdges()
    const nodes = edges.targets()
    edges.toggleClass('hidden')
    nodes.toggleClass('hidden')
    target.toggleClass('collapsed')
    target.data({
      name: target.hasClass('collapsed') ? 'expand' : 'collapse'
    })
  })
}

module.exports = {
  init
}
