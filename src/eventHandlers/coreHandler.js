function init(cy) {
  cy.$('#core').on('click', (e) => {
    console.log('clicked:', e.target)
  })
}

module.exports = {
  init
}
