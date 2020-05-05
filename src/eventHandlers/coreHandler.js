function init(cy) {
  cy.$('#core').on('click', ({target}) => {
    console.log('clicked', target)
  })
}

module.exports = {
  init
}
