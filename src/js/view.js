/* jshint esversion:6, browser: true */

import { mainTpl } from './template';

export default class View {
    
    constructor() {
        this.target = document.getElementById('header');
    }
    
    render() {
        console.log('Main View render() method fired!');
        console.log(this.target);
        this.target.innerHTML = mainTpl();
        
    }
    
}
