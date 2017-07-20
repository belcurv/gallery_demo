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
        value: function render() {
            this.view.render();
        }
    }, {
        key: "setView",
        value: function setView() {

            this.render();
        }
    }]);

    return Controller;
}();

exports.default = Controller;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* jshint esversion:6, devel: true */

// expects (target element, template, params)
// route.controller(el, route.template, hash_frag);

function aboutCtrl(el, template, data) {

    console.log('AboutController > setView fired.');
    el.innerHTML = template(data);
}

exports.aboutCtrl = aboutCtrl;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* jshint esversion:6, devel: true */

// expects (target element, template, params)
// route.controller(el, route.template, hash_frag);

function contactCtrl(el, template, data) {

    console.log('Contact Controller fired.');
    el.innerHTML = template(data);
}

exports.contactCtrl = contactCtrl;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* jshint esversion:6, devel: true */

// expects (target element, template, params)
// route.controller(el, route.template, hash_frag);

function homeCtrl(el, template, data) {

    console.log('HomeController fired.');
    el.innerHTML = template(data);
}

exports.homeCtrl = homeCtrl;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.portfolioCtrl = undefined;

var _service = require('../service');

function portfolioCtrl(el, template, data) {

    console.log('Portfolio Controller fired.');

    (0, _service.getJSON)('src/js/mock.json').then(function (galeries) {
        el.innerHTML = template(galeries);
    });
} /* jshint esversion:6, devel: true */

exports.portfolioCtrl = portfolioCtrl;

},{"../service":10}],6:[function(require,module,exports){
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

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* jshint esversion:6, browser:true */

var App = function App() {
    _classCallCheck(this, App);

    this.el = document.getElementById('target');

    var model = new _model2.default();
    var view = new _view2.default();

    this.controller = new _controller2.default(model, view);
    this.router = new _router2.default();
};

var app = new App();

app.controller.setView();

// define routes
app.router.add_routes(_routes.routes);

// event handler calls router's 'route' method
var doRoute = function doRoute() {
    app.router.route(app.el);
};

// register event listeners
(0, _util.$on)(window, 'load', doRoute);
(0, _util.$on)(window, 'hashchange', doRoute);

},{"./controller":1,"./model":7,"./router":8,"./routes":9,"./util":16,"./view":17}],7:[function(require,module,exports){
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

},{"./service":10}],8:[function(require,module,exports){
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
     * @param   [object]   allRoutes
     *                       .path         [URL to route to]
     *                       .template     [template function]
     *                       .controller   [controller function]
    */


    _createClass(Router, [{
        key: 'add_routes',
        value: function add_routes(all_routes) {

            for (var route in all_routes) {

                var r = all_routes[route];

                this.routes[r.path] = {
                    template: r.template,
                    controller: r.controller
                };
            }
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

            // redirect to home on invalid route
            if (!route) {
                route = this.routes['/'];
            }

            // if there's an element & controller, execute the route
            if (el && route.controller) {
                route.controller(el, route.template, hash_frag);
            }
        }
    }]);

    return Router;
}();

exports.default = Router;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routes = undefined;

var _homeCtrl = require('./controllers/home.ctrl.js');

var _homeTpl = require('./templates/home.tpl.js');

var _aboutCtrl = require('./controllers/about.ctrl.js');

var _aboutTpl = require('./templates/about.tpl.js');

var _contactCtrl = require('./controllers/contact.ctrl.js');

var _contactTpl = require('./templates/contact.tpl.js');

var _portfolioCtrl = require('./controllers/portfolio.ctrl.js');

var _portfolioTpl = require('./templates/portfolio.tpl.js');

/* jshint esversion:6 */

var routes = {

    home: {
        path: '/',
        template: _homeTpl.homeTpl,
        controller: _homeCtrl.homeCtrl
    },

    about: {
        path: '/about',
        template: _aboutTpl.aboutTpl,
        controller: _aboutCtrl.aboutCtrl
    },

    contact: {
        path: '/contact',
        template: _contactTpl.contactTpl,
        controller: _contactCtrl.contactCtrl
    },

    portfolio: {
        path: '/portfolio',
        template: _portfolioTpl.gallery_list,
        controller: _portfolioCtrl.portfolioCtrl
    }

};

exports.routes = routes;

},{"./controllers/about.ctrl.js":2,"./controllers/contact.ctrl.js":3,"./controllers/home.ctrl.js":4,"./controllers/portfolio.ctrl.js":5,"./templates/about.tpl.js":12,"./templates/contact.tpl.js":13,"./templates/home.tpl.js":14,"./templates/portfolio.tpl.js":15}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    <div class="app-shell-head">\n        <div class="app-shell-head-logo">\n            <a href="#/"><h1>Photo Gallery Demo</h1></a>\n        </div>\n        <div class="app-shell-head-nav">\n            <ul>\n                <li><a href="#/about">About</a></li>\n                <li><a href="#/contact">Contact</a></li>\n                <li><a href="#/portfolio">Portfolio</a></li>\n            </ul>\n        </div>\n    </div>\n'], ['\n    <div class="app-shell-head">\n        <div class="app-shell-head-logo">\n            <a href="#/"><h1>Photo Gallery Demo</h1></a>\n        </div>\n        <div class="app-shell-head-nav">\n            <ul>\n                <li><a href="#/about">About</a></li>\n                <li><a href="#/contact">Contact</a></li>\n                <li><a href="#/portfolio">Portfolio</a></li>\n            </ul>\n        </div>\n    </div>\n']);

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

