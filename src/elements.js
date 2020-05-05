module.exports = {
  elements: {
    nodes: [
      {
        data: { id: 'cy', name: 'Cytoscape.js' },
      },

      {
        data: { id: 'core', name: 'Core', parent: 'api' },
        position: { x: 0, y: 0 },
        grabbable: true
      },

      {
        data: { id: 'eles', name: 'Collection', parent: 'api' },
        position: { x: 150, y: 150 },
        grabbable: false
      },

      {
        data: { id: 'style', name: 'Stylesheet', parent: 'api' },
        position: { x: 0, y: 150 },
        grabbable: false
      },

      {
        data: { id: 'selector', name: 'Selector', parent: 'api' },
        position: { x: -150, y: 150 },
        grabbable: false
      },

      {
        data: { id: 'ext', name: 'Extensions', parent: 'cy' }
      },

      {
        data: { id: 'corefn', name: 'Core Function', parent: 'ext' },
        classes: 'ext',
        position: { x: 350, y: -140 }
      },

      {
        data: { id: 'elesfn', name: 'Collection Function', parent: 'ext' },
        classes: 'ext',
        position: { x: 350, y: 0 }
      },

      {
        data: { id: 'layout', name: 'Layout', parent: 'ext' },
        classes: 'ext',
        position: { x: 350, y: 140 }
      },

      {
        data: { id: 'renderer', name: 'Renderer', parent: 'ext' },
        classes: 'ext',
        position: { x: 350, y: 280 }
      },

      {
        data: { id: 'api', name: 'Core API', parent: 'cy' }
      },

      {
        data: { id: 'app', name: 'Client' },
        position: { x: 0, y: 480 }
      }
    ],
    edges: [
      { data: { source: 'core', target: 'eles' } },
      { data: { source: 'core', target: 'ext' } },
      { data: { source: 'core', target: 'style' } },
      { data: { source: 'style', target: 'selector' } },
      { data: { source: 'core', target: 'selector' } },
      { data: { source: 'elesfn', target: 'eles' }, classes: 'ext' },
      { data: { source: 'corefn', target: 'api' }, classes: 'ext' },
      { data: { source: 'layout', target: 'api' }, classes: 'ext' },
      { data: { source: 'renderer', target: 'api' }, classes: 'ext' },
      { data: { source: 'app', target: 'api', name: 'use' }, classes: 'app' },
      { data: { source: 'app', target: 'ext', name: 'register' }, classes: 'app' }
    ]
  }
}
