/* jshint esversion:6, devel:true, browser:true */

import { getJSON } from '../service';
import { $on }     from '../util';

/* ============================ private methods ============================ */


function bindEvents(el) {
    el.querySelectorAll('div.gallery-link')
        .forEach( elem => {
            $on(elem, 'click', clickHandler);
        });
}

function clickHandler(evt) {
    
    if (evt.target !== evt.currentTarget) {
        addPhotoModal(evt.target.dataset.link);
    }
    
    evt.stopPropagation();
    
}

function addPhotoModal(link) {

    // create modal and image DOM elements
    const body  = document.querySelector('body'),
          modal = document.createElement('div'),
          image = document.createElement('img');
    
    // affix styles and classes
    modal.className = 'photo-modal';
    image.setAttribute('src', link);
    
    // append children
    modal.appendChild(image);
    body.appendChild(modal);
    
    // bind click handler to modal click events
    $on(modal, 'click', removePhotoModal);
    
    // fade in image
    setTimeout(function() {
        image.style.opacity = '1';
    }, 100);
}

function removePhotoModal(evt) {
    
    if (evt.target === evt.currentTarget) {
        this.remove();
    }
    
    evt.stopPropagation();
}


/* ============================ public methods ============================= */

/* Photo gallery controller.
 * Hits mock API & passes response JSON to template.
 * Also binds user input events.
 *
 * @param   [object]     el         [target DOM element object]
 * @param   [function]   template   [gallery templating function]
 * @param   [string]     data       [the hash sub-route from router.js]
 *
*/
function galleryCtrl(el, template, data) {
    
    /* ajax 'get' request to mock API response with a specific gallery name
    */
    getJSON(`server/gallery-${data}.json`)
        .then( gallery => {
            el.innerHTML = template(gallery);
            return el;
        })
        .then(bindEvents);
    
}


/* ================================ exports ================================ */

export { galleryCtrl };