/* generate grid list of galleries
*/
var mainTpl = function mainTpl() {
    return html(_templateObject);
};

exports.mainTpl = mainTpl;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    <h2>About</h2>\n    <p>Lorem ipsum dolor sit amet, qui dico erat intellegebat an, at his munere erroribus mediocritatem. Equidem principes est ad, has ei vide diceret. Pro oblique posidonium repudiandae no, putent doctus ocurreret ex eam. Facer semper assueverit an mei, in nec altera nonumes veritus. His dolores invenire dissentiunt ei, eros tation sapientem nec ad, unum maiorum fierent ne ius. At harum aeterno vim, id dicam utroque pri, ne aperiam dissentias sed. Duo ad dolore voluptua, facer doctus placerat his no, mel an elit offendit.</p>\n\n    <p>Quas deleniti imperdiet ad sed, eam in mundi affert corrumpit. Ex eos utinam timeam consequat, duo et dico audiam vituperatoribus, eum cu tacimates mandamus ullamcorper. Cu admodum persequeris definitiones cum, eu his audiam complectitur. Appetere eloquentiam ex mel, summo ullamcorper vituperatoribus in vim, ut natum eripuit euismod cum. Ex eleifend conceptam cum, mei ei aeterno officiis mnesarchum.</p>\n\n    <p>Mei in debet aliquip. Id dictas tacimates voluptatibus eum, tollit suavitate expetendis te has, sea oblique dolorem ne. Te qui affert delectus mediocrem, te sed vidisse ponderum, modus nusquam probatus te sea. Nec id utamur periculis.</p>\n\n    <p>Bonorum iracundia inciderint pro eu, quo ei impedit partiendo tincidunt, odio dolores duo ne. Sea et eros fugit interesset, quo mucius efficiendi eloquentiam eu. Vis causae inermis reformidans ex. Sit te voluptua repudiare, eum tota ludus no, eu pro iudico inimicus.</p>\n\n    <p>Mea id solet equidem graecis, atqui assentior adipiscing ius id, eum scripserit dissentiet ea. Quo ne decore latine, eu homero vituperatoribus his, no falli graece vim. Novum facilisis ut mea, an cum probo legere dolorem, omnium dolores accusamus eum te. Rebum gloriatur qui ea, augue posidonium per in. In impedit facilis deseruisse vim.</p>\n'], ['\n    <h2>About</h2>\n    <p>Lorem ipsum dolor sit amet, qui dico erat intellegebat an, at his munere erroribus mediocritatem. Equidem principes est ad, has ei vide diceret. Pro oblique posidonium repudiandae no, putent doctus ocurreret ex eam. Facer semper assueverit an mei, in nec altera nonumes veritus. His dolores invenire dissentiunt ei, eros tation sapientem nec ad, unum maiorum fierent ne ius. At harum aeterno vim, id dicam utroque pri, ne aperiam dissentias sed. Duo ad dolore voluptua, facer doctus placerat his no, mel an elit offendit.</p>\n\n    <p>Quas deleniti imperdiet ad sed, eam in mundi affert corrumpit. Ex eos utinam timeam consequat, duo et dico audiam vituperatoribus, eum cu tacimates mandamus ullamcorper. Cu admodum persequeris definitiones cum, eu his audiam complectitur. Appetere eloquentiam ex mel, summo ullamcorper vituperatoribus in vim, ut natum eripuit euismod cum. Ex eleifend conceptam cum, mei ei aeterno officiis mnesarchum.</p>\n\n    <p>Mei in debet aliquip. Id dictas tacimates voluptatibus eum, tollit suavitate expetendis te has, sea oblique dolorem ne. Te qui affert delectus mediocrem, te sed vidisse ponderum, modus nusquam probatus te sea. Nec id utamur periculis.</p>\n\n    <p>Bonorum iracundia inciderint pro eu, quo ei impedit partiendo tincidunt, odio dolores duo ne. Sea et eros fugit interesset, quo mucius efficiendi eloquentiam eu. Vis causae inermis reformidans ex. Sit te voluptua repudiare, eum tota ludus no, eu pro iudico inimicus.</p>\n\n    <p>Mea id solet equidem graecis, atqui assentior adipiscing ius id, eum scripserit dissentiet ea. Quo ne decore latine, eu homero vituperatoribus his, no falli graece vim. Novum facilisis ut mea, an cum probo legere dolorem, omnium dolores accusamus eum te. Rebum gloriatur qui ea, augue posidonium per in. In impedit facilis deseruisse vim.</p>\n']);

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
var aboutTpl = function aboutTpl(data) {
    return html(_templateObject);
};

