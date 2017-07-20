/* jshint esversion:6, devel: true */

// expects (target element, template, params)
// route.controller(el, route.template, hash_frag);

function homeCtrl(el, template, data) {
    
    console.log('HomeController fired.');
    el.innerHTML = template(data);
    
}

export { homeCtrl };
