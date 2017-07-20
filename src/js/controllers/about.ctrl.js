/* jshint esversion:6, devel: true */

// expects (target element, template, params)
// route.controller(el, route.template, hash_frag);

function aboutCtrl(el, template, data) {
    
    console.log('AboutController > setView fired.');
    el.innerHTML = template(data);
    
}

export { aboutCtrl };
