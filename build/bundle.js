!function e(t,n,r){function l(i,a){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!a&&s)return s(i,!0);if(o)return o(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return l(n||e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)l(r[i]);return l}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.aboutCtrl=function(e,t,n){console.log("AboutController > setView fired."),e.innerHTML=t(n)}},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.contactCtrl=function(e,t,n){console.log("Contact Controller fired."),e.innerHTML=t(n)}},{}],3:[function(e,t,n){"use strict";function r(e){e.querySelectorAll("div.gallery-link").forEach(function(e){(0,s.$on)(e,"click",l)})}function l(e){e.target!==e.currentTarget&&o(e.target.dataset.link),e.stopPropagation()}function o(e){var t=document.querySelector("body"),n=document.createElement("div"),r=document.createElement("img");n.className="photo-modal",r.setAttribute("src",e),n.appendChild(r),t.appendChild(n),(0,s.$on)(n,"click",i),setTimeout(function(){r.style.opacity="1"},100)}function i(e){e.target===e.currentTarget&&this.remove(),e.stopPropagation()}Object.defineProperty(n,"__esModule",{value:!0}),n.galleryCtrl=void 0;var a=e("../service"),s=e("../util");n.galleryCtrl=function(e,t,n){(0,a.getJSON)("server/gallery-"+n+".json").then(function(n){return e.innerHTML=t(n),e}).then(r)}},{"../service":9,"../util":15}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.homeCtrl=function(e,t,n){console.log("HomeController fired."),e.innerHTML=t(n)}},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.portfolioCtrl=void 0;var r=e("../service");n.portfolioCtrl=function(e,t,n){console.log("Portfolio Controller fired."),console.log("Data passed to controller: "+n),(0,r.getJSON)("server/mock.json").then(function(n){e.innerHTML=t(n)})}},{"../service":9}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=e("./util"),o=function(e){return e&&e.__esModule?e:{default:e}}(e("./router")),i=e("./routes"),a=new function e(){r(this,e),this.el=document.getElementById("target"),this.router=new o.default};a.router.add_routes(i.routes);var s=function(){a.router.route(a.el)};(0,l.$on)(window,"load",s),(0,l.$on)(window,"hashchange",s)},{"./router":7,"./routes":8,"./util":15}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.routes={}}return l(e,[{key:"add_routes",value:function(e){for(var t in e){var n=e[t];this.routes[n.path]={template:n.template,controller:n.controller}}}},{key:"route",value:function(e){var t=(location.hash.slice(1)||"/").split("/"),n=t.map(function(e){return"/"+e}),r=t.length,l=t[3]||"",o=r>3?n[1]+n[2]:n[1],i=this.routes[o];i||(i=this.routes["/"]),e&&i.controller&&i.controller(e,i.template,l)}}]),e}();n.default=o},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.routes=void 0;var r=e("./controllers/home.ctrl.js"),l=e("./templates/home.tpl.js"),o=e("./controllers/about.ctrl.js"),i=e("./templates/about.tpl.js"),a=e("./controllers/contact.ctrl.js"),s=e("./templates/contact.tpl.js"),u=e("./controllers/portfolio.ctrl.js"),c=e("./templates/portfolio.tpl.js"),d=e("./controllers/gallery.ctrl.js"),p=e("./templates/gallery.tpl.js"),m={home:{path:"/",template:l.homeTpl,controller:r.homeCtrl},about:{path:"/about",template:i.aboutTpl,controller:o.aboutCtrl},contact:{path:"/contact",template:s.contactTpl,controller:a.contactCtrl},portfolio:{path:"/portfolio",template:c.portfolioTpl,controller:u.portfolioCtrl},gallery:{path:"/portfolio/gallery",template:p.galleryTpl,controller:d.galleryCtrl}};n.routes=m},{"./controllers/about.ctrl.js":1,"./controllers/contact.ctrl.js":2,"./controllers/gallery.ctrl.js":3,"./controllers/home.ctrl.js":4,"./controllers/portfolio.ctrl.js":5,"./templates/about.tpl.js":10,"./templates/contact.tpl.js":11,"./templates/gallery.tpl.js":12,"./templates/home.tpl.js":13,"./templates/portfolio.tpl.js":14}],9:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.getJSON=function(e){var t=new XMLHttpRequest;return new Promise(function(n,r){t.onreadystatechange=function(){4===t.readyState&&(200===t.status?n(JSON.parse(t.responseText)):r(t.responseText))},t.open("GET",e),t.send()})}},{}],10:[function(e,t,n){"use strict";function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.aboutTpl=void 0;var l=r(['\n    <li>\n        <div class="definition">\n            <strong>',"</strong> - ",'\n            (<a href="','" target="_blank"><em>MDN</em></a>)\n        </div>\n        <div class="example">\n            <pre><code>',"</code></pre>\n        </div>\n    </li>\n"],['\n    <li>\n        <div class="definition">\n            <strong>',"</strong> - ",'\n            (<a href="','" target="_blank"><em>MDN</em></a>)\n        </div>\n        <div class="example">\n            <pre><code>',"</code></pre>\n        </div>\n    </li>\n"]),o=r(["\n    <h1>About</h1>\n    <p>This app uses the following es2015 (es6) features and syntax:</p>\n    <ul>\n        ","\n    </ul>\n"],["\n    <h1>About</h1>\n    <p>This app uses the following es2015 (es6) features and syntax:</p>\n    <ul>\n        ","\n    </ul>\n"]),i=e("../util"),a=[{name:"classes",desc:"JavaScript classes introduced in ECMAScript 2015 are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",ex:"// main.js \n \nclass App {\n    constructor() {\n        this.el = document.getElementById('target');\n    }\n}\n\nconst app = new App();"},{name:"import/export",desc:"The import statement is used to import functions, objects or primitives that have been exported from an external module, another script, etc. The export statement is used to export functions, objects or primitives from a given file (or module).",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",ex:"// portfolio.ctrl.js\n\nimport { getJSON } from '../service';\n\nfunction portfolioCtrl(el, template, data) {\n\n    getJSON('server/mock.json')\n        .then( galeries => {\n            el.innerHTML = template(galeries);\n        });\n    }\n\nexport { portfolioCtrl };"},{name:"arrow functions",desc:"An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",ex:"// service.js\n\nconst getJSON = (url) => {\n    const xhr = new XMLHttpRequest();\n    return new Promise( (resolve, reject) => {\n        xhr.onreadystatechange = () => {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    resolve(JSON.parse(xhr.responseText));\n                } else {\n                    reject(xhr.responseText);\n                }\n            }\n        };\n        xhr.open('GET', url);\n        xhr.send();\n    });\n};\n"},{name:"rest operator",desc:"The rest parameter syntax allows us to represent an indefinite number of arguments as an array. If the last named argument of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters",ex:"// util.js\n\nconst html = (literalsArr, ...cooked) => {\n    let result = '';\n\n    cooked.forEach( (cook, indx) => {\n        let lit = literalsArr[indx];\n        if (Array.isArray(cook)) {\n            cook = cook.join('');\n        }\n        result += lit;\n        result += cook;\n    });\n    result += literalsArr[literalsArr.length - 1];\n    return result;\n};\n\nexport { html };\n"},{name:"tagged templates",desc:"A more advanced form of template literals are tagged template literals. Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions. In the end, your function can return your manipulated string (or it can return something completely different as described in the next example). The name of the function used for the tag can be named whatever you want.",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals",ex:'// gallery.tpl.js\n\n// import html util\nimport { html } from \'../util\';\n\n// generate gallery link\nconst image_link = (image) => html`\n    &ltdiv class="gallery-link Grid-cell"&gt\n        &ltdiv class="gallery-link-img"\n             data-link="${image.large}"\n             style="background-image: url(${image.thumb})"&gt\n        &lt/div&gt\n        &ltdiv class="gallery-link-title"&gt\n            ${image.alt}\n        &lt/div&gt\n    &lt/div&gt\n`;\n\n\n// generate grid list of galleries\nconst galleryTpl = (gallery) =&gt html`\n    &lth2&gt${gallery.title}&lt/h2&gt\n    &ltp&gt${gallery.description}&lt/p&gt\n    &ltdiv class="Grid Grid--gutters Grid--justifyCenter small-Grid--full\n                med-Grid--1of2 large-Grid--1of3 gallery-list"&gt\n        ${gallery.images.map( image =&gt image_link(image) )}\n    &lt/div&gt\n`;\n'}],s=function(e){return(0,i.html)(l,e.name,e.desc,e.url,e.ex)};n.aboutTpl=function(e){return(0,i.html)(o,a.map(function(e){return s(e)}))}},{"../util":15}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.contactTpl=void 0;var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <h2>Fake Contact Form</h2>\n    \n    <h3>Fill out our contact form below to get in touch with us!</h3>\n    <form>\n        <div class="Grid Grid--gutters Grid--1of2">\n            <div class="Grid-cell">\n                <label for="name">Name:</label>\n                <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required" autofocus="autofocus" />\n\n                <label for="email">Email Address:</label>\n                <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required" />\n\n                <label for="telephone">Telephone: </label>\n                <input type="tel" id="telephone" name="telephone" value="" />\n\n                <label for="enquiry">Enquiry: </label>\n                <select id="enquiry" name="enquiry">\n                    <option value="general">General</option>\n                    <option value="sales">Hire Me</option>\n                </select>\n            </div>\n\n            <div class="Grid-cell">\n                <label for="message">Message:</label>\n                <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>\n            </div>\n        </div>\n         \n        <button id="submit-button">Submit</button>\n    </form>\n'],['\n    <h2>Fake Contact Form</h2>\n    \n    <h3>Fill out our contact form below to get in touch with us!</h3>\n    <form>\n        <div class="Grid Grid--gutters Grid--1of2">\n            <div class="Grid-cell">\n                <label for="name">Name:</label>\n                <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required" autofocus="autofocus" />\n\n                <label for="email">Email Address:</label>\n                <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required" />\n\n                <label for="telephone">Telephone: </label>\n                <input type="tel" id="telephone" name="telephone" value="" />\n\n                <label for="enquiry">Enquiry: </label>\n                <select id="enquiry" name="enquiry">\n                    <option value="general">General</option>\n                    <option value="sales">Hire Me</option>\n                </select>\n            </div>\n\n            <div class="Grid-cell">\n                <label for="message">Message:</label>\n                <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>\n            </div>\n        </div>\n         \n        <button id="submit-button">Submit</button>\n    </form>\n']),l=e("../util");n.contactTpl=function(){return(0,l.html)(r)}},{"../util":15}],12:[function(e,t,n){"use strict";function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.galleryTpl=void 0;var l=r(['\n    <div class="gallery-link Grid-cell">\n        <div class="gallery-link-img" data-link="','" style="background-image: url(',')"></div>\n        <div class="gallery-link-title">\n            ',"\n        </div>\n    </div>\n"],['\n    <div class="gallery-link Grid-cell">\n        <div class="gallery-link-img" data-link="','" style="background-image: url(',')"></div>\n        <div class="gallery-link-title">\n            ',"\n        </div>\n    </div>\n"]),o=r(["\n    <h2>","</h2>\n    <p>",'</p>\n    <div class="Grid Grid--gutters Grid--justifyCenter small-Grid--full\n                med-Grid--1of2 large-Grid--1of3 gallery-list">\n        ',"\n    </div>\n"],["\n    <h2>","</h2>\n    <p>",'</p>\n    <div class="Grid Grid--gutters Grid--justifyCenter small-Grid--full\n                med-Grid--1of2 large-Grid--1of3 gallery-list">\n        ',"\n    </div>\n"]),i=e("../util"),a=function(e){return(0,i.html)(l,e.large,e.thumb,e.alt)};n.galleryTpl=function(e){return(0,i.html)(o,e.title,e.description,e.images.map(function(e){return a(e)}))}},{"../util":15}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.homeTpl=void 0;var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    <h1>Welcome</h1>\n    <h2>This is a Photographer's Portfolio demo written in vanilla JavaScript</h2>\n    <p>Purpose: to demonstrate a MVC-style single page application with client-side routing that employs no frameworks or libraries.</p>\n    <p>The app uses syntax and methods that debuted in es2015, including <em>classes</em>, <em>import/export</em>, <em>arrow functions</em>, <em>the rest operator</em>, and <em>tagged templates</em>.</p>\n    <p>The source is available on GitHub - see link in the footer.</p>\n"],["\n    <h1>Welcome</h1>\n    <h2>This is a Photographer's Portfolio demo written in vanilla JavaScript</h2>\n    <p>Purpose: to demonstrate a MVC-style single page application with client-side routing that employs no frameworks or libraries.</p>\n    <p>The app uses syntax and methods that debuted in es2015, including <em>classes</em>, <em>import/export</em>, <em>arrow functions</em>, <em>the rest operator</em>, and <em>tagged templates</em>.</p>\n    <p>The source is available on GitHub - see link in the footer.</p>\n"]),l=e("../util");n.homeTpl=function(e){return(0,l.html)(r)}},{"../util":15}],14:[function(e,t,n){"use strict";function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.portfolioTpl=void 0;var l=r(['\n    <div class="gallery-link Grid-cell">\n        <a href="','">\n            <div class="gallery-link-img"\n                        style="background-image: url(',')">\n            </div>\n            <div class="gallery-link-title">\n                ',"\n            </div>\n        </a>\n    </div>\n"],['\n    <div class="gallery-link Grid-cell">\n        <a href="','">\n            <div class="gallery-link-img"\n                        style="background-image: url(',')">\n            </div>\n            <div class="gallery-link-title">\n                ',"\n            </div>\n        </a>\n    </div>\n"]),o=r(['\n    <div class="Grid Grid--gutters Grid--justifyCenter small-Grid--full\n                med-Grid--1of2 large-Grid--1of3 gallery-list">\n        ',"\n    </div>\n"],['\n    <div class="Grid Grid--gutters Grid--justifyCenter small-Grid--full\n                med-Grid--1of2 large-Grid--1of3 gallery-list">\n        ',"\n    </div>\n"]),i=e("../util"),a=function(e){return(0,i.html)(l,e.link_url,e.img_url,e.title)};n.portfolioTpl=function(e){return(0,i.html)(o,e.map(function(e){return a(e)}))}},{"../util":15}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.$on=function(e,t,n){return e.addEventListener(t,n)},n.html=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var l="";return n.forEach(function(t,n){var r=e[n];Array.isArray(t)&&(t=t.join("")),l+=r,l+=t}),l+=e[e.length-1]}},{}]},{},[6]);
//# sourceMappingURL=bundle.js.map
