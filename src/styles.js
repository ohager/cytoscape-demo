module.exports = {
  style: [
    {
      selector: 'node',
      style: {
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 5,
        'text-outline-color': '#888',
        'width': 80,
        'height': 80
      }
    },
    {
      selector: 'edge',
      style: {
        'content': 'data(name)',
        'width': 8,
        'line-color': '#888',
        'target-arrow-color': '#888',
        'source-arrow-color': '#888',
        'target-arrow-shape': 'triangle',
        'curve-style': 'taxi'
      }
    },
    {
      selector: '$node > node',
      style: {
        'shape': 'roundrectangle',
        'text-valign': 'top',
        'background-color': '#ccc',
        'color': '#888',
        'text-outline-width': 0,
        'font-size': 25,
        "background-fill": "linear-gradient",
        // left border...caveat: its always relative (5%, 10%)
        "background-gradient-direction": "to-right",
        "background-gradient-stop-colors": "green green black black",
        "background-gradient-stop-positions": "0 5 5 100"
      }
    },
    {
      selector: '#core, #app',
      style: {
        'shape': 'rectangle',
        'width': 120,
        'height': 120,
        'font-size': 25
      }
    },
    {
      selector: '#api',
      style: {
        'padding-top': 20,
        'padding-left': 20,
        'padding-bottom': 20,
        'padding-right': 20
      },
    },
    {
      selector: '#ext, .ext',
      style: {
        'background-color': '#93CDDD',
        'text-outline-color': '#93CDDD',
        'line-color': '#93CDDD',
        'target-arrow-color': '#93CDDD',
      }
    },
    {
      selector: '#app, .app',
      style: {
        'background-color': '#F79646',
        'text-outline-color': '#F79646',
        'line-color': '#F79646',
        'target-arrow-color': '#F79646',
        'text-outline-width': 5,
        'color': '#fff'
      }
    },
    {
      selector: '#cy',
      style: {
        'background-opacity': 0,
        'border-width': 1,
        'border-color': '#aaa',
        'border-opacity': 0.5,
        'font-size': 50,
        'padding-top': 40,
        'padding-left': 40,
        'padding-bottom': 40,
        'padding-right': 40
      }
    }
  ]
}
