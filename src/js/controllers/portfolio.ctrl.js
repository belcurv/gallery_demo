/* jshint esversion:6, devel: true */

import { getJSON } from '../service';

function portfolioCtrl(el, template, data) {
    
    console.log('Portfolio Controller fired.');
        
    getJSON('src/js/mock.json')
        .then( galeries => {
            el.innerHTML = template(galeries);
    });
    
}

export { portfolioCtrl };
