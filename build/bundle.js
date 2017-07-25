!function e(t,i,r){function n(l,a){if(!i[l]){if(!t[l]){var u="function"==typeof require&&require;if(!a&&u)return u(l,!0);if(o)return o(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var c=i[l]={exports:{}};t[l][0].call(c.exports,function(e){var i=t[l][1][e];return n(i||e)},c,c.exports,e,t,i,r)}return i[l].exports}for(var o="function"==typeof require&&require,l=0;l<r.length;l++)n(r[l]);return n}({1:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.aboutCtrl=function(e,t,i){console.log("AboutController > setView fired."),e.innerHTML=t(i)}},{}],2:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.contactCtrl=function(e,t,i){console.log("Contact Controller fired."),e.innerHTML=t(i)}},{}],3:[function(e,t,i){"use strict";function r(e){return e.querySelectorAll("div.gallery-link")}function n(e){e.forEach(function(e){(0,s.$on)(e,"click",o)})}function o(e){e.target!==e.currentTarget&&l(e.target,e.target.dataset.link),e.stopPropagation()}function l(e,t){var i=document.createElement("div"),r=document.createElement("img");i.className="photo-modal",r.setAttribute("src",t),i.appendChild(r),e.appendChild(i),(0,s.$on)(i,"click",a)}function a(e){e.target===e.currentTarget&&this.remove(),e.stopPropagation()}Object.defineProperty(i,"__esModule",{value:!0}),i.galleryCtrl=void 0;var u=e("../service"),s=e("../util");i.galleryCtrl=function(e,t,i){console.log("Gallery Controller fired."),console.log("Data passed to controller: "+i),(0,u.getJSON)("server/gallery-"+i+".json").then(function(i){return e.innerHTML=t(i),e}).then(r).then(n)}},{"../service":9,"../util":15}],4:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.homeCtrl=function(e,t,i){console.log("HomeController fired."),e.innerHTML=t(i)}},{}],5:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.portfolioCtrl=void 0;var r=e("../service");i.portfolioCtrl=function(e,t,i){console.log("Portfolio Controller fired."),console.log("Data passed to controller: "+i),(0,r.getJSON)("server/mock.json").then(function(i){e.innerHTML=t(i)})}},{"../service":9}],6:[function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=e("./util"),o=function(e){return e&&e.__esModule?e:{default:e}}(e("./router")),l=e("./routes"),a=new function e(){r(this,e),this.el=document.getElementById("target"),this.router=new o.default};a.router.add_routes(l.routes);var u=function(){a.router.route(a.el)};(0,n.$on)(window,"load",u),(0,n.$on)(window,"hashchange",u)},{"./router":7,"./routes":8,"./util":15}],7:[function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.routes={}}return n(e,[{key:"add_routes",value:function(e){for(var t in e){var i=e[t];this.routes[i.path]={template:i.template,controller:i.controller}}}},{key:"route",value:function(e){var t=(location.hash.slice(1)||"/").split("/"),i=t.map(function(e){return"/"+e}),r=t.length,n=t[3]||"",o=r>3?i[1]+i[2]:i[1],l=this.routes[o];l||(l=this.routes["/"]),e&&l.controller&&l.controller(e,l.template,n)}}]),e}();i.default=o},{}],8:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.routes=void 0;var r=e("./controllers/home.ctrl.js"),n=e("./templates/home.tpl.js"),o=e("./controllers/about.ctrl.js"),l=e("./templates/about.tpl.js"),a=e("./controllers/contact.ctrl.js"),u=e("./templates/contact.tpl.js"),s=e("./controllers/portfolio.ctrl.js"),c=e("./templates/portfolio.tpl.js"),d=e("./controllers/gallery.ctrl.js"),m=e("./templates/gallery.tpl.js"),p={home:{path:"/",template:n.homeTpl,controller:r.homeCtrl},about:{path:"/about",template:l.aboutTpl,controller:o.aboutCtrl},contact:{path:"/contact",template:u.contactTpl,controller:a.contactCtrl},portfolio:{path:"/portfolio",template:c.portfolioTpl,controller:s.portfolioCtrl},gallery:{path:"/portfolio/gallery",template:m.galleryTpl,controller:d.galleryCtrl}};i.routes=p},{"./controllers/about.ctrl.js":1,"./controllers/contact.ctrl.js":2,"./controllers/gallery.ctrl.js":3,"./controllers/home.ctrl.js":4,"./controllers/portfolio.ctrl.js":5,"./templates/about.tpl.js":10,"./templates/contact.tpl.js":11,"./templates/gallery.tpl.js":12,"./templates/home.tpl.js":13,"./templates/portfolio.tpl.js":14}],9:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.getJSON=function(e){var t=new XMLHttpRequest;return new Promise(function(i,r){t.onreadystatechange=function(){4===t.readyState&&(200===t.status?i(JSON.parse(t.responseText)):r(t.responseText))},t.open("GET",e),t.send()})}},{}],10:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.aboutTpl=void 0;var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    <h2>About</h2>\n    <p>Lorem ipsum dolor sit amet, qui dico erat intellegebat an, at his munere erroribus mediocritatem. Equidem principes est ad, has ei vide diceret. Pro oblique posidonium repudiandae no, putent doctus ocurreret ex eam. Facer semper assueverit an mei, in nec altera nonumes veritus. His dolores invenire dissentiunt ei, eros tation sapientem nec ad, unum maiorum fierent ne ius. At harum aeterno vim, id dicam utroque pri, ne aperiam dissentias sed. Duo ad dolore voluptua, facer doctus placerat his no, mel an elit offendit.</p>\n\n    <p>Quas deleniti imperdiet ad sed, eam in mundi affert corrumpit. Ex eos utinam timeam consequat, duo et dico audiam vituperatoribus, eum cu tacimates mandamus ullamcorper. Cu admodum persequeris definitiones cum, eu his audiam complectitur. Appetere eloquentiam ex mel, summo ullamcorper vituperatoribus in vim, ut natum eripuit euismod cum. Ex eleifend conceptam cum, mei ei aeterno officiis mnesarchum.</p>\n\n    <p>Mei in debet aliquip. Id dictas tacimates voluptatibus eum, tollit suavitate expetendis te has, sea oblique dolorem ne. Te qui affert delectus mediocrem, te sed vidisse ponderum, modus nusquam probatus te sea. Nec id utamur periculis.</p>\n\n    <p>Bonorum iracundia inciderint pro eu, quo ei impedit partiendo tincidunt, odio dolores duo ne. Sea et eros fugit interesset, quo mucius efficiendi eloquentiam eu. Vis causae inermis reformidans ex. Sit te voluptua repudiare, eum tota ludus no, eu pro iudico inimicus.</p>\n\n    <p>Mea id solet equidem graecis, atqui assentior adipiscing ius id, eum scripserit dissentiet ea. Quo ne decore latine, eu homero vituperatoribus his, no falli graece vim. Novum facilisis ut mea, an cum probo legere dolorem, omnium dolores accusamus eum te. Rebum gloriatur qui ea, augue posidonium per in. In impedit facilis deseruisse vim.</p>\n"],["\n    <h2>About</h2>\n    <p>Lorem ipsum dolor sit amet, qui dico erat intellegebat an, at his munere erroribus mediocritatem. Equidem principes est ad, has ei vide diceret. Pro oblique posidonium repudiandae no, putent doctus ocurreret ex eam. Facer semper assueverit an mei, in nec altera nonumes veritus. His dolores invenire dissentiunt ei, eros tation sapientem nec ad, unum maiorum fierent ne ius. At harum aeterno vim, id dicam utroque pri, ne aperiam dissentias sed. Duo ad dolore voluptua, facer doctus placerat his no, mel an elit offendit.</p>\n\n    <p>Quas deleniti imperdiet ad sed, eam in mundi affert corrumpit. Ex eos utinam timeam consequat, duo et dico audiam vituperatoribus, eum cu tacimates mandamus ullamcorper. Cu admodum persequeris definitiones cum, eu his audiam complectitur. Appetere eloquentiam ex mel, summo ullamcorper vituperatoribus in vim, ut natum eripuit euismod cum. Ex eleifend conceptam cum, mei ei aeterno officiis mnesarchum.</p>\n\n    <p>Mei in debet aliquip. Id dictas tacimates voluptatibus eum, tollit suavitate expetendis te has, sea oblique dolorem ne. Te qui affert delectus mediocrem, te sed vidisse ponderum, modus nusquam probatus te sea. Nec id utamur periculis.</p>\n\n    <p>Bonorum iracundia inciderint pro eu, quo ei impedit partiendo tincidunt, odio dolores duo ne. Sea et eros fugit interesset, quo mucius efficiendi eloquentiam eu. Vis causae inermis reformidans ex. Sit te voluptua repudiare, eum tota ludus no, eu pro iudico inimicus.</p>\n\n    <p>Mea id solet equidem graecis, atqui assentior adipiscing ius id, eum scripserit dissentiet ea. Quo ne decore latine, eu homero vituperatoribus his, no falli graece vim. Novum facilisis ut mea, an cum probo legere dolorem, omnium dolores accusamus eum te. Rebum gloriatur qui ea, augue posidonium per in. In impedit facilis deseruisse vim.</p>\n"]),n=e("../util");i.aboutTpl=function(e){return(0,n.html)(r)}},{"../util":15}],11:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.contactTpl=void 0;var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <h2>Contact</h2>\n    \n    <h3>Fill out our contact form below to get in touch with us!</h3>\n    <form>\n        <div class="Grid Grid--gutters Grid--1of2">\n            <div class="Grid-cell">\n                <label for="name">Name:</label>\n                <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required" autofocus="autofocus" />\n\n                <label for="email">Email Address:</label>\n                <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required" />\n\n                <label for="telephone">Telephone: </label>\n                <input type="tel" id="telephone" name="telephone" value="" />\n\n                <label for="enquiry">Enquiry: </label>\n                <select id="enquiry" name="enquiry">\n                    <option value="general">General</option>\n                    <option value="sales">Hire Me</option>\n                </select>\n            </div>\n\n            <div class="Grid-cell">\n                <label for="message">Message:</label>\n                <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>\n            </div>\n        </div>\n         \n        <button id="submit-button">Submit</button>\n    </form>\n'],['\n    <h2>Contact</h2>\n    \n    <h3>Fill out our contact form below to get in touch with us!</h3>\n    <form>\n        <div class="Grid Grid--gutters Grid--1of2">\n            <div class="Grid-cell">\n                <label for="name">Name:</label>\n                <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required" autofocus="autofocus" />\n\n                <label for="email">Email Address:</label>\n                <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required" />\n\n                <label for="telephone">Telephone: </label>\n                <input type="tel" id="telephone" name="telephone" value="" />\n\n                <label for="enquiry">Enquiry: </label>\n                <select id="enquiry" name="enquiry">\n                    <option value="general">General</option>\n                    <option value="sales">Hire Me</option>\n                </select>\n            </div>\n\n            <div class="Grid-cell">\n                <label for="message">Message:</label>\n                <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>\n            </div>\n        </div>\n         \n        <button id="submit-button">Submit</button>\n    </form>\n']),n=e("../util");i.contactTpl=function(){return(0,n.html)(r)}},{"../util":15}],12:[function(e,t,i){"use strict";function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(i,"__esModule",{value:!0}),i.galleryTpl=void 0;var n=r(['\n    <div class="gallery-link Grid-cell">\n        <div class="gallery-link-img" data-link="','" style="background-image: url(',')"></div>\n        <div class="gallery-link-title">\n            ',"\n        </div>\n    </div>\n"],['\n    <div class="gallery-link Grid-cell">\n        <div class="gallery-link-img" data-link="','" style="background-image: url(',')"></div>\n        <div class="gallery-link-title">\n            ',"\n        </div>\n    </div>\n"]),o=r(["\n    <h2>","</h2>\n    <p>",'</p>\n    <div class="Grid Grid--gutters small-Grid--full med-Grid--1of2 large-Grid--1of3 gallery-list">\n        ',"\n    </div>\n"],["\n    <h2>","</h2>\n    <p>",'</p>\n    <div class="Grid Grid--gutters small-Grid--full med-Grid--1of2 large-Grid--1of3 gallery-list">\n        ',"\n    </div>\n"]),l=e("../util"),a=function(e){return(0,l.html)(n,e.large,e.thumb,e.alt)};i.galleryTpl=function(e){return(0,l.html)(o,e.title,e.description,e.images.map(function(e){return a(e)}))}},{"../util":15}],13:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.homeTpl=void 0;var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    <h2>Welcome</h2>\n    \n    <h3>This is a Photo Gallery App written in vanilla ES6 JavaScript</h3>\n    <p>If you can read this, the app router sent you to the home page.</p>\n"],["\n    <h2>Welcome</h2>\n    \n    <h3>This is a Photo Gallery App written in vanilla ES6 JavaScript</h3>\n    <p>If you can read this, the app router sent you to the home page.</p>\n"]),n=e("../util");i.homeTpl=function(e){return(0,n.html)(r)}},{"../util":15}],14:[function(e,t,i){"use strict";function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(i,"__esModule",{value:!0}),i.portfolioTpl=void 0;var n=r(['\n    <div class="gallery-link Grid-cell">\n        <a href="','">\n            <div class="gallery-link-img" style="background-image: url(',')"></div>\n            <div class="gallery-link-title">\n                ',"\n            </div>\n        </a>\n    </div>\n"],['\n    <div class="gallery-link Grid-cell">\n        <a href="','">\n            <div class="gallery-link-img" style="background-image: url(',')"></div>\n            <div class="gallery-link-title">\n                ',"\n            </div>\n        </a>\n    </div>\n"]),o=r(['\n    <div class="Grid Grid--gutters small-Grid--full med-Grid--1of2 large-Grid--1of3 gallery-list">\n        ',"\n    </div>\n"],['\n    <div class="Grid Grid--gutters small-Grid--full med-Grid--1of2 large-Grid--1of3 gallery-list">\n        ',"\n    </div>\n"]),l=e("../util"),a=function(e){return(0,l.html)(n,e.link_url,e.img_url,e.title)};i.portfolioTpl=function(e){return(0,l.html)(o,e.map(function(e){return a(e)}))}},{"../util":15}],15:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.$on=function(e,t,i){return e.addEventListener(t,i)},i.html=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];var n="";return i.forEach(function(t,i){var r=e[i];Array.isArray(t)&&(t=t.join("")),n+=r,n+=t}),n+=e[e.length-1]}},{}]},{},[6]);
//# sourceMappingURL=bundle.js.map
