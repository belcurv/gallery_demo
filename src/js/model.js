/* jshint esversion:6, devel:true */

import { getJSON } from './service';

export default class Model {
    
    constructor() {
    }
    
    /* fetch galleries
    */
    getGalleries() {
        return getJSON('src/js/mock.json')
            .then( galleries => galleries );
    }
    
}