exports.aboutTpl = aboutTpl;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    <h2>Contact</h2>\n    \n    <h3>Fill out our contact form below to get in touch with us!</h3>\n    <form>\n        <label for="name">Name:</label>\n        <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required" autofocus="autofocus" />\n         \n        <label for="email">Email Address:</label>\n        <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required" />\n         \n        <label for="telephone">Telephone: </label>\n        <input type="tel" id="telephone" name="telephone" value="" />\n         \n        <label for="enquiry">Enquiry: </label>\n        <select id="enquiry" name="enquiry">\n            <option value="general">General</option>\n            <option value="sales">Hire Me</option>\n        </select>\n         \n        <label for="message">Message:</label>\n        <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>\n         \n        <input type="submit" value="Submit" id="submit-button" />\n    </form>\n'], ['\n    <h2>Contact</h2>\n    \n    <h3>Fill out our contact form below to get in touch with us!</h3>\n    <form>\n        <label for="name">Name:</label>\n        <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required" autofocus="autofocus" />\n         \n        <label for="email">Email Address:</label>\n        <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required" />\n         \n        <label for="telephone">Telephone: </label>\n        <input type="tel" id="telephone" name="telephone" value="" />\n         \n        <label for="enquiry">Enquiry: </label>\n        <select id="enquiry" name="enquiry">\n            <option value="general">General</option>\n            <option value="sales">Hire Me</option>\n        </select>\n         \n        <label for="message">Message:</label>\n        <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>\n         \n        <input type="submit" value="Submit" id="submit-button" />\n    </form>\n']);

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
var contactTpl = function contactTpl() {
    return html(_templateObject);
};

exports.contactTpl = contactTpl;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    <h2>Welcome</h2>\n    \n    <h3>This is a Photo Gallery App written in vanilla ES6 JavaScript</h3>\n    <p>If you can read this, the app router sent you to the home page.</p>\n'], ['\n    <h2>Welcome</h2>\n    \n    <h3>This is a Photo Gallery App written in vanilla ES6 JavaScript</h3>\n    <p>If you can read this, the app router sent you to the home page.</p>\n']);

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
var homeTpl = function homeTpl(data) {
    return html(_templateObject);
};

exports.homeTpl = homeTpl;

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

        this.target = document.getElementById('header');
    }

    _createClass(View, [{
        key: 'render',
        value: function render() {
            console.log('Main View render() method fired!');
            console.log(this.target);
            this.target.innerHTML = (0, _template.mainTpl)();
        }
    }]);

    return View;
}();

exports.default = View;

},{"./template":11}]},{},[6])

//# sourceMappingURL=bundle.js.map
