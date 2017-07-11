(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esversion:6, devel: true */

var Controller = function () {
    function Controller(model, view) {
        _classCallCheck(this, Controller);

        this.model = model;
        this.view = view;
    }

    _createClass(Controller, [{
        key: 'render',
        value: function render(data) {
            this.view.render(data);
        }
    }, {
        key: 'setView',
        value: function setView(hash) {
            var _this = this;

            console.log('setView fired. Hash: ', hash);

            // router in here?
            // this.router.route(hash)   // ???
            //     .then( data => this.render(data) );   // ???

            this.model.getGalleries().then(function (data) {
                return _this.render(data);
            });
        }
    }]);

    return Controller;
}();

exports.default = Controller;

},{}],2:[function(require,module,exports){
'use strict';

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _util = require('./util');

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* jshint esversion:6, browser:true */

var App = function App() {
    _classCallCheck(this, App);

    var model = new _model2.default();
    var view = new _view2.default();
    this.controller = new _controller2.default(model, view);
};

var app = new App();

// evnet handler calls controller's 'setView' method with URI hash
var setView = function setView() {
    app.controller.setView(document.location.hash);
};

// register event listeners
(0, _util.$on)(window, 'load', setView);
(0, _util.$on)(window, 'hashchange', setView);

},{"./controller":1,"./model":3,"./util":6,"./view":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion:6, devel:true */

var _service = require('./service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
    function Model() {
        _classCallCheck(this, Model);
    }

    /* fetch galleries
    */


    _createClass(Model, [{
        key: 'getGalleries',
        value: function getGalleries() {
            return (0, _service.getJSON)('src/js/mock.json').then(function (galleries) {
                return galleries;
            });
        }
    }]);

    return Model;
}();

exports.default = Model;

},{"./service":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* jshint esversion:6, browser:true */

var getJSON = function getJSON(url) {
    var xhr = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.responseText);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    });
};

exports.getJSON = getJSON;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    <div class="gallery-link">\n        <a href="', '">\n            <div class="gallery-link-img" style="background-image: url(', ')"></div>\n            <div class="gallery-link-title">\n                ', '\n            </div>\n        </a>\n    </div>\n'], ['\n    <div class="gallery-link">\n        <a href="', '">\n            <div class="gallery-link-img" style="background-image: url(', ')"></div>\n            <div class="gallery-link-title">\n                ', '\n            </div>\n        </a>\n    </div>\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    <div class="gallery-list">\n        ', '\n    </div>\n'], ['\n    <div class="gallery-list">\n        ', '\n    </div>\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* jshint esversion:6 */

/* utility method for easy templating of repeating html elements
 *
 * @params  [array]  literalsArr   [array of all the literal secti
 * @params  [array]  ...cooked     [rest param: all the proccessed expressions]
 * @returns [string]               [the processed string]
*/
var html = function html(literalsArr) {
    for (var _len = arguments.length, cooked = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        cooked[_key - 1] = arguments[_key];
    }

    var result = '';

    cooked.forEach(function (cook, indx) {
        var lit = literalsArr[indx];
        if (Array.isArray(cook)) {
            cook = cook.join('');
        }
        result += lit;
        result += cook;
    });
    result += literalsArr[literalsArr.length - 1];
    return result;
};

/* generate gallery link
*/
var gallery_link = function gallery_link(gallery) {
    return html(_templateObject, gallery.link_url, gallery.img_url, gallery.title);
};

/* generate grid list of galleries
*/
var gallery_list = function gallery_list(galleries) {
    return html(_templateObject2, galleries.map(function (gallery) {
        return gallery_link(gallery);
    }));
};

exports.gallery_list = gallery_list;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* jshint esversion:6, browser:true */

/* register handler to an event emitted by a target */
var $on = function $on(target, event, handler) {
    return target.addEventListener(event, handler);
};

exports.$on = $on;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion:6, browser: true */

var _template = require('./template');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View() {
        _classCallCheck(this, View);

        this.target = document.getElementById('target');
    }

    _createClass(View, [{
        key: 'render',
        value: function render(data) {
            console.log(data);
            this.target.innerHTML = (0, _template.gallery_list)(data);
        }
    }]);

    return View;
}();

exports.default = View;

},{"./template":5}]},{},[2])

//# sourceMappingURL=bundle.js.map
