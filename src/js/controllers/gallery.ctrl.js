/* jshint esversion:6, devel:true, browser:true */

import { getJSON } from '../service';

function galleryCtrl(el, template, data) {
    
    console.log('Gallery Controller fired.');
    console.log(`Data passed to controller: ${data}`);
    
    // need to capture specific gallery from 'data' hash fragment
    // like:
    //   getJSON(`src/js/${gallery}.json`)
    getJSON(`server/gallery-${data}.json`)
        .then( gallery => {
            el.innerHTML = template(gallery);
    });
    
}

export { galleryCtrl };

