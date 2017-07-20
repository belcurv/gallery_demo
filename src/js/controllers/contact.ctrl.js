/* jshint esversion:6, devel: true */

// expects (target element, template, params)
// route.controller(el, route.template, hash_frag);

function contactCtrl(el, template, data) {
    
    console.log('Contact Controller fired.');
    el.innerHTML = template(data);
    
}

export { contactCtrl };
