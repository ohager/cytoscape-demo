function demoExtension(){
  let eles = this;
  let cy = this.cy();

  console.log('demoExtension', eles.style())

  // your extension impl...

  return this; // chainability
}

module.exports = {
  demoExtension
}
