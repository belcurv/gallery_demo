/* jshint esversion:6, devel:true, browser:true */

import { getJSON } from '../service';
import { $on }     from '../util';

/* ============================ private methods ============================ */

function selectElements(el) {
    return el.querySelectorAll('div.gallery-link');
}

function bindEvents(elemsArr) {
    elemsArr.forEach( elem => {
        $on(elem, 'click', clickHandler);
    });
}

function clickHandler(evt) {
    
    if (evt.target !== evt.currentTarget) {
        photoModal(evt.target, evt.target.dataset.link);
    }
    
    evt.stopPropagation();
    
}

function photoModal(el, link) {

    // create modal and image DOM elements
    const modal = document.createElement('div'),
          image = document.createElement('img');
    
    // affix styles and classes
    modal.className = 'photo-modal';
    image.setAttribute('src', link);
    
    // append children
    modal.appendChild(image);
    el.appendChild(modal);
    
    // bind click handler to modal click events
    $on(modal, 'click', removeModal);
}

function removeModal(evt) {
    
    if (evt.target === evt.currentTarget) {
        this.remove();
    }
    
    evt.stopPropagation();
}


/* ============================ public methods ============================= */

function galleryCtrl(el, template, data) {
    
    console.log('Gallery Controller fired.');
    console.log(`Data passed to controller: ${data}`);
    
    // need to capture specific gallery from 'data' hash fragment
    // like:
    //   getJSON(`src/js/${gallery}.json`)
    getJSON(`server/gallery-${data}.json`)
        .then( gallery => {
            el.innerHTML = template(gallery);
            return el;
        })
        .then(selectElements)
        .then(bindEvents);
    
}


/* ================================ exports ================================ */

export { galleryCtrl };
