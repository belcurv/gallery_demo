/* jshint esversion:6, browser: true */

import { gallery_list } from './template';

export default class View {
    
    constructor() {
        this.target = document.getElementById('target');
    }
    
    render(data) {
        console.log(data);
        this.target.innerHTML = gallery_list(data);
        
    }
    
}
