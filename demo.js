(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeCustomStyle"] = factory();
	else
		root["cytoscapeCustomStyle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    style = _require.style;

var _require2 = __webpack_require__(2),
    elements = _require2.elements;

function main() {
  return cytoscape({
    container: document.getElementById('cy'),
    layout: { name: 'preset' },
    style: style,
    elements: elements
  });
}

module.exports = main;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(3),
    demoExtension = _require.demoExtension;

// registers the extension on a cytoscape lib ref


var register = function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape('collection', 'demoExtension', demoExtension); // register with cytoscape.js
};

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}

module.exports = register;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  elements: {
    nodes: [{
      data: { id: 'cy', name: 'Cytoscape.js' }
    }, {
      data: { id: 'core', name: 'Core', parent: 'api' },
      position: { x: 0, y: 0 },
      grabbable: true
    }, {
      data: { id: 'eles', name: 'Collection', parent: 'api' },
      position: { x: 150, y: 150 },
      grabbable: false
    }, {
      data: { id: 'style', name: 'Stylesheet', parent: 'api' },
      position: { x: 0, y: 150 },
      grabbable: false
    }, {
      data: { id: 'selector', name: 'Selector', parent: 'api' },
      position: { x: -150, y: 150 },
      grabbable: false
    }, {
      data: { id: 'ext', name: 'Extensions', parent: 'cy' }
    }, {
      data: { id: 'corefn', name: 'Core Function', parent: 'ext' },
      classes: 'ext',
      position: { x: 350, y: -140 }
    }, {
      data: { id: 'elesfn', name: 'Collection Function', parent: 'ext' },
      classes: 'ext',
      position: { x: 350, y: 0 }
    }, {
      data: { id: 'layout', name: 'Layout', parent: 'ext' },
      classes: 'ext',
      position: { x: 350, y: 140 }
    }, {
      data: { id: 'renderer', name: 'Renderer', parent: 'ext' },
      classes: 'ext',
      position: { x: 350, y: 280 }
    }, {
      data: { id: 'api', name: 'Core API', parent: 'cy' }
    }, {
      data: { id: 'app', name: 'Client' },
      position: { x: 0, y: 480 }
    }],
    edges: [{ data: { source: 'core', target: 'eles' } }, { data: { source: 'core', target: 'ext' } }, { data: { source: 'core', target: 'style' } }, { data: { source: 'style', target: 'selector' } }, { data: { source: 'core', target: 'selector' } }, { data: { source: 'elesfn', target: 'eles' }, classes: 'ext' }, { data: { source: 'corefn', target: 'api' }, classes: 'ext' }, { data: { source: 'layout', target: 'api' }, classes: 'ext' }, { data: { source: 'renderer', target: 'api' }, classes: 'ext' }, { data: { source: 'app', target: 'api', name: 'use' }, classes: 'app' }, { data: { source: 'app', target: 'ext', name: 'register' }, classes: 'app' }]
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function demoExtension() {
  var eles = this;
  var cy = this.cy();

  console.log('demoExtension', eles.style());

  // your extension impl...

  return this; // chainability
}

module.exports = {
  demoExtension: demoExtension
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
var main = __webpack_require__(0);

document.addEventListener('DOMContentLoaded', function () {
  var cy = window.cy = main();
  // demo your collection ext
  cy.elements().demoExtension();
} /* args... */);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  style: [{
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
  }, {
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
  }, {
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
  }, {
    selector: '#core, #app',
    style: {
      'shape': 'rectangle',
      'width': 120,
      'height': 120,
      'font-size': 25
    }
  }, {
    selector: '#api',
    style: {
      'padding-top': 20,
      'padding-left': 20,
      'padding-bottom': 20,
      'padding-right': 20
    }
  }, {
    selector: '#ext, .ext',
    style: {
      'background-color': '#93CDDD',
      'text-outline-color': '#93CDDD',
      'line-color': '#93CDDD',
      'target-arrow-color': '#93CDDD'
    }
  }, {
    selector: '#app, .app',
    style: {
      'background-color': '#F79646',
      'text-outline-color': '#F79646',
      'line-color': '#F79646',
      'target-arrow-color': '#F79646',
      'text-outline-width': 5,
      'color': '#fff'
    }
  }, {
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
  }]
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ZDc2YTBlMzJhZGY2YzY2NGVjMSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVnaXN0ZXJFeHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJzdHlsZSIsImVsZW1lbnRzIiwibWFpbiIsImN5dG9zY2FwZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsYXlvdXQiLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlbW9FeHRlbnNpb24iLCJyZWdpc3RlciIsIm5vZGVzIiwiZGF0YSIsImlkIiwicGFyZW50IiwicG9zaXRpb24iLCJ4IiwieSIsImdyYWJiYWJsZSIsImNsYXNzZXMiLCJlZGdlcyIsInNvdXJjZSIsInRhcmdldCIsImVsZXMiLCJjeSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2VsZWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLDJDQUEyQyxjQUFjOztRQUV6RDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Y0FBVSxZQURaO0FBRUUvQixXQUFPO0FBQ0wsMEJBQW9CLFNBRGY7QUFFTCw0QkFBc0IsU0FGakI7QUFHTCxvQkFBYyxTQUhUO0FBSUwsNEJBQXNCLFNBSmpCO0FBS0wsNEJBQXNCLENBTGpCO0FBTUwsZUFBUztBQU5KO0FBRlQsR0FwRUssRUErRUw7QUFDRStCLGNBQVUsS0FEWjtBQUVFL0IsV0FBTztBQUNMLDRCQUFzQixDQURqQjtBQUVMLHNCQUFnQixDQUZYO0FBR0wsc0JBQWdCLE1BSFg7QUFJTCx3QkFBa0IsR0FKYjtBQUtMLG1CQUFhLEVBTFI7QUFNTCxxQkFBZSxFQU5WO0FBT0wsc0JBQWdCLEVBUFg7QUFRTCx3QkFBa0IsRUFSYjtBQVNMLHVCQUFpQjtBQVRaO0FBRlQsR0EvRUs7QUFEUSxDQUFqQixDIiwiZmlsZSI6ImRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVDdXN0b21TdHlsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeXRvc2NhcGVDdXN0b21TdHlsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkNzZhMGUzMmFkZjZjNjY0ZWMxIiwiY29uc3Qge3N0eWxlfSA9IHJlcXVpcmUoJy4vc3R5bGVzJylcbmNvbnN0IHtlbGVtZW50c30gPSByZXF1aXJlKCcuL2VsZW1lbnRzJylcblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgcmV0dXJuIGN5dG9zY2FwZSh7XG4gICAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3knKSxcbiAgICBsYXlvdXQ6IHtuYW1lOiAncHJlc2V0J30sXG4gICAgc3R5bGUsXG4gICAgZWxlbWVudHNcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFpblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJjb25zdCB7ZGVtb0V4dGVuc2lvbn0gPSByZXF1aXJlKCcuL2V4dGVuc2lvbicpO1xuXG4vLyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBvbiBhIGN5dG9zY2FwZSBsaWIgcmVmXG5sZXQgcmVnaXN0ZXIgPSBmdW5jdGlvbiggY3l0b3NjYXBlICl7XG4gIGlmKCAhY3l0b3NjYXBlICl7IHJldHVybjsgfSAvLyBjYW4ndCByZWdpc3RlciBpZiBjeXRvc2NhcGUgdW5zcGVjaWZpZWRcblxuICBjeXRvc2NhcGUoICdjb2xsZWN0aW9uJywgJ2RlbW9FeHRlbnNpb24nLCBkZW1vRXh0ZW5zaW9uICk7IC8vIHJlZ2lzdGVyIHdpdGggY3l0b3NjYXBlLmpzXG59O1xuXG5pZiggdHlwZW9mIGN5dG9zY2FwZSAhPT0gJ3VuZGVmaW5lZCcgKXsgLy8gZXhwb3NlIHRvIGdsb2JhbCBjeXRvc2NhcGUgKGkuZS4gd2luZG93LmN5dG9zY2FwZSlcbiAgcmVnaXN0ZXIoIGN5dG9zY2FwZSApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZ2lzdGVyRXh0ZW5zaW9ucy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBlbGVtZW50czoge1xuICAgIG5vZGVzOiBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IHsgaWQ6ICdjeScsIG5hbWU6ICdDeXRvc2NhcGUuanMnIH0sXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGRhdGE6IHsgaWQ6ICdjb3JlJywgbmFtZTogJ0NvcmUnLCBwYXJlbnQ6ICdhcGknIH0sXG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgZ3JhYmJhYmxlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGRhdGE6IHsgaWQ6ICdlbGVzJywgbmFtZTogJ0NvbGxlY3Rpb24nLCBwYXJlbnQ6ICdhcGknIH0sXG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IDE1MCwgeTogMTUwIH0sXG4gICAgICAgIGdyYWJiYWJsZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgZGF0YTogeyBpZDogJ3N0eWxlJywgbmFtZTogJ1N0eWxlc2hlZXQnLCBwYXJlbnQ6ICdhcGknIH0sXG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDE1MCB9LFxuICAgICAgICBncmFiYmFibGU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGRhdGE6IHsgaWQ6ICdzZWxlY3RvcicsIG5hbWU6ICdTZWxlY3RvcicsIHBhcmVudDogJ2FwaScgfSxcbiAgICAgICAgcG9zaXRpb246IHsgeDogLTE1MCwgeTogMTUwIH0sXG4gICAgICAgIGdyYWJiYWJsZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgZGF0YTogeyBpZDogJ2V4dCcsIG5hbWU6ICdFeHRlbnNpb25zJywgcGFyZW50OiAnY3knIH1cbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgZGF0YTogeyBpZDogJ2NvcmVmbicsIG5hbWU6ICdDb3JlIEZ1bmN0aW9uJywgcGFyZW50OiAnZXh0JyB9LFxuICAgICAgICBjbGFzc2VzOiAnZXh0JyxcbiAgICAgICAgcG9zaXRpb246IHsgeDogMzUwLCB5OiAtMTQwIH1cbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgZGF0YTogeyBpZDogJ2VsZXNmbicsIG5hbWU6ICdDb2xsZWN0aW9uIEZ1bmN0aW9uJywgcGFyZW50OiAnZXh0JyB9LFxuICAgICAgICBjbGFzc2VzOiAnZXh0JyxcbiAgICAgICAgcG9zaXRpb246IHsgeDogMzUwLCB5OiAwIH1cbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgZGF0YTogeyBpZDogJ2xheW91dCcsIG5hbWU6ICdMYXlvdXQnLCBwYXJlbnQ6ICdleHQnIH0sXG4gICAgICAgIGNsYXNzZXM6ICdleHQnLFxuICAgICAgICBwb3NpdGlvbjogeyB4OiAzNTAsIHk6IDE0MCB9XG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGRhdGE6IHsgaWQ6ICdyZW5kZXJlcicsIG5hbWU6ICdSZW5kZXJlcicsIHBhcmVudDogJ2V4dCcgfSxcbiAgICAgICAgY2xhc3NlczogJ2V4dCcsXG4gICAgICAgIHBvc2l0aW9uOiB7IHg6IDM1MCwgeTogMjgwIH1cbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgZGF0YTogeyBpZDogJ2FwaScsIG5hbWU6ICdDb3JlIEFQSScsIHBhcmVudDogJ2N5JyB9XG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIGRhdGE6IHsgaWQ6ICdhcHAnLCBuYW1lOiAnQ2xpZW50JyB9LFxuICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiA0ODAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgZWRnZXM6IFtcbiAgICAgIHsgZGF0YTogeyBzb3VyY2U6ICdjb3JlJywgdGFyZ2V0OiAnZWxlcycgfSB9LFxuICAgICAgeyBkYXRhOiB7IHNvdXJjZTogJ2NvcmUnLCB0YXJnZXQ6ICdleHQnIH0gfSxcbiAgICAgIHsgZGF0YTogeyBzb3VyY2U6ICdjb3JlJywgdGFyZ2V0OiAnc3R5bGUnIH0gfSxcbiAgICAgIHsgZGF0YTogeyBzb3VyY2U6ICdzdHlsZScsIHRhcmdldDogJ3NlbGVjdG9yJyB9IH0sXG4gICAgICB7IGRhdGE6IHsgc291cmNlOiAnY29yZScsIHRhcmdldDogJ3NlbGVjdG9yJyB9IH0sXG4gICAgICB7IGRhdGE6IHsgc291cmNlOiAnZWxlc2ZuJywgdGFyZ2V0OiAnZWxlcycgfSwgY2xhc3NlczogJ2V4dCcgfSxcbiAgICAgIHsgZGF0YTogeyBzb3VyY2U6ICdjb3JlZm4nLCB0YXJnZXQ6ICdhcGknIH0sIGNsYXNzZXM6ICdleHQnIH0sXG4gICAgICB7IGRhdGE6IHsgc291cmNlOiAnbGF5b3V0JywgdGFyZ2V0OiAnYXBpJyB9LCBjbGFzc2VzOiAnZXh0JyB9LFxuICAgICAgeyBkYXRhOiB7IHNvdXJjZTogJ3JlbmRlcmVyJywgdGFyZ2V0OiAnYXBpJyB9LCBjbGFzc2VzOiAnZXh0JyB9LFxuICAgICAgeyBkYXRhOiB7IHNvdXJjZTogJ2FwcCcsIHRhcmdldDogJ2FwaScsIG5hbWU6ICd1c2UnIH0sIGNsYXNzZXM6ICdhcHAnIH0sXG4gICAgICB7IGRhdGE6IHsgc291cmNlOiAnYXBwJywgdGFyZ2V0OiAnZXh0JywgbmFtZTogJ3JlZ2lzdGVyJyB9LCBjbGFzc2VzOiAnYXBwJyB9XG4gICAgXVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZWxlbWVudHMuanMiLCJmdW5jdGlvbiBkZW1vRXh0ZW5zaW9uKCl7XG4gIGxldCBlbGVzID0gdGhpcztcbiAgbGV0IGN5ID0gdGhpcy5jeSgpO1xuXG4gIGNvbnNvbGUubG9nKCdkZW1vRXh0ZW5zaW9uJywgZWxlcy5zdHlsZSgpKVxuXG4gIC8vIHlvdXIgZXh0ZW5zaW9uIGltcGwuLi5cblxuICByZXR1cm4gdGhpczsgLy8gY2hhaW5hYmlsaXR5XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZW1vRXh0ZW5zaW9uXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXh0ZW5zaW9uL2luZGV4LmpzIiwicmVxdWlyZSgnLi9yZWdpc3RlckV4dGVuc2lvbnMnKVxuY29uc3QgbWFpbiA9IHJlcXVpcmUoJy4vbWFpbicpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuICBjb25zdCBjeSA9IHdpbmRvdy5jeSA9IG1haW4oKVxuICAvLyBkZW1vIHlvdXIgY29sbGVjdGlvbiBleHRcbiAgY3kuZWxlbWVudHMoKS5kZW1vRXh0ZW5zaW9uKCAvKiBhcmdzLi4uICovICk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBzdHlsZTogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnbm9kZScsXG4gICAgICBzdHlsZToge1xuICAgICAgICAnY29udGVudCc6ICdkYXRhKG5hbWUpJyxcbiAgICAgICAgJ3RleHQtdmFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICdjb2xvcic6ICd3aGl0ZScsXG4gICAgICAgICd0ZXh0LW91dGxpbmUtd2lkdGgnOiA1LFxuICAgICAgICAndGV4dC1vdXRsaW5lLWNvbG9yJzogJyM4ODgnLFxuICAgICAgICAnd2lkdGgnOiA4MCxcbiAgICAgICAgJ2hlaWdodCc6IDgwXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2VkZ2UnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgJ2NvbnRlbnQnOiAnZGF0YShuYW1lKScsXG4gICAgICAgICd3aWR0aCc6IDgsXG4gICAgICAgICdsaW5lLWNvbG9yJzogJyM4ODgnLFxuICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyM4ODgnLFxuICAgICAgICAnc291cmNlLWFycm93LWNvbG9yJzogJyM4ODgnLFxuICAgICAgICAndGFyZ2V0LWFycm93LXNoYXBlJzogJ3RyaWFuZ2xlJyxcbiAgICAgICAgJ2N1cnZlLXN0eWxlJzogJ3RheGknXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyRub2RlID4gbm9kZScsXG4gICAgICBzdHlsZToge1xuICAgICAgICAnc2hhcGUnOiAncm91bmRyZWN0YW5nbGUnLFxuICAgICAgICAndGV4dC12YWxpZ24nOiAndG9wJyxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2NjYycsXG4gICAgICAgICdjb2xvcic6ICcjODg4JyxcbiAgICAgICAgJ3RleHQtb3V0bGluZS13aWR0aCc6IDAsXG4gICAgICAgICdmb250LXNpemUnOiAyNSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWZpbGxcIjogXCJsaW5lYXItZ3JhZGllbnRcIixcbiAgICAgICAgLy8gbGVmdCBib3JkZXIuLi5jYXZlYXQ6IGl0cyBhbHdheXMgcmVsYXRpdmUgKDUlLCAxMCUpXG4gICAgICAgIFwiYmFja2dyb3VuZC1ncmFkaWVudC1kaXJlY3Rpb25cIjogXCJ0by1yaWdodFwiLFxuICAgICAgICBcImJhY2tncm91bmQtZ3JhZGllbnQtc3RvcC1jb2xvcnNcIjogXCJncmVlbiBncmVlbiBibGFjayBibGFja1wiLFxuICAgICAgICBcImJhY2tncm91bmQtZ3JhZGllbnQtc3RvcC1wb3NpdGlvbnNcIjogXCIwIDUgNSAxMDBcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjY29yZSwgI2FwcCcsXG4gICAgICBzdHlsZToge1xuICAgICAgICAnc2hhcGUnOiAncmVjdGFuZ2xlJyxcbiAgICAgICAgJ3dpZHRoJzogMTIwLFxuICAgICAgICAnaGVpZ2h0JzogMTIwLFxuICAgICAgICAnZm9udC1zaXplJzogMjVcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2FwaScsXG4gICAgICBzdHlsZToge1xuICAgICAgICAncGFkZGluZy10b3AnOiAyMCxcbiAgICAgICAgJ3BhZGRpbmctbGVmdCc6IDIwLFxuICAgICAgICAncGFkZGluZy1ib3R0b20nOiAyMCxcbiAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiAyMFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2V4dCwgLmV4dCcsXG4gICAgICBzdHlsZToge1xuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjOTNDREREJyxcbiAgICAgICAgJ3RleHQtb3V0bGluZS1jb2xvcic6ICcjOTNDREREJyxcbiAgICAgICAgJ2xpbmUtY29sb3InOiAnIzkzQ0RERCcsXG4gICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzkzQ0RERCcsXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNhcHAsIC5hcHAnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI0Y3OTY0NicsXG4gICAgICAgICd0ZXh0LW91dGxpbmUtY29sb3InOiAnI0Y3OTY0NicsXG4gICAgICAgICdsaW5lLWNvbG9yJzogJyNGNzk2NDYnLFxuICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNGNzk2NDYnLFxuICAgICAgICAndGV4dC1vdXRsaW5lLXdpZHRoJzogNSxcbiAgICAgICAgJ2NvbG9yJzogJyNmZmYnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNjeScsXG4gICAgICBzdHlsZToge1xuICAgICAgICAnYmFja2dyb3VuZC1vcGFjaXR5JzogMCxcbiAgICAgICAgJ2JvcmRlci13aWR0aCc6IDEsXG4gICAgICAgICdib3JkZXItY29sb3InOiAnI2FhYScsXG4gICAgICAgICdib3JkZXItb3BhY2l0eSc6IDAuNSxcbiAgICAgICAgJ2ZvbnQtc2l6ZSc6IDUwLFxuICAgICAgICAncGFkZGluZy10b3AnOiA0MCxcbiAgICAgICAgJ3BhZGRpbmctbGVmdCc6IDQwLFxuICAgICAgICAncGFkZGluZy1ib3R0b20nOiA0MCxcbiAgICAgICAgJ3BhZGRpbmctcmlnaHQnOiA0MFxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=