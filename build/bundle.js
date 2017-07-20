(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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
        key: "render",
        value: function render(data) {
            this.view.render(data);
        }
    }, {
        key: "setView",
        value: function setView(hash) {
            var _this = this;

            //        console.log('setView fired. Hash: ', hash);

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

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* jshint esversion:6, browser:true */

var App = function App() {
    _classCallCheck(this, App);

    this.el = document.getElementById('router-target');

    var model = new _model2.default();
    var view = new _view2.default();

    this.controller = new _controller2.default(model, view);
    this.router = new _router2.default();
};

var app = new App();

// event handler calls controller's 'setView' method with URI hash
var setView = function setView() {
    app.controller.setView(document.location.hash);
};

// event handler calls router's 'route' method
var doRoute = function doRoute() {
    app.router.route(app.el);
};

// define routes
app.router.add_route('/', 'home', setView);
app.router.add_route('/about', 'about', setView);
app.router.add_route('/contact', 'contact', setView);
app.router.add_route('/portfolio', 'portfolio', setView);

//console.log('routes from Main: ', app.router.routes);
//console.log('element from Main: ', app.router.element);

// register event listeners
(0, _util.$on)(window, 'load', doRoute);
(0, _util.$on)(window, 'hashchange', doRoute);

},{"./controller":1,"./model":3,"./router":4,"./util":7,"./view":8}],3:[function(require,module,exports){
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

},{"./service":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* jshint esversion:6, browser:true, devel:true */

/* ============================ utility methods ============================ */

function parse_params(param_string) {
    var input_params_arr = param_string.split('&');
    var params = {};
    var j = 0;

    input_params_arr.forEach(function (input_param) {

        // convert input param to array of key, value
        var param = input_param.split('=');

        if (param.length === 2) {

            // if [key, value] then {key: value}
            params[param[0]] = param[1];
        } else if (param.length === 1) {

            // else, {j: key}
            params[j] = param[0];
            j += 1;
        } else {
            console.log('bad param - die!');
        }
    });

    return params;
}

/* =========================== class definition ============================ */

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.routes = {};
    }

    /* route registering function
     *
     * @param   [string]     path          [URL to route to]
     * @param   [string]     template_id   [template for the route]
     * @param   [function]   controller    [controller associated with route]
    */


    _createClass(Router, [{
        key: 'add_route',
        value: function add_route(path, template_id, controller) {
            this.routes[path] = {
                template_id: template_id,
                controller: controller
            };
        }

        /* router
         *
         * @param   [string]   url   [destination]
        */

    }, {
        key: 'route',
        value: function route(el) {
            var hash_frag = location.hash.slice(1) || '/';

            // deal with query params
            var route_pieces = hash_frag.split('?'),
                base_route = route_pieces[0],
                route_split = route_pieces.length,
                params = route_split > 1 ? parse_params(route_pieces[1]) : null;

            console.log('======= Router Diagnostics =======');
            console.log('hash fragment : ', hash_frag);
            console.log('route_pieces  : ', route_pieces);
            console.log('route_split   : ', route_split);
            console.log('params        : ', params);

            // capture specific route object from 'routes'
            var route = this.routes[base_route];

            if (el && route.controller) {
                route.controller(params);
                el.innerHTML = hash_frag;
            }
        }
    }]);

    return Router;
}();

exports.default = Router;

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
            this.target.innerHTML = (0, _template.gallery_list)(data);
        }
    }]);

    return View;
}();

exports.default = View;

},{"./template":6}]},{},[2])

//# sourceMappingURL=bundle.js.map
